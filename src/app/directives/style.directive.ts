import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding
} from "@angular/core";

interface DStyle {
  border?: string;
  ontSize?: string;
  padding?: string;
}

@Directive({
  selector: "[appStyle]"
})
export class StyleDirective {
  // got data by appStyle directive name
  @Input("appStyle") color: string = "blue";

  // got data by dStyle attribute it is object
  @Input() dStyle: DStyle;
  @Input() dTxtDecor: string = "underline";

  // this decorator bind in the parameter element and when put value this variable we change element by parameter
  @HostBinding("style.textDecoration") txtDecor = null;

  constructor(private elRef: ElementRef<HTMLElement>, private rd: Renderer2) {
    // it is method not correct
    // this.elRef.nativeElement.style.color = "red";
    // It is CORRECT way and more recommend
    // this.rd.setStyle(this.elRef.nativeElement, "color", "blue");
  }

  // subscribe to click event
  @HostListener("click", ["$event"]) onClick(event: Event) {
    console.log("Click", event.target);
  }

  @HostListener("mouseenter") onEnter() {
    this.rd.setStyle(this.elRef.nativeElement, "color", this.color);
    this.txtDecor = this.dTxtDecor;

    for (let styleProperty in this.dStyle) {
      this.rd.setStyle(
        this.elRef.nativeElement,
        styleProperty,
        this.dStyle[styleProperty]
      );
    }
  }

  @HostListener("mouseleave") onLeave() {
    this.rd.setStyle(this.elRef.nativeElement, "color", null);
    this.txtDecor = null;
    this.rd.removeAttribute(this.elRef.nativeElement, "style");
  }

  // @HostListener("click", ["$event.target"]) onClick2(event: Event) {
  //   console.log("Click2", event);
  // }
}
