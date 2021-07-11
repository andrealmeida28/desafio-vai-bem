// @flow
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import Estabelecimento from "../../model/Estabelecimento";
import { DeleteEstabelecimento } from '../../services/estabelecimentoService';
import EditarEstabelecimento from './EditarEstabelecimento';
import ExcluirEstabelecimento from './ExcluirEstabelecimento';
import { history } from '../../routes/routesNavegation';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop : "3%",
        },
        card: {
            maxWidth: "81%",  
        },
        img: {
            maxWidth: "100%",  
        },
    }),
);

type Props = {
  
};

export function DetalhesEstabelecimento(props: Props) {
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    let location = useLocation();
    const classes = useStyles();
    const estabelecimento: Estabelecimento = location.state as Estabelecimento;

    const handleClickOpenEditarDialog = () => {
        setOpenEdit(true);
    };
    
    const handleClickOpenDeleteDialog = () => {
        setOpenDelete(true);
    };
    
    const handleClose = () => {
        setOpenEdit(false);
        setOpenDelete(false);
    };
    
    const handleAcceptDelete = () => {
        DeleteEstabelecimento(estabelecimento.getId())
        .then(response => {
            setOpenDelete(false);
            history.push('/home')
        })
        .catch(error => { 

        })
    };
    
    return (
        <div className={classes.root}>            
            <Grid 
                container 
                spacing={1}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt=" "
                            className={classes.img}
                            image={estabelecimento.getImagem()}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {estabelecimento.getNome()}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {estabelecimento.getLocalizacao()}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={handleClickOpenEditarDialog}>
                            Editar
                        </Button>
                        <Button size="small" color="primary" onClick={handleClickOpenDeleteDialog}>
                            Excluir
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
            <EditarEstabelecimento 
                open={openEdit} 
                estabelecimento={estabelecimento} 
                onClose={handleClose} 
            />
            <ExcluirEstabelecimento 
                open={openDelete} 
                onClose={handleClose} 
                onAccept={handleAcceptDelete} 
            />
        </div>
    );
};