import { Component, OnInit } from "@angular/core";
import { timeout } from "q";
import { timer, Observable } from "rxjs";
import { MessageService } from "../message.service";

@Component({
  selector: "app-alert-button",
  templateUrl: "./alert-button.component.html",
  styleUrls: ["./alert-button.component.css"]
})
export class AlertButtonComponent implements OnInit {
  content: Observable<any>;
  hideContent = true;
  severity = 423;
  constructor(private msgService: MessageService) {}

  ngOnInit() {
    this.content = this.msgService.getContent();
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }
}
