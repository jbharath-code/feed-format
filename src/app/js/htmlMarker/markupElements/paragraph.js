

class Paragraph {

	constructor(text){
		this.text = text;
	}

	createParagraphTag(){
		return `<p>${this.text}</p>`;
	}
}

export default Paragraph;