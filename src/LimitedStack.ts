interface Stack<T> {
  pop(): T | null;
  push(item: T): void;
  percentFull(): number;
}

// class UnlimitedStack<T> implements Stack<T> {
//   percentFull(): number {
//     return 0;
//   }
// }

class UnlimitedStack<T> implements Stack<T> {
  private items: T[] = []; 


  pop(): T | null {
    return this.items.length > 0 ? this.items.pop()! : null;
  }
  
  push(item: T): void {
    this.items.push(item); 
  }

  percentFull(): number {
    return 0; 
  }
}
