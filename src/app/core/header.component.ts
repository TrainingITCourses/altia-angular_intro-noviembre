import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <strong routerLink="/">{{ title | uppercase }}</strong>
    </header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  title = "Astro Bookings";

  constructor() {}

  ngOnInit(): void {}
}
