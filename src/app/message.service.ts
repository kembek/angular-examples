import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages: string[] = [];

  add(newMessage: string) {
    this.messages.push(newMessage);
  }

  clear() {
    return (this.messages = []);
  }
}
