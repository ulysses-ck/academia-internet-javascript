/**
 *
 * @param {string} sentence
 * @param {string} character
 * @returns {string}
 */
const countRepeatedChar = (sentence, character) => {
	const arrSentence = sentence.split("");
	let timesRepeated = 0;
	arrSentence.forEach((sentenceChar) => {
		if (sentenceChar === character) {
			timesRepeated++;
		}
	});

return `el carácter "${character}" se repite ${timesRepeated} veces en "${sentence}"`;
};

console.log(countRepeatedChar("hola como estas", "o"));
