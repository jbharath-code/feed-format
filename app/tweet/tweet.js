import { hashArrayWith2Indices } from "../utility/utiltyMethods";
import TweetFormatter from "./format/tweetFormatter";


class Tweet{

	constructor(tweet = '', tweetParseMetadata = ''){
		this.tweet = tweet;
		this.tweetParseMetadata = tweetParseMetadata;
		this.domainUrl = 'http://twitter.com/';
		this.parsedTweet = [];
		this.markedUpTweet = '';
	}

	parseTweet(){
		this.parsedTweet = this.tweet.split(' ');
		
		var currentIndex = 0;
		this.parsedTweet = this.parsedTweet.map((element, index) => {
			let updatedElement = Object.assign({}, {text: this.parsedTweet[index]});
			updatedElement['startPosition'] = currentIndex;
			updatedElement['endPosition'] = currentIndex + updatedElement.text.length;
			currentIndex = updatedElement['endPosition'] + 1;
		
			return updatedElement;
		});
	}

	addMarkupToTweet(){

		var hashedProcessedInformation = hashArrayWith2Indices(
			this.tweetParseMetadata, 
			'startPosition', 
			'endPosition'
		);

		var hashedBrokenArray = hashArrayWith2Indices(
			this.parsedTweet, 
			'startPosition', 
			'endPosition'
		);

		for (const key in hashedBrokenArray) {
			let text = hashedBrokenArray[key]['text'];
			let type = '';
			if(hashedProcessedInformation.hasOwnProperty(key)){
				type = hashedProcessedInformation[key].type;
			}
			this.markedUpTweet += new TweetFormatter(type, text, this.domainUrl).createFormatter();
			this.markedUpTweet += ' ';
		}	

		return this.markedUpTweet.slice(0,-1);
	}



}

export default Tweet;