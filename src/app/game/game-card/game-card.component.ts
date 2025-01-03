import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Game } from '../Game';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  private router = inject(Router);

  @Input()game!: Game;

  @Output() gameDetails = new EventEmitter<number>(); // Emit an event to parent

  // Emits the event when "Card" is clicked
  onViewGameDetails() { //Need to Decide what to do with this, whether emit or navigate
    this.gameDetails.emit(this.game.gameId); // Send the game's ID to the parent 
    this.router.navigate(['/game', this.game.gameId]);  
  }

}
