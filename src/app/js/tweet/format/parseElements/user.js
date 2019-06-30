import markupTypes from '../../../constants/markupTypes';
import HTMLMarker from '../../../htmlMarker/htmlMarker';

class User{

	constructor(text='', baseUrl=''){
		this.text = text;
		this.baseUrl = baseUrl
	}

	create(){
		let link =  `${this.baseUrl}${this.text.substr(1)}`;
		let displayText = this.text.substr(1);
		return `@${new HTMLMarker(markupTypes.ANCHOR, displayText, link).createMarkupElement()}`;
	}
}

export default User;