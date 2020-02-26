import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { HttpClient } from "@angular/common/http";

export interface PeriodicElement {
  name: string;
  weight: number;
  symbols: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {  name: "Hydrogen", weight: 1.0079, symbols: "H" },
//   {  name: "Helium", weight: 4.0026, symbols: "He" },
//   {  name: "Lithium", weight: 6.941, symbols: "Li" },
//   {  name: "Beryllium", weight: 9.0122, symbols: "Be" },
//   {  name: "Boron", weight: 10.811, symbols: "B" },
//   {  name: "Carbon", weight: 12.0107, symbols: "C" },
//   {  name: "Nitrogen", weight: 14.0067, symbols: "N" },
//   {  name: "Oxygen", weight: 15.9994, symbols: "O" },
//   {  name: "Fluorine", weight: 18.9984, symbols: "F" },
//   {  name: "Neon", weight: 20.1797, symbols: "Ne" }
// ];

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
        "https://cdn.jsdelivr.net/gh/bikrampatnaik-dev/epsilon-code-test@master/src/assets/jake-oates-E38KRRk1fvg-unsplash.jpg",
      headingStr: "Beach Day",
      title: "Rufus the Dog",
      modifiedBy: "Modified 02/01/2020 by Jake Oates"
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
        "https://cdn.jsdelivr.net/gh/bikrampatnaik-dev/epsilon-code-test@master/src/assets/jake-oates-E38KRRk1fvg-unsplash.jpg",
      headingStr: "Beach Day",
      title: "Rufus the Dog",
      modifiedBy: "Modified 02/01/2020 by Jake Oates"
    }
  ];
  displayedColumns: string[] = ["name", "price", "category"];
  dataSource; // = new MatTableDataSource(ELEMENT_DATA);

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get("http://usweb.dotomi.com/resources/swfs/cookies.json")
      .subscribe((data: []) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);

        this.dataSource.sort = this.sort;
      });
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {}
}
