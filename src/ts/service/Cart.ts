import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];
 
  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  sum(): number {
    let count: number = 0;
    for(let i = 0; i < this.items.length; i++) {
      count += this.items[i].price;
    }
    return count;
  }

  discountedAmount(discount: number): number {
    let amount: number = 0;
    amount = this.sum() * (100 - discount)/100;
    return amount;
  }

  delete(id: number): Buyable[] {
    const array: Buyable[] = this.items;
    for(let i = 0; i < array.length; i++) {
      if(array[i].id === id) {
        array.splice(i,1);
      }
    }
    return array;
  }
}
