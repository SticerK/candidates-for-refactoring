const pay = () => {
  if(Array.isArray(employees)){
    for (let e of employees) {
      if (e.isPayday()) {
        const pay = e.calculatePay();
  
        e.deliverPay(pay);
      }
    }
  }

};

// проверка employees на массив 
