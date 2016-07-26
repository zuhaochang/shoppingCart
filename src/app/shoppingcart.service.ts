import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ShoppingcartService {
  private stepLog: Array<Product[]>;
  public itemlist: Product[] = [
    new Product("BMW",1000000,1,false),
    new Product("FIAT",1800000,2,false)
  ];
  constructor() {
  }
  Additem(itemlist){
      this.itemlist.push(itemlist);
    }
  Caculate(price,amount){
    return price * amount;
  }
  Modify(index){
    this.itemlist.splice(index,1);
  }
  Currentlog(){

    this.stepLog.push(this.itemlist);
  }
  Undo(){
     if(this.itemlist.length > 0) {
      this.itemlist = this.stepLog.pop();
    }
  }
}
