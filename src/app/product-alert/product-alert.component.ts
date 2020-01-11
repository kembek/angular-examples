import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alert",
  templateUrl: "./product-alert.component.html"
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
