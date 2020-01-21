import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCustomDirective]"
})
export class CustomDirectiveDirective {
  constructor(private element: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.color("#AB47BC");
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.color("whitesmoke");
  }
  private color(action: string) {
    this.element.nativeElement.style.color = action;
  }
}
