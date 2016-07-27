import { Component, OnInit} from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
import { Product } from '../product';
@Component({
  moduleId: module.id,
  selector: 'app-shoppinglist',
  templateUrl: 'shoppinglist.component.html',
  styleUrls: ['shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  private item: Product[] ;
  constructor(private shoppingcartService:ShoppingcartService = null) {}

  ngOnInit() {
  }
  OnClear(item){
     this.shoppingcartService.Currentlog(this.item);
     this.shoppingcartService.itemlist= [ ];
       }
  Onback(){
    this.shoppingcartService.Undo();
  }
  Oncacular(price,amount){
    return this.shoppingcartService.Caculate(price,amount);
  }
  Onmodify(index){
    this.shoppingcartService.Currentlog(this.item);
    this.shoppingcartService.Modify(index);
  }
  Sum(){
    var result = 0;
    for(var i = 0; i < this.shoppingcartService.itemlist.length ; i++){
      result +=
        this.Oncacular(this.shoppingcartService.itemlist[i].price,this.shoppingcartService.itemlist[i].amount);
    }
    return result*0.05;
  }
  Total(){
  var result1 = 0;
    for(var i = 0; i < this.shoppingcartService.itemlist.length ; i++){
      result1 +=
        this.Oncacular(this.shoppingcartService.itemlist[i].price,this.shoppingcartService.itemlist[i].amount);
    }
    return result1 + this.Sum();
  }
  Edit(item){
    //this.shoppingcartService.Currentlog(this.item);
    item.isEdit=true;
    item.Qty2 = item.amount;
}
  Ok(item){
    //this.shoppingcartService.Currentlog(this.item);
    item.amount = item.Qty2;
    item.isEdit = false;
}
  Reset(item){

    item.isEdit = false;
}
}
