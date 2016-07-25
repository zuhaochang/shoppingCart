import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ShoppingcartService {
  itemlist;
  public productList: Array<Product> = [
    new Product("BMW",1000000,1,false),
    new Product("FIAT",1800000,2,false)
  ];
  constructor() {
    this.itemlist=[
    {productname:"BMW",productprice:"1000000",productamount:"1",isEdit:false},
    {productname:"FIAT",productprice:"1800000",productamount:"2",isEdit:false}
    ]

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

  }
}
