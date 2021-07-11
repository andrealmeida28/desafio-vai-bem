// @flow
import { Button, ImageList } from '@material-ui/core';
import './Home.css';
import { ChangeEvent, Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Estabelecimento from '../../model/Estabelecimento';
import { GetAllEstabelecimentos } from '../../services/estabelecimentoService';
import { EstabelecimentoComponent } from '../estabelecimento/EstabelecimentoComponent';
import { PesquisaEstabelecimento } from '../pesquisa/PesquisaEstabelecimento';
import AddIcon from '@material-ui/icons/Add';
import AdicionarEstabelecimento from '../estabelecimento/AdicionarEstabelecimento';

type Props = {
  
};

type State = {
  estabelecimento: Estabelecimento,
  estabelecimentos: Estabelecimento[],
  estabelecimentosFiltered: Estabelecimento[],
  openAdd: boolean,
};

export default class Home extends Component<Props, State>{
  constructor(props:Props){
    super(props);      
    let estabelecimentos: Estabelecimento[] = [];
    let estabelecimento: Estabelecimento = new Estabelecimento();

    this.state = {
      estabelecimento : estabelecimento,
      estabelecimentos : estabelecimentos,
      estabelecimentosFiltered : estabelecimentos,
      openAdd: false
    }
  }
  
  carregarEstabelecimentos(){
    GetAllEstabelecimentos()
    .then(
        response => {
            let estabelecimentos:Estabelecimento[] = [];
            for (let i in response.data) {
                let estabelecimento:Estabelecimento = new Estabelecimento();
                estabelecimento.setId(response.data[i].id_estabelecimento);
                estabelecimento.setNome(response.data[i].nome);
                estabelecimento.setLocalizacao(response.data[i].localizacao);
                estabelecimento.setImagem(response.data[i].imagem);
                estabelecimentos.push(estabelecimento);
            }
            this.setState({ 
              estabelecimentos : estabelecimentos, 
              estabelecimentosFiltered: estabelecimentos 
            });
        }
    )
    .catch(error => {

    });
  }

  componentDidMount() {
    this.carregarEstabelecimentos()
  }

  cbOnCreate = () => {
    this.carregarEstabelecimentos()
    this.handleClickClose()
  }

  handleChangeSearch = (event:ChangeEvent<HTMLInputElement>) => {
      this.setState({ estabelecimentosFiltered : this.state.estabelecimentos.filter(
          (estabelecimento) => {
              return estabelecimento.getLocalizacao().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
          }
      )});
  };
    
  handleClickOpenAddDialog = () => {
    let estabelecimento: Estabelecimento = new Estabelecimento();
    this.setState({ estabelecimento: estabelecimento, openAdd: true});
  };
    
  handleClickClose = () => {
    this.setState({ openAdd: false});
  };

  render() {
    return (
      <div className="container-home">
        <Row className="pesquisa-row">
          <Col sm={9}>
            <PesquisaEstabelecimento onChange={this.handleChangeSearch.bind(this)} />
          </Col>
          <Col sm={3} style={{paddingTop: '20px'}}>
            <Button
              variant="contained"
              color="primary"
              style={{margin: 1}}
              startIcon={<AddIcon />}
              onClick={this.handleClickOpenAddDialog}
            >
              Adicionar
            </Button>
          </Col>
        </Row>
        <Row style={{marginLeft: "60px"}}>
          <ImageList rowHeight={200} style={{width: "100%"}}>
            {this.state.estabelecimentosFiltered.map((estabelecimento:Estabelecimento) => (
              <EstabelecimentoComponent key={estabelecimento.getId()} estabelecimento={estabelecimento} />
            ))}
          </ImageList>
        </Row>
        <AdicionarEstabelecimento 
          open={this.state.openAdd} 
          estabelecimento={this.state.estabelecimento} 
          onClose={this.handleClickClose} 
          cbOnCreate={this.cbOnCreate}
        />
      </div>
    );
  };
};