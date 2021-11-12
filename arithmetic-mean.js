import arrayCheck from './array-check.js';
const arithmeticMean = (array) => {
	if (!arrayCheck(array)) {
	}
	return array.reduce((a, b) => a + b) / array.length;
};
