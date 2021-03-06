import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameButtonsComponent } from './game-buttons/game-buttons.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameButtonsComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
