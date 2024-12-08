// function calculate(a, b) {
//   return a + b;
// }



export function calculate(a:number, b:number):number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('type !== number');
  }
  
  return a + b;
}

//Проверка на передаваемый тип. Если тип не number, будет ошибка. 
