// function calculateArea2(radius: number): number {
//   return 3.14 * radius * radius; // "волшебное число" 3.14
// }


function calculateArea2(radius: number): number {
  if (radius < 0) {
    throw new Error('Радиус должен быть положительным');
  }
  
  return Math.PI * radius * radius; 
}

// Радиус не может быть отрицательным, поэтому нужна проверка на значение. Есть константа Math.PI