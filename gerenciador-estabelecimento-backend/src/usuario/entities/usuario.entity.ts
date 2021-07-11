import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'tb_user' })
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column('varchar')
  login: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  email: string;
}
