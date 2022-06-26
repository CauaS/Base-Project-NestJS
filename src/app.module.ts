import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { LivroModel } from './model/livro.model';
import { LivroService } from './services/livros.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([LivroModel]),
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, LivroService],
})
export class AppModule {}
