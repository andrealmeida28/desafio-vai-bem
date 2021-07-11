import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
import { Estabelecimento } from './entities/estabelecimento.entity';

@Injectable()
export class EstabelecimentoService {
  constructor(
    @InjectRepository(Estabelecimento, 'main')
    private estabelecimentoRepository: Repository<Estabelecimento>,
  ) {}

  async create(
    createEstabelecimentoDto: CreateEstabelecimentoDto,
  ): Promise<Estabelecimento> {
    const { nome, localizacao, imagem } = createEstabelecimentoDto;
    const estabelecimento: Estabelecimento = new Estabelecimento();
    estabelecimento.nome = nome;
    estabelecimento.localizacao = localizacao;
    estabelecimento.imagem = imagem;
    await this.estabelecimentoRepository.insert(estabelecimento);
    return estabelecimento;
  }

  findByLocalization(localizacao: string) {
    return this.estabelecimentoRepository.find({
      where: [{ localizacao: localizacao }],
    });
  }

  findAll(): Promise<Estabelecimento[]> {
    return this.estabelecimentoRepository.find();
  }

  findOne(id: number): Promise<Estabelecimento> {
    return this.estabelecimentoRepository.findOne(id);
  }

  async update(
    id: number,
    updateEstabelecimentoDto: UpdateEstabelecimentoDto,
  ): Promise<Estabelecimento> {
    const { nome, localizacao, imagem } = updateEstabelecimentoDto;
    const estabelecimento: Estabelecimento = new Estabelecimento();
    estabelecimento.nome = nome;
    estabelecimento.localizacao = localizacao;
    estabelecimento.imagem = imagem;
    await this.estabelecimentoRepository.update(id, estabelecimento);
    return estabelecimento;
  }

  async remove(id: number): Promise<void> {
    await this.estabelecimentoRepository.delete(id);
  }
}
