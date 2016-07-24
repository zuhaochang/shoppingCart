import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingcartService {
  itemlist;
  constructor() {
    this.itemlist=[
    {productname:"BMW",productprice:"1000000",productamount:"1",littlecount:"1000000",isEdit:false},
    {productname:"FIAT",productprice:"1800000",productamount:"2",littlecount:"3600000",isEdit:false}
    ]

  }
  addItem(itemlist){
      this.itemlist.push(itemlist);
    }
  Caculate(price,amount){
    return price * amount;
  }
}
