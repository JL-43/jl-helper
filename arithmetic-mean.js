const arithmeticMean = (array) => {
	if (!Array.isArray(array)) {
		console.log('Not an array!');
		return;
	}

	return array.reduce((a, b) => a + b) / array.length;
};
