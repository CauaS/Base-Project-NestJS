import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { LivroModel } from '../model/livro.model';
import { LivroService } from '../services/livros.service';

@Controller('produtos')
export class ProdutosController {
  private livroService: LivroService;
  constructor(livroService: LivroService) {
    this.livroService = livroService;
  }

  @Get()
  async obterTodos(): Promise<LivroModel[]> {
    return await this.livroService.obterTodos();
  }

  @Get(':id')
  async obterProduto(@Param() params): Promise<LivroModel> {
    return await this.livroService.obterProduto(params.id);
  }

  @Post()
  criarProduto(@Body() livro: LivroModel): string {
    this.livroService.criarProduto(livro);
    return 'Produto Criado com sucesso!';
  }

  @Put()
  async alterarProduto(
    @Body() livro: LivroModel
  ): Promise<[number, LivroModel[]]> {
    return this.livroService.alterarProduto(livro);
  }

  @Delete(':id')
  async deletaProduto(@Param() params): Promise<void> {
    await this.livroService.deletaProduto(params.id);
  }
}
