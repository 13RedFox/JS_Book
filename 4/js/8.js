'use strict';

// setTimeout / setInterval

/*
- Методы setInterval(func, delay, ...args) и setTimeout(func, delay, ...args) позволяют выполнять func регулярно или только один раз после задержки delay, заданной в мс.
- Для отмены выполнения необходимо вызвать clearInterval/clearTimeout со значением, которое возвращают методы setInterval/setTimeout.
- Вложенный вызов setTimeout является более гибкой альтернативой setInterval. Также он позволяет более точно задать интервал между выполнениями.
- Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.
- Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout, а также для setInterval, начиная с 5-го вызова.
*/

const timerId = setInterval(() => console.log('tick'), 2000);

setTimeout(() => clearInterval(timerId), 5000);

// Task 1

const printNumbersInterval = (from, to) => {
  let count = from;
  let timerId = setInterval(() => {
    console.log(count);
    if (count === to) clearInterval(timerId);

    count++;
  }, 1000);
};

printNumbersInterval(3, 7);
