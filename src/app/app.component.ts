import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
/** Constants used to fill up our data base. */
const COLORS: string[] = [
  "maroon",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "black",
  "gray"
];
const NAMES: string[] = [
  "Maia",
  "Asher",
  "Olivia",
  "Atticus",
  "Amelia",
  "Jack",
  "Charlotte",
  "Theodore",
  "Isla",
  "Oliver",
  "Isabella",
  "Jasper",
  "Cora",
  "Levi",
  "Violet",
  "Arthur",
  "Mia",
  "Thomas",
  "Elizabeth"
];

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

  displayedColumns: string[] = ["id", "name", "progress", "color"];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
