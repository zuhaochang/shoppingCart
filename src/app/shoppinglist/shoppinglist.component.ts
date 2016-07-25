import { Component, OnInit} from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
@Component({
  moduleId: module.id,
  selector: 'app-shoppinglist',
  templateUrl: 'shoppinglist.component.html',
  styleUrls: ['shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  item;
  constructor(private shoppingcartService:ShoppingcartService = null) {}

  ngOnInit() {
  }
  OnClear(){
     this.shoppingcartService.itemlist= [ ];
     this.shoppingcartService.Currentlog();
  }
  Onback(){
    this.shoppingcartService.Undo();
  }
  Oncacular(price,amount){
    return this.shoppingcartService.Caculate(price,amount);
  }
  Onmodify(index){
    this.shoppingcartService.Modify(index);
    this.shoppingcartService.Currentlog();
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
    item.isEdit=true;
    item.Qty2 = item.amount;
}
  Ok(item){
    item.amount = item.Qty2;
    item.isEdit = false;
    this.shoppingcartService.Currentlog();
}
  Reset(item){

    item.isEdit = false;
}
}
