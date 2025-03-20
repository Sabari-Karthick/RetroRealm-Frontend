import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../Game';
import { mockGames } from '../game.mock';
import { GameCardComponent } from '../game-card/game-card.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { SearchComponent } from "../../widgets/search/search.component";
import { SharedModule } from '../../shared.module';
import { InputNumberLimiterDirective } from '../../widgets/input/input-number-limiter.directive';

@Component({
  selector: 'game-list',
  standalone: true,
  imports: [GameCardComponent, CommonModule, SearchComponent,SharedModule,InputNumberLimiterDirective],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent implements OnInit {

  games!: Game[];
  private gameService = inject(GameService);


  ngOnInit(): void {
    // this.gameService.getAllGames().subscribe({
    //   next: (games: Game[]) => {
    //     this.games = games;
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    // });
    this.games = mockGames;

  }

  onGameDetails(gameId: number) {
    console.log('View details for game:' + gameId);
  }
}
