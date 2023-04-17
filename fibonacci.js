// Loop-based - "dynamic programming bottom-up"
function fibs(n) {
    let fibArr = [0, 1];
    let a = 0;
    let b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        fibArr.push(c);
        a = b;
        b = c;
    }
    return fibArr;
}

console.log(fibs(20));

// Returns nth Fibonacci number - recursive
function fibsRec(fn, array = [0, 1]) {
    if (fn <= 0) return "Please enter a positive integer.";
    else if (fn === 1) return [0];
    else if (array.length >= fn) return array;
    return fibsRec(fn, [...array, array.at(-1) + array.at(-2)]);
  }

console.group(fibsRec(20));

//Multiple base cases:
// 1. first element is 0
// 2. second element is 1
// 3. nth element is sum of (n-1)th and (n-2)th elements