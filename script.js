//your JS code here. If required.
 function getNumbers() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Function to filter out odd numbers
        function filterOddNumbers(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter(num => num % 2 === 0);
                    document.getElementById('output').textContent = evenNumbers.join(', ');
                    resolve(evenNumbers);
                }, 1000);
            });
        }

        // Function to multiply even numbers by 2
        function multiplyByTwo(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedNumbers = numbers.map(num => num * 2);
                    document.getElementById('output').textContent = multipliedNumbers.join(', ');
                    resolve(multipliedNumbers);
                }, 2000);
            });
        }

        // Chaining the promises
        getNumbers()
            .then(numbers => filterOddNumbers(numbers))
            .then(evenNumbers => multiplyByTwo(evenNumbers))
            .catch(error => console.error(error));