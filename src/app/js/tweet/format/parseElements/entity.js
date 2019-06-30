import markupTypes from '../../../constants/markupTypes';
import HTMLMarker from '../../../htmlMarker/htmlMarker';

class Entity{

	constructor(text=''){
		this.text = text;
	}

	// returns the necessary HTML markup element that is respective to this tweet element
	create(){
		return new HTMLMarker(markupTypes.STRONG, this.text, this.text).createMarkupElement();
	}
}

export default Entity;