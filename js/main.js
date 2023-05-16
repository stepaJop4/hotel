// const list = document.querySelector('ul');
// const form = document.querySelector('#form');
// const input = document.querySelector('#input');

// form.addEventListener('submit', formHandler);

// function formHandler(event) {
//     event.preventDefault();

//     const task = input.value;

//     newLi = document.createElement('li');
//     newLi.innerText = task;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.setAttribute('role', 'button');
//     deleteBtn.innerText = 'Удалить';
//     deleteBtn.style['margin-left'] = '15px'; 

//     newLi.append(deleteBtn);

//     deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove());

//     list.append(newLi);

//     input.value = '';
//     input.focus();
// }

// const currentCount = document.querySelector('.counter');

// const start = document.querySelector('#start');
// const stopBtn = document.querySelector('#stop');
// const resetBtn = document.querySelector('#reset');

// let counter = 0;
// let timerId;

// //Start btn

// start.onclick = function () {
//     timerId = setInterval(() => {
//         counter++;
//         currentCount.innerText = counter;
//     }, 1000)

// }

// //Stop btn

// stopBtn.onclick = () => {
//     clearInterval(timerId);
// }

// //Reset btn 

// resetBtn.onclick = () => {
//     counter = 0;
//     currentCount.innerText = counter;
//     clearInterval(timerId);
// }

// const myPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         const response = true;
//         if (response) {
//             let message = 'SUCCESS';
//             resolve(message);
//         } else {
//             let message = 'UNSUCCESS';
//             reject(message);
//         }
//     }, 1000)
//     console.log('няяя')
// });

// myPromise.then(function (data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log(data);
//             const response = true;
//             if (response) {
//                 resolve('Обработка SUCCESS');
//             } else {
//                 reject('Обработка UNSUCCESS');
//             }
//         }, 1000)
//     })
// }).then((data) => {
//     setTimeout(() => {
//         console.log(data);
//         return 'FUCK U'
//     }, 1000)
// }).then((data) => {
//     setTimeout(() => {
//         console.log(data);
//     }, 500)
// }).catch(function (data) {
//     console.log(data);
// });

// const checkRooms = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Получаем данные...');
//         const availableRooms = true;

//         if (availableRooms) {
//             resolve('Номера есть');
//         } else {
//             reject('Номеров нет');
//         }
//     }, 1500);
// });

// checkRooms.then((data)=> {
//     return new Promise(function(resolve, reject) {
//         const =
//     });
// }).catch((data) => {
//     console.log('Промис вернул:', data);
//     console.log('НЕУСПЕХ');
// })

async function get_currency() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();

    const euroRate = data.Valute.EUR.Value.toFixed(2);
    const dollarRate = data.Valute.USD.Value.toFixed(2);

    // Отображение 

    const dollar = document.querySelector('#usd');
    const euro = document.querySelector('#eur');

    dollar.innerText = dollarRate;
    euro.innerText = euroRate;
}

get_currency();