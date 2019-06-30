import Tweet from './tweet/tweet';
import Collector from './modules/collector';
import MetadataGenerator from './modules/metadataGenerator';

// sample implementation of the js logic 
// in case it has to be use anywhere else other than 
// this file is not being used to render anything
// this is a sample demo to check if this has to be used anywhere else    
const main = () => {

    // collector is the class replicating the first module responsibility
    var collector = new Collector();

    // metadataGenerator is the class replicating the second module responsibility
    var metadataGenerator = new MetadataGenerator();

    //Tweet is the class responsible for marking up tweet text using the information from
    // first 2 modules
    var tweet = new Tweet(collector.text, metadataGenerator.metadata);
    tweet.parseTweet();
    tweet.addMarkupToTweet();

    console.log(tweet.markedUpTweet);
}

export default main;