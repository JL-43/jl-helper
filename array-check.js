const arrayCheck = (array) => {
	if (!Array.isArray(array)) {
		console.log('Not an array!');
		return 'Not an array!';
	}
	return true;
};

export default arrayCheck;
