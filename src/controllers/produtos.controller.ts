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
  obterTodos(): LivroModel[] {
    return this.livroService.obterTodos();
  }

  @Get(':id')
  obterProduto(@Param() params): LivroModel {
    return this.livroService.obterProduto(params.id);
  }

  @Post()
  criarProduto(@Body() livro: LivroModel): string {
    this.livroService.criarProduto(livro);
    return 'Produto Criado';
  }

  @Put()
  alterarProduto(@Body() livro: LivroModel): string {
    this.livroService.alterarProduto(livro);
    return 'Produto Alterado';
  }

  @Delete(':id')
  deletaProduto(@Param() params): string {
    this.livroService.deletaProduto(params.id);
    return 'Produto Alterado com id = ' + params.id;
  }
}
