// function a(){
//     var name='fasalu'
//     function b(){
//         console.log(name);
//     }
//     b();
// }
// a();

// function myFunction() {
//     let a = 4;
//     return a * a;
//   }

//   console.log(myFunction());

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Example usage
console.log(isPrime(11)); // true
console.log(isPrime(12)); // false
