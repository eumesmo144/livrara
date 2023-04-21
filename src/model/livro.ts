export class Livro {

    public titulo =  String;
    public ISBN =  String;
    public genero = String;

    constructor(titulo = String, ISBN = String, genero = String){
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.genero = genero;
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
    public setTitulo(titulo = String): void{
        this.titulo = titulo;
    }
    public setISBN(ISBN = String): void{
        this.ISBN = ISBN;
    }
    public setGenero(genero = String): void{
        this.genero = genero;
    }




}