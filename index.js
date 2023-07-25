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
 