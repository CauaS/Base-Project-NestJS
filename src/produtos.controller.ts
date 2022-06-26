import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { LivroModel } from './model/produto.model';
import { ProdutosService } from './services/produtos.service';

@Controller('produtos')
export class ProdutosController {
  private produtosService: ProdutosService;
  constructor(produtosService: ProdutosService) {
    this.produtosService = produtosService;
  }

  @Get()
  obterTodos(): LivroModel[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterProduto(@Param() params): LivroModel {
    return this.produtosService.obterProduto(params.id);
  }

  @Post()
  criarProduto(@Body() livro: LivroModel): string {
    this.produtosService.criarProduto(livro);
    return 'Produto Criado';
  }

  @Put()
  alterarProduto(@Body() livro: LivroModel): string {
    return 'Produto Alterado';
  }

  @Delete(':id')
  deletaProduto(@Param() params): string {
    this.produtosService.deletaProduto(params.id);
    return 'Produto Alterado com id = ' + params.id;
  }
}
