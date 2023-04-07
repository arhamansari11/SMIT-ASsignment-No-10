// Functions 

// 1. Write a js program to find cube of any number using function.

function cube(num) {
    return num * num * num;

}
console.log(cube(4));


//2.Write a js program to find diameter, circumference and area of circle using functions.

// Diameter

function diameter(r) {
    return 2 * r;

}
console.log(diameter(2));

// Circumference

function circumference(r) {

    let pi = 3.14;
    return 2 * pi * r;

}
console.log(circumference(2));

//  Area

function area(r) {

    let pi = 3.14;
    return pi * r ** 2;

}
console.log(area(5));

// 3. Write a js program to find maximum and minimum between two numbers using functions.

// For Minimum

function min(val1, val2) {

    if (val1 < val2) {
        console.log("Value 1 is minimum")

    }
    else if (val2 < val1) {
        console.log("Value 2 is minimum")

    }
    else {
        console.log("Both Values are same.")
    }

}
console.log(min(5, 5));

//  For Maximum

function max(val1, val2) {

    if (val1 > val2) {
        console.log("Value 1 is maximum")

    }
    else if (val2 > val1) {
        console.log("Value 2 is maximum")

    }
    else {
        console.log("Both Values are same.")
    }

}
console.log(max(9, 10));


// 4. Write a js program to check whether a number is even or odd using functions.

function evenodd(num) {

    if (num % 2 === 0) {

        return "Even";
    }
    else {
        return "Odd";
    }

}
console.log(evenodd(10));

// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

function prime(num) {

    if (num < 2) {
        return false;
    }
    for (let a = 2; a <= Math.sqrt(num); a++) {
        if (num % a === 0) {
            return false;
        }

    }
    return true;


}
console.log(prime(11));

// 6. Write a js program to find all prime numbers between given interval using functions.

function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(findPrimes(10, 50));

// 7. Write a js program to print all strong numbers between given interval using functions.


function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function isStrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

function findStrongNumbers(start, end) {
    let strongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isStrong(i)) {
            strongNumbers.push(i);
        }
    }
    return strongNumbers;
}

console.log(findStrongNumbers(10, 200));

//8. Write a js program to print all Armstrong numbers between given interval using functions.

function countDigits(num) {
    return num.toString().length;
}

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const n = countDigits(num);
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

function findArmstrongNumbers(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}
console.log(findArmstrongNumbers(100, 1000));


// 9. Write a js program to print all perfect numbers between given interval using functions.

function getFactors(num) {
    let factors = [];
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function isPerfect(num) {
    const factors = getFactors(num);
    const sum = factors.reduce((acc, curr) => acc + curr, 0);
    return sum === num;
}

function findPerfectNumbers(start, end) {
    let perfectNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

console.log(findPerfectNumbers(1, 1000));


// 10. Write a js program to find power of any number using function.

function calculatePower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 2));

//   11. Write a js program to print all natural numbers between 1 to n using function.


function printNaturalNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNaturalNumbers(10);

//   12. Write a js program to print all even or odd numbers in given range using function.

function printEvenOrOddNumbers(start, end, isEven) {
    for (let i = start; i <= end; i++) {
        if (isEven && i % 2 === 0) {
            console.log(i);
        } else if (!isEven && i % 2 !== 0) {
            console.log(i);
        }
    }
}

console.log("Even numbers:");
printEvenOrOddNumbers(1, 10, true);

console.log("Odd numbers:");
printEvenOrOddNumbers(1, 10, false);

// 13. Write a js program to find sum of all natural numbers between 1 to n using function.

function sumNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumNaturalNumbers(10));

//   14. Write a js program to find sum of all even or odd numbers in given range using function.

function sumEvenOrOddNumbers(start, end, isEven) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (isEven && i % 2 === 0) {
            sum += i;
        } else if (!isEven && i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumEvenOrOddNumbers(1, 10, true));

console.log(sumEvenOrOddNumbers(1, 10, false));

//   15. Write a js program to find reverse of any number using function.

function reverseNumber(num) {
    let reverse = 0;
    while (num !== 0) {
        const digit = num % 10;
        reverse = (reverse * 10) + digit;
        num = Math.floor(num / 10);
    }
    return reverse;
}

console.log(reverseNumber(12345));

//   16. Write a js program to check whether a number is palindrome or not using function.


function isPalindrome(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return num === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(12345));

// 17. Write a js program to find sum of digits of a given number using function.


function sumOfDigits(num) {
    let sum = 0;
    while (num !== 0) {
        const digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(12345));

//   18. Write a js program to find factorial of any number using function.

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));

//   19. Write a js program to generate nth Fibonacci term using function.

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacci(6));

//   20. Write a js program to find GCD (HCF) of two numbers using function.

function gcd(num1, num2) {
    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

console.log(gcd(12, 18));


//  21. Write a js program to find LCM of two numbers using function.

function lcm(num1, num2) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    return (num1 * num2) / gcd(num1, num2);
}

console.log(lcm(12, 18));

//  22. Write a js program to display all array elements using function.


function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const arr = [1, 2, 3, 4, 5];
displayArray(arr);

//   23. Write a js program to find sum of elements of array using function.


function sumArray(arr2) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr2 = [1, 2, 3, 4, 5];
const result = sumArray(arr);
console.log(result);





















