import markupTypes from '../../../constants/markupTypes';
import HTMLMarker from '../../../htmlMarker/htmlMarker';

class User{

	constructor(text='', baseUrl=''){
		this.text = text;
		this.baseUrl = baseUrl
	}

	// returns the necessary HTML markup element that is respective to this tweet element
	create(){
		let link =  `${this.baseUrl}${this.text.substr(1)}`;
		let displayText = this.text.substr(1);
		return `@${new HTMLMarker(markupTypes.ANCHOR, displayText, link).createMarkupElement()}`;
	}
}

export default User;