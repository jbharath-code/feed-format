

class Anchor {

	constructor(text = '', link = ''){
		this.text = text;
		this.link = link;
	}

	//returns the necessary html markup element
	create(){
		return `<a href="${this.link}">${this.text}</a>`;
	}
}

export default Anchor;