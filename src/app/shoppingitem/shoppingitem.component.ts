import { Component, OnInit,Input } from '@angular/core';
import { ShoppinglistComponent } from '../shoppinglist';
import { ShoppingcartService } from '../shoppingcart.service';
@Component({
  moduleId: module.id,
  selector: 'app-shoppingitem',
  templateUrl: 'shoppingitem.component.html',
  styleUrls: ['shoppingitem.component.css'],
  directives : [ShoppinglistComponent]
})
export class ShoppingitemComponent implements OnInit {
  @Input()
  private product: any = {
    name: "BMW",
    price: 1000000,
    amount: 5
    };
  private itemlist;

  constructor(private shoppingcartService:ShoppingcartService = null) {
    this.itemlist={productname:"",productprice:"",productamount:"",littlecount:"",isEdit:false}
  }

  ngOnInit() {
  }
  Oncacular(price,amount){
    return this.shoppingcartService.Caculate(price,amount);
  }
  Onsubmit(){
    this.itemlist.productname = this.product.name;
    this.itemlist.productprice = this.product.price;
    this.itemlist.productamount = this.product.amount;
    this.shoppingcartService.Additem(this.itemlist);
  }
}
