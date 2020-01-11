import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
  OnChanges,
  DoCheck,
  SimpleChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from "@angular/core";
import { Post } from "../app.component";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // here we put attribute name for decorator and we would pass by this name to post variable
  // @Input('myPost') post: Post;
  @Input() post: Post;

  // when I pass static: true I can get access in ngOnInit() if I pass inversion value(false) I can get access in other methods
  @ContentChild("postInner", { static: true }) postInnerElRef: ElementRef<
    HTMLDivElement
  >;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngOnInit() {
    console.log(this.postInnerElRef.nativeElement);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  onClickRemove() {
    this.onRemove.emit(<number>this.post.id);
  }
}
