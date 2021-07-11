import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
    open: boolean
    onClose: any
    onAccept: any
}

export default function ExcluirEstabelecimento(props: Props) {

    const { open, onClose, onAccept } = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Deseja realmente excluir?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Ao excluir o estabelecimento, todas suas informa&ccedil;ões serão perdidas.
                        Deseja continuar?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary" autoFocus>
                        Cancelar
                    </Button>
                    <Button onClick={onAccept} color="secondary">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
