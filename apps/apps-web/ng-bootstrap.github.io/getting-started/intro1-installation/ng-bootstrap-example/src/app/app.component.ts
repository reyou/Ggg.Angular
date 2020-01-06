import { Component } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
  {
    type: "success",
    message: "This is an success alert"
  },
  {
    type: "info",
    message: "This is an info alert"
  },
  {
    type: "warning",
    message: "This is a warning alert"
  },
  {
    type: "danger",
    message: "This is a danger alert"
  },
  {
    type: "primary",
    message: "This is a primary alert"
  },
  {
    type: "secondary",
    message: "This is a secondary alert"
  },
  {
    type: "light",
    message: "This is a light alert"
  },
  {
    type: "dark",
    message: "This is a dark alert"
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  collapsed = true;
  closeResult: string;
  alerts: Alert[];
  title = "ng-bootstrap-example";
  constructor(private modalService: NgbModal) {
    this.reset();
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
