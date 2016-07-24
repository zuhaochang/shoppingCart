import { Component } from '@angular/core';
import { ShoppingitemComponent } from './shoppingitem';
import { ShoppingcartService } from './shoppingcart.service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ShoppingitemComponent],
  providers:[ShoppingcartService]
})
export class AppComponent {
  title = 'AngularJS Practices by Andrew';
}
