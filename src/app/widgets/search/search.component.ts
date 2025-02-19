import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Game } from '../../game/Game';
import { mockGames } from '../../game/game.mock';
@Component({
  selector: 'search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  protected gameSuggestions : Game[] = [];

  protected selectedGame : Game | undefined;

  constructor(){
    this.gameSuggestions = mockGames;
  }

  searchGame(event :any){
    this.gameSuggestions = this.gameSuggestions.filter(game => game.gameName.toLowerCase().includes(event.query.toLowerCase())); 
  }
}
