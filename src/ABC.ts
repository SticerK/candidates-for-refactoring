class A {
  // ...
  getB() {
    return new B();
  }
}

class B {
  // ...
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения
// const a = new A();
// a.getB().getC().doSomething();


//Создать промежуточные переменные, улучшает читаемость кода

const a = new A();
const b = a.getB(); 
const c = b.getC(); 
c.doSomething(); 