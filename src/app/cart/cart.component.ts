import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html"
})
export class CartComponent {
  items = [];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.products;

    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  onSubmit(customerData) {
    alert(`You order has been submitted ${JSON.stringify(customerData)}`);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
