//....................Problem - 1.................................

// কোন একটি পুর্ন সংখ্যা দেওয়া থাকবে সেটি জোড় না বিজোড় বের করতে হবে। 
//জোড় হলে Odd এবং বিজোর হলে Even প্রিন্ট করবে।

// নরমাল ফাংশন দিয়ে করা.............
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Example usage
checkEvenOrOdd(10); 
checkEvenOrOdd(15);
checkEvenOrOdd(-15);
checkEvenOrOdd(-10);

//এবার ES6 ব্যাবহার করে............

const checkEvenOrOddNumber = (number) => {

    if (number % 2 == 0) {
        console.log('Odd')
    }
    else {
        console.log('Even')
    }
}

checkEvenOrOddNumber(25);
checkEvenOrOddNumber(10);
checkEvenOrOddNumber(-25);
checkEvenOrOddNumber(-10);


// এবার ES6 ব্যাবহার করে..এবং টারনারি অপারেটর ব্যবহার করে..............

const checkEvenOrOdd = (number) => number % 2 == 0 ? 'Odd' : 'Even';

console.log(checkEvenOrOdd(25));
console.log(checkEvenOrOdd(10));




