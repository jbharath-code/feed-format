
import feedParseTypes from '../../constants/feedParseTypes';
import User from './parseElements/user';
import Link from './parseElements/link';
import Entity from './parseElements/entity';

class TweetFormatter {

	constructor(type='', text='', domainUrl=''){
		this.type = type;
		this.text = text;
		this.domainUrl = domainUrl;
	}

	createFormatter(){
		switch (this.type) {
			case feedParseTypes.ENTITY:
				return new Entity(this.text).create();
	
			case feedParseTypes.LINK:
				return new Link(this.text).create();
	
			case feedParseTypes.USER:
				return new User(this.text, this.domainUrl).create();
			default:
				return this.text;
		}
	}
}

export default TweetFormatter;