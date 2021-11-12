import arrayCheck from './array-check.js';
const statMedian = (array) => {
	if (!arrayCheck(array)) {
	}

	if (array.length % 2 === 0) {
		let med_hi = array.length / 2;
		let med_lo = med_hi - 1;
		return (array[med_lo] + array[med_hi]) / 2;
	}
	return array[array.length / 2 - 0.5];
};

const result = statMedian([4, 9, 15, 19, 23, 29]);
console.log(result);
