// @flow
import { ChangeEvent, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Col, Form } from 'react-bootstrap';
import Estabelecimento from '../../model/Estabelecimento';
import { Button } from '@material-ui/core';
import { history } from '../../routes/routesNavegation';
import { CreateEstabelecimento, EditEstabelecimento } from '../../services/estabelecimentoService';

type Props = {
    isEdit: boolean
    estabelecimento: Estabelecimento
    onClose: any
    cbOnCreate: any
};

type State = {
    estabelecimento: Estabelecimento
};

export default class EstabelecimentoForm extends Component<Props, State>{
    constructor(props:Props){
        super(props);      
        this.state = {
            estabelecimento: this.props.estabelecimento
        }
    }    
    
    handleClickEdit = () => {
        EditEstabelecimento(this.state.estabelecimento.getId(), this.state.estabelecimento)
        .then(response => {
            history.push('/home')
        })
        .catch(error => { 

        })
    };
    
    handleClickCreate = () => {
        CreateEstabelecimento(this.state.estabelecimento)
        .then(response => {
            this.props.cbOnCreate();
            history.push('/home')
        })
        .catch(error => { 

        })
    };
    
    handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "nome"){
            let estabelecimentoEdit: Estabelecimento = this.state.estabelecimento;
            estabelecimentoEdit.setNome(event.target.value)
            this.setState({ estabelecimento : estabelecimentoEdit});
        }
        else{
            let estabelecimentoEdit: Estabelecimento = this.state.estabelecimento;
            estabelecimentoEdit.setLocalizacao(event.target.value)
            this.setState({ estabelecimento : estabelecimentoEdit});
        }
    };

    render() {
        const { isEdit, onClose } = this.props
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="nome">
                        <TextField 
                            style={{width: "90%", minWidth: "550px"}} 
                            required id="nome" 
                            label="Nome" 
                            name="nome" 
                            value={this.state.estabelecimento.getNome()}
                            onChange={this.handleChange.bind(this)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="localizacao">
                        <TextField 
                            style={{width: "90%", minWidth: "550px"}} 
                            required id="localizacao" 
                            label="Localizaçao" 
                            name="localizacao"
                            value={this.state.estabelecimento.getLocalizacao()}
                            onChange={this.handleChange.bind(this)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Col sm={{ span: 20, offset: 4 }}>
                            <Button  color="primary" autoFocus onClick={onClose}>
                                Cancelar
                            </Button>
                            {isEdit && (
                                <Button color="secondary" onClick={this.handleClickEdit.bind(this)}>
                                    Editar
                                </Button>
                            )}
                            {!isEdit && (
                                <Button color="secondary" onClick={this.handleClickCreate.bind(this)}>
                                    Cadastrar
                                </Button>
                                )}
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    };
};