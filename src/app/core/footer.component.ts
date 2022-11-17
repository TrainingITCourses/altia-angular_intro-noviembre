import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <span>
        <a href="{{ repoUrl }}" target="_blank">
          {{ title }}
        </a>
        made by
        <a [href]="authorUrl" target="_blank">{{ author }}</a>
      </span>
      <span>
        <a routerLink="about"> ℹ️ About us </a>
      </span>
      <span>
        <a routerLink="contact"> 📧 Contact </a>
      </span>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  title = "Astro Bookings";
  author = "Alberto Basalo";
  repoUrl =
    "https://github.com/TrainingITCourses/altia-angular_intro-noviembre";
  authorUrl = "https://albertobasalo.dev";

  constructor() {}

  ngOnInit(): void {}
}
