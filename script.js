// Задание 1. Получение данных о пользователе.
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента 
// и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.
//  Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.
// Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

async function getUserData(id) {
    try {
        const usersResponse = await fetch(`https://reqres.in/api/users/${id}`);
        if(usersResponse.ok) {
            const userInfo = await usersResponse.json();
            return userInfo.data;
        }
        else {console.log('неверно введен id пользователя');}        
    } catch (error) {
        throw new Error(error.message);
    }
}

getUserData(5).then((result) => console.log('Инфа по пользователю с запрошенным айди: ', result));



// Задание 2. Отправка данных на сервер.
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch
//  для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается,
//   если данные успешно отправлены, или отклоняется в случае ошибки.

const user = {
    name: 'vasya',
    surname: 'ivanov',
    age: 122,
    gender: 'f',
}

function saveUserData(user) {
    return fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
    });
}

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });

  

//   Задание 3. Изменение стиля элемента через заданное время.

//   Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов.
//    Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.
  
function changeStyleDelayed(idElement, time) {
    setTimeout(() => document.querySelector('#' + idElement).style.backgroundColor = 'red', time);
  }

changeStyleDelayed('myElement', 2000); 

