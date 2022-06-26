export class LivroModel {
  id: number;
  codigo: string;
  descricao: string;
  preco: number;

  constructor(id: number, codigo: string, descricao: string, preco: number) {
    this.id = id;
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco;
  }
}
