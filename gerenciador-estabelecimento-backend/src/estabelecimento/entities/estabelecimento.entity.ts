import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_estabelecimento' })
export class Estabelecimento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_estabelecimento: number;

  @Column('varchar')
  nome: string;

  @Column('varchar')
  localizacao: string;

  @Column('longtext')
  imagem: string;
}
