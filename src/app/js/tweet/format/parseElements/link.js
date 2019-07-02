import markupTypes from '../../../constants/markupTypes';
import HTMLMarker from '../../../htmlMarker/htmlMarker';

class Link{

	constructor(text=''){
		this.text = text;
	}

	// returns the necessary HTML markup element that is respective to this tweet element
	create(){
		return new HTMLMarker(markupTypes.ANCHOR, this.text, this.text.slice(0,-1)).createMarkupElement();
	}
}

export default Link;