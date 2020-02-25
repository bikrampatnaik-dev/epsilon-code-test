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
      headingStr : 'Beach Day',
      title: 'Rufus the Dog',
      modifiedBy: 'Modified 02/01/2020 by Jake Oates'
    },
    {
      imgUrl: "https://stackblitz.com/files/epsilon-code-test/github/bikrampatnaik-dev/epsilon-code-test/master/src/assets/joe-caione.jpg",
      headingStr: "Sunny Day",
      title: 'Archie the Dog',
      modifiedBy: 'Modified 03/01/2020 by Joe Caione'
    }
  ];
}
