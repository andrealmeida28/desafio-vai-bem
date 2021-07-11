import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { EstabelecimentoService } from './estabelecimento.service';

const oneMockEstablishment: Estabelecimento = new Estabelecimento();
oneMockEstablishment.id_estabelecimento = 1;
oneMockEstablishment.nome = 'Nome Teste';
oneMockEstablishment.localizacao = 'Loc Teste';
oneMockEstablishment.imagem = 'Imagem Teste';

const mockEstablishmentLocalization = 'Loc Teste';
const mockEstablishmentId = 1;

const mockEstablishmentArray: Estabelecimento[] = [];
mockEstablishmentArray.push(oneMockEstablishment);

describe('EstabelecimentoService', () => {
  let service: EstabelecimentoService;
  let repository: Repository<Estabelecimento>;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstabelecimentoService,
        {
          provide: getRepositoryToken(Estabelecimento, 'main'),
          useValue: {
            find: jest.fn().mockResolvedValue(mockEstablishmentArray),
            findOne: jest.fn().mockResolvedValue(oneMockEstablishment),
            insert: jest.fn().mockResolvedValue(oneMockEstablishment),
            update: jest.fn().mockResolvedValue(oneMockEstablishment),
            delete: jest.fn().mockResolvedValue(1),
          },
        },
      ],
    }).compile();
    repository = module.get<Repository<Estabelecimento>>(
      getRepositoryToken(Estabelecimento, 'main'),
    );
    service = module.get<EstabelecimentoService>(EstabelecimentoService);
  });

  afterAll((done) => {
    done();
  });

  describe('createEstablishment', () => {
    it('should create a establishment', async () => {
      expect(repository.insert).not.toHaveBeenCalled();
      const result = await service.create(oneMockEstablishment);
      expect(repository.insert).toHaveBeenCalledWith(oneMockEstablishment);
      expect(result).toEqual(oneMockEstablishment);
    });
  });

  describe('findAll', () => {
    it('should return an array of establishment', async () => {
      const establishments: Estabelecimento[] = await service.findAll();
      expect(establishments).toEqual(mockEstablishmentArray);
    });
  });

  describe('findOne', () => {
    it('should retrieve one establishment with an Id', () => {
      const repoSpy = jest.spyOn(repository, 'findOne');
      expect(service.findOne(mockEstablishmentId)).resolves.toEqual(
        oneMockEstablishment,
      );
      expect(repoSpy).toBeCalledWith(mockEstablishmentId);
    });
  });

  describe('findByLocalization', () => {
    it('should retrieve one establishment with localization', async () => {
      const establishments: Estabelecimento[] =
        await service.findByLocalization(mockEstablishmentLocalization);
      expect(establishments).toEqual(mockEstablishmentArray);
    });
  });

  describe('editEstablishment', () => {
    it('should edit a establishment', async () => {
      expect(repository.update).not.toHaveBeenCalled();
      const result = await service.update(1, oneMockEstablishment);
      expect(repository.update).toHaveBeenCalledWith(oneMockEstablishment);
      expect(result).toEqual(oneMockEstablishment);
    });
  });

  describe('deleteEstablishment', () => {
    it.skip('should delete establishment', async () => {
      expect(repository.delete).not.toHaveBeenCalled();
      await service.remove(1);
      expect(repository.delete).toHaveBeenCalledWith(1);
    });
  });
});
