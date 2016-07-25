import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ShoppingcartService {
  private stepList: any[] = [];
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
    /*var stepLog: Array<Product> = this.itemlist.slice();
    this.stepList.push(stepLog);*/
    //console.log(this.stepList);
  }
  Undo(){
    /*if(this.stepList.length > 0) {
      console.log(this.stepList);
      this.itemlist = this.stepList.pop().slice();
    }*/
  }
}
