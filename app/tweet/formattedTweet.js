
const formattedTweet = (input, processedInformation) => {

	processedInformation = processedInformation.sort((a,b) => {
		return (a.startPosition > b.startPosition);
	});

	var hashArray = {};
	var result = '';
	for (let index = 0; index < input.length; index++) {
		hashArray[index] = input.charAt(index);		
	}
	
	var brokenArray = input.split(' ');

	var currentIndex = 0;
	brokenArray = brokenArray.map((element, index) => {
		let updatedElement = Object.assign({}, {text: brokenArray[index]});
		updatedElement['startPosition'] = currentIndex;
		updatedElement['endPosition'] = currentIndex + updatedElement.text.length;
		currentIndex = updatedElement['endPosition'] + 1;
	
		return updatedElement;
	});


	var hashedProcessedInformation = [];
	var hashedBrokenArray = [];

	for (let index = 0; index < processedInformation.length; index++) {
		let key = `${processedInformation[index]['startPosition']}/${processedInformation[index]['endPosition']}`;
		hashedProcessedInformation[key] = Object.assign({}, processedInformation[index]);
	}

	for (let index = 0; index < brokenArray.length; index++) {
		let key = `${brokenArray[index]['startPosition']}/${brokenArray[index]['endPosition']}`;
		hashedBrokenArray[key] = Object.assign({}, brokenArray[index]);
	}

	var result = '';

	for (const key in hashedBrokenArray) {
		let text = hashedBrokenArray[key]['text'];

		if(hashedProcessedInformation.hasOwnProperty(key)){
			switch (hashedProcessedInformation[key].type) {
				case 'Entity':
					result += `<strong>${text}</strong>`;
				break;

				case 'Link':
					result += `<a href="${text}">${text} </a>`;
				break;

				case 'Twitter username':
					result += `@ <a href="http://twitter.com/${text.substr(1)}">${text.substr(1)}</a>`;
				break;
			}
		}
		else{
			result += text;
		}
		result += ' ';
	}

	return result.slice(0,-1);

} 

export default formattedTweet;