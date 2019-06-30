import React from 'react';
import styles from './appContainer.css';
import Collector from '../js/modules/collector';
import MetadataGenerator from '../js/modules/metadataGenerator';

import Tweet from '../js/tweet/tweet'
class AppContainer extends React.Component {

	constructor(props){
		super(props);

		var collector = new Collector();
		var metadataGenerator = new MetadataGenerator();

		var tweet = new Tweet(collector.text, metadataGenerator.metadata);
		tweet.parseTweet();
		this.state = {
			collectedTweet: collector.text,
			markedUpTweet: tweet.addMarkupToTweet()
		};
	}


	render(){
		return (
			<div className="container">
				<div>
					{this.state.collectedTweet}
				</div>
				<div>
					{this.state.markedUpTweet}
				</div>
				<div dangerouslySetInnerHTML={{ __html: this.state.markedUpTweet }}></div>
			</div>
		);
	}
}

export default AppContainer;