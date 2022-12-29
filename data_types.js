// let a = +prompt('a?', 0);
// let b = +prompt('b?', 0);
// alert(a + b)


// function readNumber() {
//   let num;
//   do {
//     num = prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }
// alert(`Число: ${readNumber()}`)


// function ucFirst(str) {
//     if (!str) return str; 
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   alert( ucFirst("вася") );


// function checkSpam(str) {
//   let lowStr = str.toLowerCase()
//   if (lowStr.includes('viagra') || lowStr.includes('xxx')) {
//     return true;
//   } return false;
//   }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );


// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str = str.slice(0, maxlength - 3) + '…'
//   } return str
// }


// function extractCurrencyValue(str) {
//     return +str.slice(1)
// }


// let styles = [Джаз, Блюз];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// alert(styles.shift());
// styles.unshift('Рэп', 'Регги')


// function sumInput() {
//     let numbers = [];
//     while (true) {
//       let value = prompt("Введите число", 0);
//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;
//       numbers.push(+value);
//     }
//   let sum = 0;
//   for (let number of array) {
//     sum += number;
//   }
//   return sum;
// }

function camelize(str) {
  return str
  .split('-')
  .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) )
  .join('')
}

