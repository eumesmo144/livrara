export class Livro {


    constructor(public titulo?: string, public ISBN? : string, public genero? : string, public resumo? : string | "Esse livro com certeza é um livro."){
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.genero = genero;
        this.resumo = resumo;
    }
    public getTitulo(){
        return this.titulo;
    }
    public getISBN(){
        return this.ISBN;
    }
    public getGenero(){
        return this.genero;
    }
    public getResumo(){
        return this.resumo;

    }
    public setTitulo(titulo: string){
        this.titulo = titulo;
    }
    public setISBN(ISBN: string){
        this.ISBN = ISBN;
    }
    public setGenero(genero: string){
        this.genero = genero;
    }
    toString(): string{
        return `Título: ${this.titulo}
       / Gênero: ${this.genero}
       / ISBN: ${this.ISBN}
       / Resumo: ${this.resumo} `;
    }




}