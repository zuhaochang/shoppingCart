import { Component, OnInit } from '@angular/core';
import { ShoppinglistComponent } from '../shoppinglist';
import { ShoppingcartService } from '../shoppingcart.service';
import { Product } from '../product';
@Component({
  moduleId: module.id,
  selector: 'app-shoppingitem',
  templateUrl: 'shoppingitem.component.html',
  styleUrls: ['shoppingitem.component.css'],
  directives : [ShoppinglistComponent]
})
export class ShoppingitemComponent implements OnInit {

  private item: any = {
    name: "BMW",
    price: 1000000,
    amount: 5
    };
  private itemlist: Product;

  constructor(private shoppingcartService:ShoppingcartService = null) {

  }

  ngOnInit() {
  }
  Oncacular(price,amount){
    return this.shoppingcartService.Caculate(price,amount);
  }
  Onsubmit(){
    this.itemlist=new Product();
    this.itemlist.name = this.item.name;
    this.itemlist.price = this.item.price;
    this.itemlist.amount = this.item.amount;
    this.shoppingcartService.Additem(this.itemlist);
  }
}
