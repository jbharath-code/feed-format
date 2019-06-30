import { hashArrayWith2Indices } from "../utility/utiltyMethods";
import TweetFormatter from "./format/tweetFormatter";


class Tweet{
	/**
	 *Creates an instance of Tweet.
	 * @param {string} [tweet='']
	 * @param {string} [tweetParseMetadata='']
	 * @param {string} [domainUrl='http://twitter.com/']
	 * @memberof Tweet
	 */
	constructor(tweet = '', tweetParseMetadata = ''){
		this.tweet = tweet;
		this.tweetParseMetadata = tweetParseMetadata;
		this.domainUrl = 'http://twitter.com/';
		this.parsedTweet = [];
		this.markedUpTweet = '';
		this.rendererForMarkedUpTweet = '';
	}

	// break the tweet text into parts and attach start and end indices 
	// so that it can be mapped to the second modules output
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

	//after parsing the tweet and indexing it
	// prepare text along with style markups and text to render incase it is used in web
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

			// The tweetformatter is the factory fot tweets and takes care of the logic to appropiately return the
			// necessary styling for the element
			let stringText = new TweetFormatter(type, text, this.domainUrl).createFormatter();
			this.markedUpTweet += stringText;
			this.markedUpTweet += ' ';
			
			this.rendererForMarkedUpTweet += stringText;
			this.rendererForMarkedUpTweet += '&nbsp;'
		}	

		//this is the actual output that is needed.
		this.markedUpTweet = this.markedUpTweet.slice(0,-1);
		
		//This is being created only for rendering purpose
		this.rendererForMarkedUpTweet = this.rendererForMarkedUpTweet.slice(0, -6);
	}



}

export default Tweet;