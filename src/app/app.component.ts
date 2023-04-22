import { Component } from '@angular/core';
import { Livro } from "./shared/model/livro"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Livrara';
  livro: Livro;
  estante: Array<Livro>;
  livropRemover: Livro;


  constructor(){
    this.livro = new Livro();
    this.estante = new Array<Livro>();
    this.livropRemover = new Livro();
  }
  inserirLivro(): void {
    this.estante.push(this.livro);
    this.livro = new Livro();
  }
  removerLivro(): void {
    let indrm = this.estante.findIndex(livro => livro.ISBN === this.livropRemover.ISBN);
    this.estante.splice(indrm, 1);
  }
  // editarLivro(livro: Livro): void {
  //   this.livropEditar = livro;
}
