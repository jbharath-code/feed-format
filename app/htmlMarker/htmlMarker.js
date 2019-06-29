import Anchor from './markupElements/anchor';
import Strong from './markupElements/strong';
import Paragraph from './markupElements/paragraph';
import markupTypes from '../constants/markupTypes';

class HTMLMarker{

	constructor(type='', text = '', link = ''){
		this.type = type;
		this.text = text;
		this.link = link;

	}

	createMarkupElement(){
		switch (this.type) {
			case markupTypes.ANCHOR:
				const anchorElement = new Anchor(this.text, this.link);
				return anchorElement.createAnchorTag();
			
			case markupTypes.STRONG:
				const strongElement = new Strong(this.text);
				return strongElement.createStrongTag();
		
			default:
				const paragraphElement = new Paragraph(this.text);
				return paragraphElement.createParagraphTag();
		}
	}
}

export default HTMLMarker;