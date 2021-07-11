import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [EstabelecimentoModule, DatabaseModule, AuthModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
