const reversString = (string) => {
    let text = "";
    const arrString = string.split("");
    for (let i = arrString.length - 1; i >=0; i--) {
        const element = arrString[i];
        text = text + element 
    }
    return text
}


const sumOfPositive = (arr) => {
    let sum = 0;
    for (const number of arr) {
        if (number > 0) {
            sum += number
        }
    }
   return sum
}


const getFrequent = (arr) => {
    let frequentValue = {};
    let frequent = arr[0];
    let highestFreq = 0;
    
    arr.forEach(number => {
        frequentValue[number] = (frequentValue[number] || 0 ) + 1;
    });
    Object.keys(frequentValue).forEach(n => {
        if (frequentValue[n] > highestFreq) {
            frequent = n
            highestFreq = frequentValue[n]
        }
    })
    return frequent
}


const getNumbers = (arr,target) => {
    let r = arr.length - 1;

    for (let l = 0; l < r; ) {
      const sum = arr[l] + arr[r];
      if (sum === target) {
        return [l, r];
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  
    return [];
}

const calculate = (num1, num2, logic) => {
    if (logic === "+") {
        return num1 + num2
    } else if (logic === "-") {
        return num1 - num2
    } else if (logic === "*") {
        return num1 * num2
    } else {
        return num1 / num2
    }
}

const createPass = () => {
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const special = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const randomCharacter = (character) => character[Math.floor(Math.random() * 8)];
  let password = randomCharacter(uppercase); 
  password += randomCharacter(lowercase); 
  password += randomCharacter(special); 

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
      password += randomCharacter(uppercase);
    } else if (randomIndex === 1) {
      password += randomCharacter(lowercase);
    } else {
      password += randomCharacter(special);
    }
  }
  password = password.split('').sort(() => 0.5 - Math.random()).join('');
  return password
}
 
const convertRomanToInt =(number) => {

  const roman = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900
  };

  let result = 0;
  let i = 0;


  while (i < number.length) {
    if (i + 1 < number.length && number.substring(i, i + 2) in roman) {
      result += roman[number.substring(i, i + 2)];
      i += 2;
    } else {
      result += roman[number.charAt(i)];
      i += 1;
    }
  }

  return result
}

const secondSmallest = (arr) => {
  const newArr = arr.sort((x,y) => x - y );
  return newArr[1]
}
