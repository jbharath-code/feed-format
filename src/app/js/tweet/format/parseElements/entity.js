import markupTypes from '../../../constants/markupTypes';
import HTMLMarker from '../../../htmlMarker/htmlMarker';

class Entity{

	constructor(text=''){
		this.text = text;
	}

	create(){
		return new HTMLMarker(markupTypes.STRONG, this.text, this.text).createMarkupElement();
	}
}

export default Entity;