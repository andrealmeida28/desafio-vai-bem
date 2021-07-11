export default class Estabelecimento{
    private id!: number;
    private nome: string = '';
    private localizacao: string = '';
    private imagem!: string;
    private id_usuario!: number
    
    setId(id_estabelecimento:number) {
        this.id = id_estabelecimento;
    }

    setNome(nome:string) {
        this.nome = nome;
    }

    setLocalizacao(localizacao:string) {
        this.localizacao = localizacao;
    }

    setImagem(imagem:string) {
        this.imagem = imagem;
    }

    setIdUsuario(id_usuario:number) {
        this.id_usuario = id_usuario;
    }

    getId() {
        return this.id;
    }
    
    getNome() {
        return this.nome;
    }
    
    getLocalizacao() {
        return this.localizacao;
    }
    
    getImagem() {
        return this.imagem;
    }

    getIdUsuario() {
        return this.id_usuario;
    }
  }