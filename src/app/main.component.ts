import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  template: `
    <main>
      <app-home></app-home>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}
}
