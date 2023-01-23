'use strict';

// Массивы

/**
Получение элементов:

Мы можем получить элемент по его индексу, например arr[0].
Также мы можем использовать метод at(i) для получения элементов с отрицательным индексом, для отрицательных значений i, он отступает от конца массива. В остальном он работает так же, как arr[i], если i >= 0.

Мы можем использовать массив как двустороннюю очередь, используя следующие операции:
- push(...items)добавляет items в конец массива.
- pop() удаляет элемент в конце массива и возвращает его.
- shift() удаляет элемент в начале массива и возвращает его.
- unshift(...items) добавляет items в начало массива.

Чтобы пройтись по элементам массива:
- for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
- for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
- for (let i in arr) – никогда не используйте для массивов!
*/

// Task 1

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles.shift()); // Джаз
styles.unshift('Рэп', 'Регги');

console.log(styles); // Рэп, Регги, Классика, Рок-н-ролл

// Task 2

const sumInput = () => {
  const resultSum = [];

  while (true) {
    let num = prompt('Введите число', '');

    if (num === '' || num === null || isNaN(num)) {
      return resultSum.reduce((acc, rec) => +rec + acc, 0);
    }
    resultSum.push(num);
  }
};

// console.log(sumInput());
