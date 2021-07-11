/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<Usuario | null> {
    const user: Usuario = await this.usuarioService.findOne(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: Usuario) {
    const payload = { username: user.login, userId: user.id_usuario };
    user.password = "";
    return {
      token: this.jwtService.sign(payload),
      user: user,
    };
  }
}
