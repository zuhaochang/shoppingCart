import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable()
export class ShoppingcartService {
  private stepLog: any[] = [];//陣列用來儲存當前值
  public itemlist: Product[] = [

  ];
  constructor() {
  }
  Additem(itemlist){
      this.Currentlog(itemlist);
      this.itemlist.push(itemlist);
  }//新增項目
  Caculate(price,amount){
    return (price * amount);
  }//小計
  Modify(index){
    this.itemlist.splice(index,1);
  }//單筆刪除
  Currentlog(itemlist){
     this.stepLog.push([...this.itemlist]);//spread operator
     //console.log(this.stepLog);
  }//丟入值到當前陣列中，必須放置於相關動作的第一行先存入
  Undo(){

     if(this.itemlist.length >= 0) {
      this.itemlist = this.stepLog.pop();
      //console.log(this.itemlist);
    }
  }//pop出最近一次當前Log陣列
}
