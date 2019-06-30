

class Strong {

	constructor(text){
		this.text = text;
	}

	//returns the necessary html markup element
	create(){
		return `<strong>${this.text}</strong>`;
	}
}

export default Strong;