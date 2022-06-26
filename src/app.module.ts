import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { LivroService } from './services/livros.service';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, LivroService],
})
export class AppModule {}
