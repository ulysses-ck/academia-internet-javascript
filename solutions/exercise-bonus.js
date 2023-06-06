/**
 *
 * @param {string} sentence
 * @return {string}
 */
const converterUpperCase = (sentence) => {
	let sentenceArr = sentence.split("");
	let lowerCaseSentence;
	let upperCaseSentence = "";

	for (let i = 0; i < sentenceArr.length; i++) {
		upperCaseSentence += sentenceArr[i];
		if (sentenceArr[i] === ".") {
			lowerCaseSentence = sentence.slice(i + 1);
			break;
		}
	}
	return upperCaseSentence.toUpperCase() + lowerCaseSentence;
};

console.log(converterUpperCase("www.techacademy.com"));
