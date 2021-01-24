import { Component, ElementRef, OnInit } from "@angular/core";
import { AppService } from "../../app.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  constructor(public app: AppService, private el: ElementRef) {}

  ngOnInit(): void {
    this.app.setElement("app-child", this.el);
  }

  get sidePadding(): number {
    const style = getComputedStyle(
      this.app.getElement("app-child").nativeElement
    );
    const value = parseFloat(style.getPropertyValue("--side-padding"));
    return value;
  }

  get parentSidePadding(): number {
    const style = getComputedStyle(
      this.app.getElement("app-parent").nativeElement
    );
    const value = parseFloat(style.getPropertyValue("--side-padding"));
    return value;
  }

  changeSidePadding(selector: string, px: number) {
    const style = this.app.getElement(selector).nativeElement.style;
    style.setProperty("--side-padding", `${px}px`);
  }
}
