export class LivroModel {
    id: number;
    codigo: string;
    descricao: string;
    preco: number;

    constructor(codigo: string, descricao: string, preco: number) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.preco = preco;
    }
}
