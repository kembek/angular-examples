import { Component } from "@angular/core";

import { products } from "../products";

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent {
  products = products;

  share(productName: string) {
    window.alert(`The ${productName} has been shared!`);
  }

  onNotify(product: Product) {
    alert(`We notify when come the ${product.name}`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
