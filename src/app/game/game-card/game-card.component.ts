import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input()game!: Game;

  @Output() viewDetails = new EventEmitter<number>(); // Emit an event to parent

  // Emits the event when "View Details" is clicked
  onViewDetails() {
    this.viewDetails.emit(this.game.gameId); // Send the game's ID to the parent
  }

}
