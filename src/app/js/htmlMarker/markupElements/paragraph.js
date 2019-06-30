

class Paragraph {

	constructor(text){
		this.text = text;
	}

	//returns the necessary html markup element
	create(){
		return `<p>${this.text}</p>`;
	}
}

export default Paragraph;