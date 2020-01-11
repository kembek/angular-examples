import { Component, OnInit } from "@angular/core";

import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html"
})
export class MessagesComponent implements OnInit {
  get messages() {
    return this.messageService.messages;
  }

  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
