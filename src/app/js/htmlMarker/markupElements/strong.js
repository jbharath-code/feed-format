

class Strong {

	constructor(text){
		this.text = text;
	}

	createStrongTag(){
		return `<strong>${this.text}</strong>`;
	}
}

export default Strong;