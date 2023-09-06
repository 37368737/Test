//Question1: Reverse a string

function reverseString(str){
    return str.split('').reverse().join('');
}

const reversed = reverseString('hello');
console.log(reversed);

//Question2: Find The Largest element

function findLargestNum(arr){
    return Math.max(...arr);
}

const numbers = [4, 9, 2, 17, 5];
const largestNum = findLargestNum(numbers);
console.log(largestNum);

//Question3: Pallindrome Check

function isPalindrome(str){
    const ogString = str.toLowerCase().replace(/\W/g, '');
    const reversedStr = ogString.split('').reverse().join('');
    return ogString === reversedStr;
}

const testStr = "A man, a plan, a canal, Panama";
const isPalindromic = isPalindrome(testStr);
console.log(isPalindromic);

//Question4: FizzBuzz

for (let i = 1; i<=100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//Question5: Manipulating DOM Elements

const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', function(){
    message.textContent = 'Button clicked!';
});