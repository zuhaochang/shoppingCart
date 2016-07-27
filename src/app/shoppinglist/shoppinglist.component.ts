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
    var tax = 0;
    for(var i = 0; i < this.shoppingcartService.itemlist.length ; i++){
      tax +=
        this.Oncacular(this.shoppingcartService.itemlist[i].price,this.shoppingcartService.itemlist[i].amount);
    }
    return Math.ceil(tax*0.05);
  }
  Total(){
  var result = 0;
    for(var i = 0; i < this.shoppingcartService.itemlist.length ; i++){
      result +=
        this.Oncacular(this.shoppingcartService.itemlist[i].price,this.shoppingcartService.itemlist[i].amount);
    }
    return result + this.Sum();
  }
  Edit(item){
    this.shoppingcartService.Currentlog(this.item);//進入編輯數量時，即紀錄進Log陣列
    item.isEdit=true;
    item.Qty2 = item.amount;
    }
  Ok(item,i:number){
    this.shoppingcartService.Currentlog(this.item);
    //item.amount = item.Qty2;
    this.shoppingcartService.itemlist[i] = new Product(this.shoppingcartService.itemlist[i].name,this.shoppingcartService.itemlist[i].price,item.Qty2);//每當更改數量送出時，new class存放新值
    item.isEdit = false;

}
  Reset(item){

    item.isEdit = false;
}
}
