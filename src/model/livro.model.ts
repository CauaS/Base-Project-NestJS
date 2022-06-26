import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class LivroModel extends Model<LivroModel> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  descricao: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;
}
