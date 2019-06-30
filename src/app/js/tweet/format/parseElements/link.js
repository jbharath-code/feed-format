import markupTypes from '../../../constants/markupTypes';
import HTMLMarker from '../../../htmlMarker/htmlMarker';

class Link{

	constructor(text=''){
		this.text = text;
	}

	create(){
		return new HTMLMarker(markupTypes.ANCHOR, this.text, this.text).createMarkupElement();
	}
}

export default Link;