import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CartService } from "../cart.service";
import { products } from "../products";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

  handleAddToCart(newProduct) {
    window.alert("Your product has been added to the cart!");

    this.cartService.addToCart(newProduct);
  }
}
