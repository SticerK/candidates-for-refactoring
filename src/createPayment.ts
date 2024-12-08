const createPayment = (isToken: Boolean) => {
  if (isToken) {
    const token = getUrl().slice();
    system.createTransaction(token).setTransaction();
  } else {
    const cardNumber = account.getCardNumber();
    userAccount.createCardPayment(cardNumber).postTransactionToServer();
  }
};

// В параметр функции лучше не передавать boolean, а проверку выполнять в родительской функции. Функция должна выполнять одно действие, а в данной - создание и отправка на сервер. 
