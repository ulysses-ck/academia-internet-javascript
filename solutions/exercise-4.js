
/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
const reverseArray = (arr) => {
	let reversedArray = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		reversedArray.push(arr[i]);
	}
	return reversedArray;
};

console.log(reverseArray([23, 5, 34, 56, 98, "cadena", 7]));
