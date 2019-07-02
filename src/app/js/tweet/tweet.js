import { hashArrayWith2Indices } from "../utility/utiltyMethods";
import TweetFormatter from "./format/tweetFormatter";
import feedParseTypes from "../constants/feedParseTypes";


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
		this.tweetParseMetadata.sort((a,b) => {
			return a.startPosition > b.startPosition
		});
		
		var stringHash = [];
		for (let index = 0; index < this.tweet.length; index++) {
			stringHash[index] = this.tweet[index];
		}
		
		var tweetParseMetadataUpdated = [];
		for (let index = 0; index < this.tweetParseMetadata.length; index++) {	
			tweetParseMetadataUpdated.push(this.tweetParseMetadata[index]);
			if(index > 0){
				let prevElement = this.tweetParseMetadata[index - 1];
				let currentElement = this.tweetParseMetadata[index];
				if((currentElement.startPosition - prevElement.endPosition) != 1){
					var element = {
						startPosition: prevElement.endPosition + 1,
						endPosition: currentElement.startPosition - 1,
						type: feedParseTypes.TEXT
					}
					tweetParseMetadataUpdated.push(element);
				}
			}
		}

		tweetParseMetadataUpdated.sort((a,b) => {
			return a.startPosition > b.startPosition
		});
		
		var result = '';
		tweetParseMetadataUpdated.forEach(element => {
			let text = this.tweet.substring(element.startPosition, element.endPosition + 1);
			result += new TweetFormatter(element.type, text, this.domainUrl).createFormatter();
		});
		
		this.markedUpTweet = result;
		this.rendererForMarkedUpTweet = result;
	}
}

export default Tweet;