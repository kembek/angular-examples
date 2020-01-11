import { Component } from "@angular/core";

import { CartService } from "../cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html"
})
export class ShippingComponent {
  shippingCosts;

  constructor(private cartService: CartService) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
