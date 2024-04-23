import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent {

  dimension: number = 0;
  lines: string[] = [];
  matriz: string[][] = [];
  inputMatriz: string = '';
  diag1: number = 0;
  diag2: number = 0;
  result: number = 0;


  calculate() {    
    this.readLines();
    this.calculateDig1();
    this.calculateDig2();
    this.result = Math.abs(this.diag1 - this.diag2);
  }

  readLines() {
    this.matriz = [];
    this.lines = this.inputMatriz.split('\n');
    this.lines.forEach(line => {
      this.matriz.push(line.split(' '));
    });
    console.log(this.matriz.join('\n'));
  }

  calculateDig1() {
    this.diag1 = 0;
    for (let i = 0; i < this.dimension; i++) {
      this.diag1 = this.diag1 + Number.parseInt(this.matriz[i][i]);
    }
    console.log(this.diag1);
  }

  calculateDig2() {
    this.diag2 = 0; 
    for (let i = 0; i < this.dimension; i++) {
      this.diag2 = this.diag2 + Number.parseInt(this.matriz[i][this.dimension - 1 - i]);
    }
    console.log(this.diag2);
  }


  clear() {
    this.dimension = 0;
    this.lines = [];
    this.matriz = [];
    this.inputMatriz = '';
    this.diag1 = 0;
    this.diag2 = 0;
    this.result = 0;
  }





}
