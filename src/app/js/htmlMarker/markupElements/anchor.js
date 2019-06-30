

class Anchor {

	constructor(text = '', link = ''){
		this.text = text;
		this.link = link;
	}

	createAnchorTag(){
		return `<a href="${this.link}">${this.text}</a>`;
	}
}

export default Anchor;