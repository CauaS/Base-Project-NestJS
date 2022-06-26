import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LivroModel } from 'src/model/livro.model';

@Injectable()
export class LivroService {
  constructor(
    @InjectModel(LivroModel)
    private livroRepository: typeof LivroModel //repo of books
  ) {}
  async obterTodos(): Promise<LivroModel[]> {
    return this.livroRepository.findAll();
  }

  async obterProduto(id: number): Promise<LivroModel> {
    return this.livroRepository.findByPk(id);
  }

  async criarProduto(livro: LivroModel): Promise<void> {
    this.livroRepository.create(livro);
  }

  alterarProduto(livro: LivroModel): Promise<[number, LivroModel[]]> {
    return this.livroRepository.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }

  async deletaProduto(id: number): Promise<void> {
    const livro = await this.obterProduto(id);
    if (livro) {
      livro.destroy();
    }
  }
}
