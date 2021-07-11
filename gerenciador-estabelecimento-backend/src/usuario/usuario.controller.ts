import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Request,
  // UseGuards,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
// import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // @Post()
  // create(@Body() createUsuarioDto: CreateUsuarioDto) {
  //   return this.usuarioService.create(createUsuarioDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usuarioService.findAll();
  // }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuarioService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.usuarioService.remove(+id);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
