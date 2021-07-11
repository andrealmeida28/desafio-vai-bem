import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EstabelecimentoForm from './EstabelecimentoForm';
import Estabelecimento from '../../model/Estabelecimento';

type Props = {
    open: boolean
    estabelecimento: Estabelecimento
    onClose: any
    cbOnCreate: any
}

export default function AdicionarEstabelecimento(props: Props) {

    const { open, estabelecimento, onClose, cbOnCreate } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Adicionar Novo Estabelecimento"}</DialogTitle>
                <DialogContent>
                    <EstabelecimentoForm 
                        isEdit={false} 
                        estabelecimento={estabelecimento} 
                        onClose={onClose}
                        cbOnCreate={cbOnCreate}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}
