if (
  isValid(user)
) {
  approveLoan();
}

export interface User {
   employmentStatus: 'employed',
  criminalRecord:boolean,
  age:number,
  }


const isValid = (user:User):boolean =>{
  const isAdult = user.age >= 18;
  const isWithinWorkingAge = user.age <= 65;
  const isEmployed = user.employmentStatus === 'employed';
  const hasNoCriminalRecord = !user.criminalRecord;

  return isAdult && isWithinWorkingAge && isEmployed && hasNoCriminalRecord;
}

//принцип разделения ответственности. Создали отдельную функцию для проверки валидного пользователя. Улучшает читаемость кода. 