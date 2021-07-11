/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario, 'main')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { login, password, email } = createUsuarioDto;
    const usuario: Usuario = new Usuario();
    usuario.login = login;
    usuario.password = password;
    usuario.email = email;
    await this.usuarioRepository.insert(usuario);
    return usuario;
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findOne(login: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({
      where: [{login: login}]
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const { login, password, email } = updateUsuarioDto;
    const usuario: Usuario = new Usuario();
    usuario.login = login;
    usuario.password = password;
    usuario.email = email;
    await this.usuarioRepository.update(id, usuario);
    return usuario;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
