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

function textNumber(number) {
    let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
    let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    if (number > 0 && number <= 9) {
      console.log(first[number - 1]);
    }
    if (number >= 10 && number <= 20) {
      console.log(second[number - 10]);
    }
    if (number > 20 && number <= 99) {
      let str = `${number}`;
      str = str.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];
      //return [ third[firstNumber - 2], first[secondNumber - 1] ];
      console.log(`${third[firstNumber - 2]} ${first[secondNumber - 1]}`);
    }
  }
  let a = (textNumber(7));
  let b = (textNumber(20));
  let c = (textNumber(55));