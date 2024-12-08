function processUserData(user) {
  // Получаем данные пользователя
  const userData = getUserData(user);

  // Проверяем данные пользователя
  if (validateAge(user.age)) {
    // Обрабатываем данные
    processUser(user);
  } else {
    // Выводим ошибку
    console.error('User is under 18');
  }
}

const validateAge = (age:number):boolean => age >= 18  
// создаем отдельную функцию для проверки возраста. Улучшает читаемость кода 
