// 1

// function GiveInfo (argument) {
//     var arg = argument
//     var symbols = [',', '.', '/', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '"', '№', ';', '%', ':', '?']
//     let qttsymbols = 0;
//     var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//     let qttnumbers = 0;
//     var letters = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (symbols.includes(arg[i])) {
//             qttsymbols = qttsymbols + 1
//         }
//         if (numbers.includes(arg[i])) {
//             qttnumbers = qttnumbers + 1
//         }
//     }
//     let splittedText = arg.split(' ')
//     for (let i = 0; i < splittedText.length; i++) {
//         letters = letters + splittedText[i].length
//     }
//     console.log(`Количество букв - ${letters}, цифр - ${qttnumbers} и символов - ${qttsymbols}`)
// }

// let b = GiveInfo('Жили были 4 друга :)')

// 2

// function textNumber(number) {
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//     if (number > 0 && number <= 9) {
//       console.log(first[number - 1]);
//     }
//     if (number >= 10 && number <= 20) {
//       console.log(second[number - 10]);
//     }
//     if (number > 20 && number <= 99) {
//       let str = `${number}`;
//       str = str.split('');
//       let firstNumber = str[0];
//       let secondNumber = str[1];
//       //return [ third[firstNumber - 2], first[secondNumber - 1] ];
//       console.log(`${third[firstNumber - 2]} ${first[secondNumber - 1]}`);
//     }
//   }
//   let a = (textNumber(7));
//   let b = (textNumber(20));
//   let c = (textNumber(55));

// 3

// function replaceChars(str) {
//   let result = '';
//   for(let i = 0; i < str.length; i++) {
//     if (str[i] >= 'A' && str[i] <= 'Z') {
//       result += str[i].toLowerCase();
//     } else if (str[i] >= 'a' && str[i] <= 'z') {
//       result += str[i].toUpperCase();
//     } else if(!isNaN(str[i])) {
//       result += '_';
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
//   }

// console.log(replaceChars("HeLLo123"));

// 4

// function convertToCamelCase(cssStyle) {
//   let words = cssStyle.split('-');
  
//   for (let i = 1; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//   }
  
//   return words.join('');
// }
  
//   console.log(convertToCamelCase('font-size'));
//   console.log(convertToCamelCase('background-color'));
//   console.log(convertToCamelCase('text-align'));

// 5

// function createAbbreviation(phrase) {
//   let words = phrase.split(" ");

//   let abbreviation = words.map(word => word[0].toUpperCase()).join("");
  
//   return abbreviation;
// }
  
// console.log(createAbbreviation("cascading style sheets"));
// console.log(createAbbreviation("объектно ориентированное программирование"));

// 6

// function combineStrings() {
//   let combinedString = "";
  
//   for (let i = 0; i < arguments.length; i++) {
//   combinedString += arguments[i];
//   }
  

//   return combinedString;
// }
  

// console.log(combineStrings("Hello", " ", "world"));
// console.log(combineStrings("JavaScript", ", ", "HTML", ", ", "CSS"));

// 7

// function calculator(expression) {

//   let regex = /([-+*/])/;
//   let operands = expression.split(regex);
  
//   let num1 = Number(operands[0]);
//   let num2 = Number(operands[2]);
  
//   let result;
//   switch (operands[1]) {
//     case '+':
//       result = num1 + num2;
//     break;
//     case '-':
//       result = num1 - num2;
//     break;
//     case '*':
//       result = num1 * num2;
//     break;
//     case '/':
//       result = num1 / num2;
//     break;
//     default:
//       result = 'Invalid operator';
//   }
  
//   return result;
// }
  
// console.log(calculator('2 + 2'));
// console.log(calculator('10 - 5'));
// console.log(calculator('3 * 4'));
// console.log(calculator('10 / 2'));

// 8

// function getUrlInfo(url) {
//   const parsedUrl = new URL(url);
//   const protocol = parsedUrl.protocol.replace(":", "");
//   const domain = parsedUrl.hostname;
//   const path = parsedUrl.pathname;
  
//   console.log(`протокол: ${protocol}, домен: ${domain}, путь: ${path}`);
// }

// getUrlInfo('https://itstep.org/ua/about%E2%80%9D')

// 9 

// function splitString(str, separator) {
//   var result = [];
//   var start = 0;
  
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === separator) {
//       result.push(str.slice(start, i));
//       start = i + 1;
//     }
//   }
//   result.push(str.slice(start));
//   return result;
//   }
  
// var str = "10/08/2020";
// var separator = "/";
// var substrings = splitString(str, separator);
// console.log(substrings);

// 10

// function print(template) {
//   let args = Array.from(arguments).slice(1);
//   let result = template.replace(/%(\d+)/g, function(match, index) {
//   let argIndex = parseInt(index) - 1;
//   return args[argIndex];
//   });
//   console.log(result);
//   }
  
// print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);