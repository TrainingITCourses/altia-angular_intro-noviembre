import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}
}
