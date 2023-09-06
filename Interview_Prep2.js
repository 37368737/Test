// Question1: Anagram Checker

function checkAnagram(str1, str2){
    const sorted1 = str1.toLowerCase().split('').sort().join('');
    const sorted2 = str2.toLowerCase().split('').sort().join('');
    return sorted1 === sorted2;
}

const Result = checkAnagram('listen', 'silent');
console.log(Result);

// Question2: Fibonacci Series

function Fibonacci(n){
    const fibSeries = [0, 1];
    for (let i = 2; i < n; i++){
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}

const answer = Fibonacci(10);
console.log(answer);

// Question3: Object Deep Comparison

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
      return false;
  
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
      return false;
  
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key]))
        return false;
    }
  
    return true;
  }
  
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { c: 2 }, a: 1 };
  const isDeepEqual = deepEqual(obj1, obj2);
  console.log(isDeepEqual);
  
  //Question4: Find Missing Number

  function findMissingNum(arr){
    const n = arr.length + 1;
    const totalSum = (n*(n+1))/2;
    const arraySum = arr.reduce((sum, num) => sum + num, n);
    return totalSum - arraySum;
  }

  const numbers = [3, 0, 2];
  const missingNum = findMissingNum(numbers);
  console.log(missingNum);

  // Question5: Array Rotation

  function rotateArr(arr, steps){
    const rotated = [];
    for (let i = 0; i < arr.length; i++){
        const newIndex = (i + steps) % arr.length;
        rotated[newIndex] = arr[i];
    }
    return rotated;
  }

  const ogArr = [1, 2, 3, 4, 5];
  const rotatedArr = rotateArr(ogArr);
  console.log(rotatedArr);