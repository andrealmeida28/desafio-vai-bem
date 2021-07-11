/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Estabelecimento } from '../estabelecimento/entities/estabelecimento.entity';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  name: 'main',
  host: 'localhost',
  port: 3306,
  username: 'ondemand',
  password: 'ondemand1234',
  database: 'gerenciador_estabelecimento',
  entities: [Estabelecimento, Usuario],
  synchronize: false,
  autoLoadEntities: true,
  keepConnectionAlive: true,
})
