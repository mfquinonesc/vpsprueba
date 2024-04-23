import { Component } from '@angular/core';

@Component({
  selector: 'app-arreglos',
  templateUrl: './arreglos.component.html',
  styleUrls: ['./arreglos.component.css']
})
export class ArreglosComponent {

  arreglo1: string = '';
  arreglo2: string = '';
  array: number[] = [];
  result: string = '';


  formatArray(value: string) {
    const array = value.split('\n');
    array.forEach(element => {
      if (element == '') {
        element = '0';
      }
    });
    return array;
  }

  sumar() {
    const line1 = this.formatArray(this.arreglo1);
    const line2 = this.formatArray(this.arreglo2);
    if (line1.length == line2.length) {
      for (let i = 0; i < line1.length; i++) {
        this.array.push(Number.parseInt(line1[i]) + Number.parseInt(line2[i]));
      }
      let message = '';
      this.array.forEach((e) => {
        let dots = '';
        for (let i = 0; i < e; i++) {
          dots = dots + '*';
        }
        message = `${message} ${e} ${dots} \n`;
      });
      this.result = message;
    } else {
      alert('Los arreglos deben ser del mismo tamaño');
    }


  }

  limpiar() {
    this.arreglo1 = '';
    this.arreglo2 = '';
    this.array = [];
    this.result = '';
  }
}
