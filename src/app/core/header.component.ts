import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <nav>
        <strong routerLink="/">{{ title | uppercase }}</strong>
        <ul>
          <li routerLink="/agencies"> ➡️ Agencies</li>
          <li routerLink="/trips"> ➡️ Trips</li>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  title = "Astro Bookings";

  constructor() {}

  ngOnInit(): void {}
}
