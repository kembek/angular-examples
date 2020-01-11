import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Post } from "../app.component";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent implements OnInit {
  title = "";
  text = "";

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild("titleInput", { static: false }) titleInputRef: ElementRef<
    HTMLInputElement
  >;

  constructor() {}

  ngOnInit() {}

  onClickAdd() {
    const { title, text } = this;

    if (title.trim() && text.trim()) {
      const post: Post = {
        id: Math.random() * 1000,
        title,
        text
      };

      this.onAdd.emit(post);

      this.title = this.text = "";
    }
  }

  onClickFocus() {
    this.titleInputRef.nativeElement.focus();
  }
}
