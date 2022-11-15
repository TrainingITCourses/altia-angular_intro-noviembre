import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-agencies></app-agencies>
    <app-trips></app-trips>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
