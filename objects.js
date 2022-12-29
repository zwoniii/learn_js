let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

// Функцию, которая является свойством объекта, называют методом этого объекта.

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('New number?', 0)
  }
}
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
alert(accumulator.value); // выведет сумму этих значений