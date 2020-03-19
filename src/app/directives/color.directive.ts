import { Directive, Input, ElementRef, OnChanges } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective implements OnChanges {
  readonly defaultColor = "blue";
  @Input() appColor: string = null;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor =
      this.appColor || this.defaultColor;
  }
}
