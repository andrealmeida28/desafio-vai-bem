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
}

export default function EditarEstabelecimento(props: Props) {

    const { open, estabelecimento, onClose } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth={false}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Editar Estabelecimento: " + estabelecimento.getNome()}</DialogTitle>
                <DialogContent>
                    <EstabelecimentoForm 
                        isEdit={true} 
                        estabelecimento={estabelecimento} 
                        onClose={onClose}
                        cbOnCreate={()=>{}}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}
