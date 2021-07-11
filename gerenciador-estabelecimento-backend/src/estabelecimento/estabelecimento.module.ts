import { Module } from '@nestjs/common';
import { EstabelecimentoService } from './estabelecimento.service';
import { EstabelecimentoController } from './estabelecimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estabelecimento } from './entities/estabelecimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estabelecimento], 'main')],
  controllers: [EstabelecimentoController],
  providers: [EstabelecimentoService],
})
export class EstabelecimentoModule {}
