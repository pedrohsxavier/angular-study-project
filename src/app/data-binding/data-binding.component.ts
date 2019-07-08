import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://pedro.webdev.ti';
  urlImage = 'http://lorempixel.com/400/200/city/3/';

  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  botaoClicado() {
    alert('Botão clicado!');
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual=(<HTMLInputElement>evento.target).value;
  }

  constructor() { }

  ngOnInit() {
  }

}
