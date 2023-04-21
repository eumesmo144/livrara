import { Component } from '@angular/core';
import { Livro } from "../model/livro"
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'livraria';
  livro: Livro;
  estante: Array<Livro>;

  constructor(){
    this.livro = new Livro();
    this.estante = new Array<Livro>();
  }
  inserirLivro(): void {
    this.estante.push(this.livro);
    this.livro = new Livro();
  }
  removerLivro(livropRemover: Livro): void {
    const indrm = this.estante.findIndex(livro => livro.ISBN === livropRemover.ISBN);
    this.estante.splice(indrm, 1);
  }
  // editarLivro(livro: Livro): void {
  //   this.livropEditar = livro;
  // }


}
