// 1

// var lowerRange = parseInt(prompt("Введите нижнюю границу диапазона:"));
// var upperRange = parseInt(prompt("Введите верхнюю границу диапазона:"));

// let sum = 0;

// for (var i = lowerRange; i <= upperRange; i++) {

//     sum += i;
//   }

// alert("Сумма всех чисел в заданном диапазоне: " + sum);


// 2

// const nod = (n, m) => {
//   if (m != 0) {
//     const k = n % m;
//     return nod(m, k);
//   }
//   return n;
// };

// alert('Введите 2 числа, что бы найти НОД')
// let numb1 = prompt('Введите первое число');
// let numb2 = prompt('Введите второе число');
// alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + nod(numb1, numb2));


// 3


// alert('Программа выводит все делители этого числа')
// let numb = prompt('Введите число');
// let newArr = [];

// for (let i = 0; i <= numb; i++) {
//   if (numb % i) {
//     continue
//   } else {
//     newArr.push(i)
//   }
// }

// alert(newArr);


// 4

// alert('Это программа покажет вам сколько цифр в введенном числе')
// let numb = prompt('Введите число');
// const numberList = Array.from(numb);

// let quantity = 0;

// for (let i = 0; i < numberList.length; i++) {
//   quantity += 1;
// }

// alert(quantity);


// 5

// alert('Это программа посчитает количество нулей, положительный и отрицательных, а также четных и нечетных чисел')
// let newArr = [];


// for (let i = 0; i < 10; i++) {
//   let userIn = prompt('Введите число')
//   newArr.push(userIn)
// }

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;


// for (let item of newArr) {
//   if (item > 0) {
//     positive += 1
//   }
//   if (item < 0) {
//     negative += 1
//   }
//   if (item == 0) {
//     zero += 1
//   }
//   if (item % 2) {
//     odd += 1
//   } else {
//     even += 1
//   }
// }

// alert('"+" - ' + positive + '\n' + '"-" - ' + negative + '\n' + '"zero" - ' + zero + '\n' + '"even" - ' + even + '\n' + '"odd" - ' + odd)


// 6

// let bool;
// let result;
// let question;

// while (bool = 1) {
//   bool = null
//   let numb1 = prompt('Введите первое число');
//   let numb2 = prompt('Введите второе число');
//   let operator = prompt("'+', '-', '/' or '*'");

//   if (operator == '+') {
//     result = Number(numb1) + Number(numb2)
//     question = prompt(result + ' Хотите продолжить? да/нет')
//     if (question == 'нет') {
//       break
//     }
//   }
//   if (operator == '-') {
//     result = Number(numb1) - Number(numb2)
//     question = prompt(result + ' Хотите продолжить? да/нет')
//     if (question == 'нет') {
//       break
//     }
//   }
//   if (operator == '/') {
//     result = Number(numb1) / Number(numb2)
//     question = prompt(result + ' Хотите продолжить? да/нет')
//     if (question == 'нет') {
//       break
//     }
//   }
//   if (operator == '*') {
//     result = Number(numb1) * Number(numb2)
//     question = prompt(result + ' Хотите продолжить? да/нет')
//     if (question == 'нет') {
//       break
//     }
//   }
// }


// 7

// let number = prompt("Введите число:");
// let shift = prompt("На сколько цифр его сдвинуть:");


// number = String(number);
// shift = parseInt(shift);


// for (let i = 0; i < shift; i++) {
//   number += number[i];
// }
// number = number.slice(shift);

// alert("Результат: " + number);


// 8

// let days = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье"
// ];

// let index = 0;
// do {
//   alert(days[index] + ".\nХотите увидеть следующий день?");
//   index = (index + 1) % days.length;
// } while (confirm("Продолжить?"));


// 9 в консоли

// for (let i = 2; i <= 9; i++) {
//   console.log(`Таблица умножения для числа ${i}:`);
  
//   for (let j = 1; j <= 10; j++) {
//     let result = i * j;
//     console.log(`${i} * ${j} = ${result}`);
//   }
  
//   console.log('');
// }


// 10

// let min = 0;
// let max = 100;
// let n = 0;

// do {
//   n = Math.floor((max - min) / 2) + min;
//   let answer = prompt(`Ваше число '>' ${n}, '<' ${n} или '==' ${n}?`);

//   if (answer == '>') {
//     min = n + 1;
//   } else if (answer == '<') {
//     max = n - 1;
//   } else if (answer == '==') {
//     alert(`Ваше число равно ${n}!`);
//     break;
//   } else {
//     alert('Некорректный ответ. Попробуйте еще раз.');
//   }
// } while (true);
