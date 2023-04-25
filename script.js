// 1) Що виведе код нижче?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1

// 2) Вбудована функція setTimeout використовує колбек-функції. Створіть альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then:

function delay(ms) {
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, ms);
    });
  }
delay(3000).then(() => alert('виконалось через 3 секунди'));

// 3) Створіть функцію, яка повертає об'єкт Promise. Обіцяйте повернути число після затримки 2 секунди.

function delayNumber() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(13);
      }, 2000);
    });
  }
  delayNumber().then(function(result) {
    alert(result); // 13
});


// 4) Створіть функцію, яка приймає масив чисел та повертає Promise, що виконується після знаходження максимального числа в масиві.

function maxNumberWithPromise(arrayOfNumbers) {
    return new Promise(function(resolve, reject){
      if(Array.isArray(arrayOfNumbers) && arrayOfNumbers.length > 0) {
        const maxNumber = Math.max(...arrayOfNumbers);
        resolve(maxNumber);
      } else {
        reject('error')
      }
    });
  }
  const array = [3, -40, 106, -31, -21, 42, 3, 14, -6, 42];
  let products = {
    Hats: [
      { name: 'Шляпа', price: 200 },
      { name: 'Кепка', price: 150 },
      { name: 'Каска', price: 450 }
    ],
    Tops: [
      { name: 'Футболка', price: 200 },
      { name: 'Майка', price: 100 },
      { name: 'Пиджак', price: 2000 }
    ],
    Pants: [
      { name: 'Брюки', price: 500 },
      { name: 'Спортивки', price: 300 },
      { name: 'Легенцы', price: 900 }
    ]
  };

  maxNumberWithPromise(array)
  .then(maxNumber => console.log(`Max number: ${maxNumber}`))
  .catch(error => console.error(`Error: ${error}`));

  maxNumberWithPromise(products)
  .then(maxNumber => console.log(`Max number: ${maxNumber}`))
  .catch(error => console.error(`Error: ${error}`));