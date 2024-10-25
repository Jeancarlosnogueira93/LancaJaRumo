import { BrowserModule } from "@angular/platform-browser";
import { PontoModule } from "./ponto/ponto.module";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";


@@NgModule.bootstrap({
  declarations: [],
  imports: [BrowserModule, PontoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}