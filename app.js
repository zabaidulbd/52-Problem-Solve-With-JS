//Problem - 1
//...............
// কোন একটি পুর্ন সংখ্যা দেওয়া থাকবে সেটি জোড় না বিজোড় বের করতে হবে। 
//জোড় হলে Odd এবং বিজোর হলে Even প্রিন্ট করবে।

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