import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../Game';
import { mockGames } from '../game.mock';
import { GameCardComponent } from '../game-card/game-card.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'game-list',
  standalone: true,
  imports: [GameCardComponent, CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent implements OnInit {
  games!: Game[];

  gameService = inject(GameService);

  constructor() {
    console.log('Game List:', this.games); // Log the mock data immediately
  }
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
    alert('View details for game:' + gameId);
  }
}
