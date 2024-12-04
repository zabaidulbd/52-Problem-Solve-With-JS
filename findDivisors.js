/*
 *একটি সংখ্যার সব গুননীয়ক(ভজক/Divisors) বের করা।
 *Find all the divisors of a number.
 *"Determine all the factors of a number."
 *"List all the divisors of a number."
 */

function findDivisors(number) {
  let divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  console.log(divisors);
}

findDivisors(28);

// another way.....

function findDivisors2(number) {
  let divisors2 = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors2.push(i);
    }
  }
  return divisors2;
}

const number = 28;
console.log(findDivisors2(number));
