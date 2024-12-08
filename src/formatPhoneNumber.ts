function calculateTotalPrice(quantity:number, price:number) {
  if (typeof quantity !== 'number' || typeof price !== 'number') {
    throw new Error('typeof !== number');
  }
  if (quantity < 0 || price < 0) {
    throw new Error('variables < 0');
  }
  return quantity * price;
}

function formatPhoneNumber(number:string): string {

  if (number.length !== 10) {
    throw new Error('Номер телефона должен состоять из 10 цифр');
  }

  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
}

