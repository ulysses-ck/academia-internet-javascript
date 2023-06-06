const numberInput = 1;

let numbers = [];

for (let i = 1; i <= 100; i++) {
	if (i % numberInput === 0) {
		numbers.push(i);
	}
}

console.log(numbers.join(", "));
