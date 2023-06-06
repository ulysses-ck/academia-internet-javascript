/**
 *
 * @returns {number}
 */
const randomInteger = () => Math.floor(Math.random() * 100);

/**
 *
 * @param {Array} arr
 */
const randomEvenOdd = (arr) => {
	arr.forEach((num) => {
		if (num % 2 === 0) {
			console.log(`el número es par`);
		} else {
			console.log(`el número es impar`);
		}
	});
};

const arrRandomValues = [];

for (let i = 0; i < 5; i++) {
	arrRandomValues.push(randomInteger());
}

randomEvenOdd(arrRandomValues);
