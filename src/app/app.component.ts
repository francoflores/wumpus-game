import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wumpus-game';

  play: boolean = false;
  tableProperties: any;

  onPlay(event): void {
    this.play = true;
    console.log(event);
    this.tableProperties = event;
  }

  onGoToMenu(): void {
    this.play = false;
  }
}
