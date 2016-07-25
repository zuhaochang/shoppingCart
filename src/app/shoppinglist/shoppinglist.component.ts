import { Component, OnInit,Input } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
@Component({
  moduleId: module.id,
  selector: 'app-shoppinglist',
  templateUrl: 'shoppinglist.component.html',
  styleUrls: ['shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  @Input()
  item;
  constructor(private shoppingcartService:ShoppingcartService = null) {}

  ngOnInit() {
  }
  OnClear(){
     this.shoppingcartService.itemlist= [];
  }
  Onback(){

  }
  Oncacular(price,amount){
    return this.shoppingcartService.Caculate(price,amount);
  }
  Onmodify(index){
    this.shoppingcartService.Modify(index);
  }
  Sum(){
    var result = 0;
    for(var i = 0; i < this.shoppingcartService.itemlist.length ; i++){
      result +=
        this.Oncacular(this.shoppingcartService.itemlist[i].productprice,this.shoppingcartService.itemlist[i].productamount);
    }
    return result*0.05;
  }
  Total(){
  var result1 = 0;
    for(var i = 0; i < this.shoppingcartService.itemlist.length ; i++){
      result1 +=
        this.Oncacular(this.shoppingcartService.itemlist[i].productprice,this.shoppingcartService.itemlist[i].productamount);
    }
    return result1 + this.Sum();
  }
  Edit(item){
    item.isEdit=true;
    item.Qty2 = item.productamount;
}
  Ok(item){
    item.productamount = item.Qty2;
    item.isEdit = false;
}
  Reset(item){

    item.isEdit = false;
}
}
