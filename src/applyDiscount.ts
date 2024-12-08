
// Модуль 1
// function calculateTotalPrice(items) {
//   let totalPrice = 0;
//   items.forEach((item) => {
//     totalPrice += item.price;
//   });
//   return totalPrice;
// }

// Модуль 2
function applyDiscount(totalPrice:number, discountPercentage:number): never | number {

  if (totalPrice < 0) {
    throw new Error('Конечная цена не может быть отрицательная'); // проверка на отрицательную цену 
  }

  return totalPrice * (1 - discountPercentage / 100); 
}


// с помощью метода reduce функция стала короче 

function calculateTotalPrice(items:{price:number}[]): number {
 return items.reduce((acc:number, item) => acc += item.price, 0)
}

