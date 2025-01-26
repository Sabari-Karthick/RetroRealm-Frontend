import { Component, inject, Input, OnInit } from '@angular/core';
import { Game } from '../Game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { mockGames } from '../game.mock';

@Component({
  selector: 'game-view',
  standalone: true,
  imports: [],
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.scss',
})
export class GameViewComponent implements OnInit {
  protected game!: Game;

  private gameService = inject(GameService);

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!gameId) {
      console.error('Game Id is missing in the param');
      return;
    }

    mockGames.find((game) => { //Added just for testing
      if (game.gameId === Number(gameId)) {
        this.game = game;
      }
    });

    // this.gameService.getGame(gameId).subscribe((game: Game) => {
    //   this.game = game;
    // });
  }
}
