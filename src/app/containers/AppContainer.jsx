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
		tweet.addMarkupToTweet();
		this.state = {
			collectedTweet: collector.text,
			markedUpTweet: tweet.markedUpTweet,
			rendererForMarkedUpTweet: tweet.rendererForMarkedUpTweet
		};
	}


	render(){
		return (
			<div className="root-container">
				<div className="container">
					<div className="card">
						{this.state.collectedTweet}
					</div>
					<div className="card">
						{this.state.markedUpTweet}
					</div>
				</div>
			</div>
		);
	}
}

export default AppContainer;