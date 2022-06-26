import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
    @Get()
    obterTodos(): string {
        return 'Todos os produtos';
    }

    @Get(':id')
    obterProduto(@Param() params): string {
        return 'Just one produto, with ID:' + params.id;
    }

    @Post()
    criarProduto(@Body() produto): string {
        console.log(produto);
        return 'Produto Criado';
    }

    @Put()
    alterarProduto(@Body() produto): string {
        console.log(produto);
        return 'Produto Alterado';
    }

    @Delete()
    deletaProduto(@Param() id: number): string {
        console.log(id);
        return 'Produto Alterado com id = ' + id;
    }
}
