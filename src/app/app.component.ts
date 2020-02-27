import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { HttpClient } from "@angular/common/http";

export interface PeriodicElement {
  name: string;
  weight: number;
  symbols: string;
}


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  cards = [
    {
      imgUrl:
        "https://stackblitz.com/files/epsilon-code-test/github/bikrampatnaik-dev/epsilon-code-test/master/src/assets/joe-caione.jpg",
      headingStr: "Beach Day",
      title: "Archie the Dog",
      modifiedBy: "Modified 03/01/2020 by Joe Caione"
    },
    {
      imgUrl:
        "https://stackblitz.com/files/epsilon-code-test/github/bikrampatnaik-dev/epsilon-code-test/master/src/assets/joe-caione.jpg",
      headingStr: "Sunny Day",
      title: "Archie the Dog",
      modifiedBy: "Modified 03/01/2020 by Joe Caione"
    },
    {
      imgUrl:
        "https://stackblitz.com/files/epsilon-code-test/github/bikrampatnaik-dev/epsilon-code-test/master/src/assets/joe-caione.jpg",
      headingStr: "Winter Day",
      title: "Archie the Dog",
      modifiedBy: "Modified 03/01/2020 by Joe Caione"
    },
  ];
  displayedColumns: string[] = ["name", "price", "category"];
  dataSource;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("assets/cookies.json").subscribe((data: []) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {}
}
