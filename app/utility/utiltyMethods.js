const hashArrayWith2Indices = (parentArray, key1, key2) => {

	var result = [];

	for (let index = 0; index < parentArray.length; index++) {

		let indexing = `${parentArray[index][key1]}/${parentArray[index][key2]}`
		result[indexing] = Object.assign({}, parentArray[index]);
	}

	return result;
}


const formIndexKeyWithKeys = (element, keys) => {
	let indexing = '';
	for (const key in keys) {
		indexing += `${element[key]}/`;
	}
	indexing = indexing.slice(0,-1);

	return indexing;
}

export {
	hashArrayWith2Indices,
	formIndexKeyWithKeys
};