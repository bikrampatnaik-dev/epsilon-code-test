import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  cards = [
    {
      imgUrl: "https://cdn.jsdelivr.net/gh/bikrampatnaik-dev/epsilon-code-test@master/src/assets/jake-oates-E38KRRk1fvg-unsplash.jpg",
      headingStr : 'Beach Day'
    }
  ];
}
