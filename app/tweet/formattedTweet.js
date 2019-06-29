import feedParseTypes from '../constants/feedParseTypes';

import markupTypes from '../constants/markupTypes';
import HTMLMarker from '../htmlMarker/htmlMarker';

import {
	hashArrayWith2Indices
} from '../utility/utiltyMethods';


const getIndicedFeedText = (feed) => {
	var splitFeed = feed.split(' ');
	var currentIndex = 0;

	splitFeed = splitFeed.map((element, index) => {
		let updatedElement = Object.assign({}, {text: splitFeed[index]});
		updatedElement['startPosition'] = currentIndex;
		updatedElement['endPosition'] = currentIndex + updatedElement.text.length;
		currentIndex = updatedElement['endPosition'] + 1;
	
		return updatedElement;
	});
	return splitFeed;
}


const formattedTweet = (input, processedInformation) => {


	var hashedProcessedInformation = hashArrayWith2Indices(
										processedInformation, 
										'startPosition', 
										'endPosition'
									);

	var hashedBrokenArray = hashArrayWith2Indices(
								getIndicedFeedText(input), 
								'startPosition', 
								'endPosition'
							);

	var result = '';

	for (const key in hashedBrokenArray) {
		let text = hashedBrokenArray[key]['text'];
		
		if(hashedProcessedInformation.hasOwnProperty(key)){
			let type = hashedProcessedInformation[key].type;
			switch (type) {
				case feedParseTypes.ENTITY:
					result += new HTMLMarker(markupTypes.STRONG, text).createMarkupElement();
				break;

				case feedParseTypes.LINK:
					result += new HTMLMarker(markupTypes.ANCHOR, text, text).createMarkupElement();
				break;

				case feedParseTypes.USER:
					let link =  `http://twitter.com/${text.substr(1)}`;
					let textModified = text.substr(1);
					result += `@${new HTMLMarker(markupTypes.ANCHOR, textModified, link).createMarkupElement()}`;
				break;
			}
		}
		else{
			result += text;
		}
		result += ' ';
	}

	return result.slice(0,-1);

} 

export default formattedTweet;