import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingcartService {
  itemlist;
  //private shopcart = new Shopcart();
  //private logs: Shopcart[] = [];
  constructor() {
    this.itemlist=[
    {productname:"BMW",productprice:"1000000",productamount:"1",littlecount:"1000000",isEdit:false},
    {productname:"FIAT",productprice:"1800000",productamount:"2",littlecount:"3600000",isEdit:false}
    ]

  }
  Additem(itemlist){
      this.itemlist.push(itemlist);
    }
  Caculate(price,amount){
    return price * amount;
  }
  modify(index){
    this.itemlist.splice(index,1);
  }
}
