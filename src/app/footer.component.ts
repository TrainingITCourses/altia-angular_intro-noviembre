import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <p>
        <a href="{{ repoUrl }}" target="_blank">
          {{ title }}
        </a>
        made by
        <a [href]="authorUrl" target="_blank">{{ author }}</a>
      </p>
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
