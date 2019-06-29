import Tweet from './tweet/tweet';
import Collector from './modules/collector';
import MetadataGenerator from './modules/metadataGenerator';

let app = () => {

    var collector = new Collector();
    var metadataGenerator = new MetadataGenerator();

    var tweet = new Tweet(collector.text, metadataGenerator.metadata);
    tweet.parseTweet();
    tweet.addMarkupToTweet();

    console.log(tweet.markedUpTweet);
}
app();