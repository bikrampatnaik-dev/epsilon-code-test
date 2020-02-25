import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, MatGridListModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
