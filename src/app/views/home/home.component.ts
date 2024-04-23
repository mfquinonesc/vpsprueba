import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  options: string[] = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];

  player1: string = 'piedra';
  player2: string = 'piedra';
  resultado: string = '';

  jugar() {
    if (this.player1 == this.player2) {
      this.resultado = 'Empate';
    }
    //-------------------------
    if (this.player1 == 'papel' && this.player2 == 'piedra') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'papel' && this.player2 == 'tijera') {
      this.resultado = 'Gana jugador 2';
    }
    if (this.player1 == 'papel' && this.player2 == 'lagarto') {
      this.resultado = 'Gana jugador 2';
    }
    if (this.player1 == 'papel' && this.player2 == 'spock') {
      this.resultado = 'Gana jugador 1';
    }
    //------------------------
    if (this.player1 == 'tijera' && this.player2 == 'papel') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'tijera' && this.player2 == 'piedra') {
      this.resultado = 'Gana jugador 2';
    }
    if (this.player1 == 'tijera' && this.player2 == 'lagarto') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'tijera' && this.player2 == 'spock') {
      this.resultado = 'Gana jugador 2';
    }
    //------------------------
    if (this.player1 == 'lagarto' && this.player2 == 'spock') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'lagarto' && this.player2 == 'tijera') {
      this.resultado = 'Gana jugador 2';
    }
    if (this.player1 == 'lagarto' && this.player2 == 'papel') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'lagarto' && this.player2 == 'piedra') {
      this.resultado = 'Gana jugador 2';
    }
    //------------------------
    if (this.player1 == 'spock' && this.player2 == 'tijera') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'spock' && this.player2 == 'papel') {
      this.resultado = 'Gana jugador 2';
    }
    if (this.player1 == 'spock' && this.player2 == 'piedra') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'spock' && this.player2 == 'lagarto') {
      this.resultado = 'Gana jugador 2';
    }
    //------------------------
    if (this.player1 == 'piedra' && this.player2 == 'lagarto') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'piedra' && this.player2 == 'papel') {
      this.resultado = 'Gana jugador 2';
    }
    if (this.player1 == 'piedra' && this.player2 == 'tijera') {
      this.resultado = 'Gana jugador 1';
    }
    if (this.player1 == 'piedra' && this.player2 == 'spock') {
      this.resultado = 'Gana jugador 2';
    }
  }

  clear() {
    this.player1 = 'piedra';
    this.player2 = 'piedra';
    this.resultado = '';
  }

  reset() {
    this.resultado = '';
  }
}
