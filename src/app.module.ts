import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/produtos.service';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
