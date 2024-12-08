function processUserDataAndSendEmail(user: User) {
  // Обработка данных пользователя
  user.processData();

  // Отправка электронной почты
  emailService.sendEmail(user.email, 'Данные обработаны успешно');
}

//Данную функцию лучше разбить на две разные, т.к. данная функция производит сразу два действия, не относящихся друг к другу. 
