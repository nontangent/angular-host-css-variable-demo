import { AfterViewInit, Component, ElementRef, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  constructor(public app: AppService, private el: ElementRef) {}

  ngOnInit(): void {
    this.app.setElement("app-parent", this.el);
  }

  get sidePadding(): number {
    const style = getComputedStyle(
      this.app.getElement("app-parent").nativeElement
    );
    const value = parseFloat(style.getPropertyValue("--side-padding"));
    return value;
  }
}
