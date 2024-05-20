 function fibonacci(num) {
            if (num === 0) return 0;
            if (num === 1) return 1;

            let prev = 0, curr = 1;
            for (let i = 2; i <= num; i++) {
                [prev, curr] = [curr, prev + curr];
            }
            return curr;
        }

        function calculateFibonacci() {
            const input = prompt("Enter a positive integer (0-50):");
            const num = parseInt(input, 10);

            if (isNaN(num) || num < 0 || num > 50) {
                alert("Please enter a valid positive integer between 0 and 50.");
            } else {
                const result = fibonacci(num);
                alert(`The ${num}th Fibonacci number is ${result}.`);
            }
        }

module.exports = fibonacci;
