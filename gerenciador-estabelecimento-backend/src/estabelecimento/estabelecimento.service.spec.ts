import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { EstabelecimentoService } from './estabelecimento.service';

const oneMockEstablishment: Estabelecimento = new Estabelecimento();
oneMockEstablishment.id_estabelecimento = 1;
oneMockEstablishment.nome = 'Teste';
oneMockEstablishment.localizacao = 'Aqui';

const mockEstablishmentLocalization = 'Aqui';
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
            insert: jest.fn().mockReturnValue(oneMockEstablishment),
            update: jest.fn().mockResolvedValue(true),
            delete: jest.fn().mockResolvedValue(true),
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
});
