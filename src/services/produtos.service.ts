import { Injectable } from '@nestjs/common';
import { LivroModel } from 'src/model/produto.model';

@Injectable()
export class ProdutosService {
  livros: LivroModel[] = [
    new LivroModel(0, 'Liv_01', 'Primeiro Libro', 124),
    new LivroModel(1, 'Liv_02', 'Segundo Libro', 124),
    new LivroModel(2, 'Liv_03', 'Terceiro Libro', 124),
  ];

  obterTodos(): LivroModel[] {
    return this.livros;
  }

  obterProduto(id: number): LivroModel {
    return this.livros.find((livros) => livros.id === id);
  }

  criarProduto(livro: LivroModel): string {
    this.livros.push(
      new LivroModel(livro.id, livro.codigo, livro.descricao, livro.preco)
    );
    console.log(this.livros);
    return 'Produto Criado' + livro.id;
  }

  alterarProduto(livro: LivroModel): string {
    return 'Produto Alterado';
  }

  deletaProduto(id: number): string {
    const livroExists = this.livros.find((livro) => livro.id == id);
    if (livroExists) {
      const index = this.livros.indexOf(livroExists);
      this.livros.splice(index, 1);
    }

    return 'Produto Alterado com id = ' + id;
  }
}
