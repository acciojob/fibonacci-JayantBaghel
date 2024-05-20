function fibonacci(num) {
// your code here
	if (num === 0) return 0;
    if (num === 1) return 1;

    let prev = 0, curr = 1;
    for (let i = 2; i <= num; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
}

module.exports = fibonacci;
