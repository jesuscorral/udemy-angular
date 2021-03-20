export class Ingridient {

    // Poniendo "public" delante de los parametros, internamente crea unas propiedades de la clase con el mismo nombre que podremos usar como si las hubieramos declarado.
    
    constructor(public name: string, public amount:number)
    {}
}