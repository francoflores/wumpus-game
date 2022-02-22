import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TableGameComponent } from './table-game/table-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CellGameComponent } from './cell-game/cell-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TableGameComponent,
    CellGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
