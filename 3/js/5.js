'use strict';

// Методы массивов

/*

Для добавления/удаления элементов:
- push (...items) – добавляет элементы в конец,
- pop() – извлекает элемент с конца,
- shift() – извлекает элемент с начала,
- unshift(...items) – добавляет элементы в начало.
- splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
- slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
- concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

Для поиска среди элементов:
- indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
- includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
- find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
- findIndex похож на find, но возвращает индекс вместо значения.

Для перебора элементов:
- forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

Для преобразования массива:
- map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
- sort(func) – сортирует массив «на месте», а потом возвращает его.
- reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
- split/join – преобразует строку в массив и обратно.
- reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

Дополнительно:
- Array.isArray(arr) проверяет, является ли arr массивом.

Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.
*/

// Task 1

const camelize = (str) => {
  let arrStr = str.split('-');

  return arrStr
    .map((item, idx) => {
      if (idx > 0) {
        return item[0].toUpperCase() + item.slice(1);
      }
      return item;
    })
    .join('');
};

camelize('background-color'); // backgroundColor
camelize('list-style-image'); // listStyleImage
camelize('-webkit-transition'); // WebkitTransition

// Task 2

const array = [5, 3, 8, 1, 5, 7, 2, 1, 3, 10];

const filterRange = (arr, minNum, maxNum) => {
  return arr.filter((item) => item >= minNum && item <= maxNum);
};

// console.log(filterRange(array, 4, 10)); // [5, 8, 5, 7]
// console.log(array);

// Task 3

const filterRangeInPlace = (arr, minNum, maxNum) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum || arr[i] > maxNum) {
      arr.splice(i, 1);
      i--;
    }
  }
};

filterRangeInPlace(array, 4, 9); // [ 5, 8, 5, 7 ]

// Task 4

const arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a));

// Task 5

const arraySkills = ['HTML', 'JavaScript', 'CSS'];

const copySorted = (arr) => {
  const newSortedArray = [...arr];
  return newSortedArray.sort();
};

console.log(copySorted(arraySkills)); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arraySkills); // ['HTML', 'JavaScript', 'CSS']

// Task 6

const vasya = { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 };
const petya = { name: 'Петя', surname: 'Иванов', id: 2, age: 30 };
const masha = { name: 'Маша', surname: 'Петрова', id: 3, age: 29 };

const users = [vasya, petya, masha];

const usersMapped = users.reduce(
  (acc, rec) => [...acc, { fullName: `${rec.name} ${rec.surname}`, id: rec.id }],
  [],
);

usersMapped[0]; // 1
usersMapped[0].fullName; // Вася Пупкин

// Task 7

const getAverageAge = users.reduce((acc, rec) => acc + rec.age / users.length, 0);
console.log(getAverageAge); // 28

// Task 8

let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'];

const unique = (str) => {
  let newArr = [];

  for (let prop of str) {
    if (!newArr.includes(prop)) {
      newArr.push(prop);
    }
  }
  return newArr;
};

unique(strings); // [ 'кришна', 'харе', ':-O' ]

// Task 9

const someUsers = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

const groupById = (arr) => {
  return arr.reduce((acc, rec) => {
    return { ...acc, [rec.id]: rec };
  }, {});
};

groupById(someUsers);
