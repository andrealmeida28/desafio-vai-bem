import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Estabelecimento from '../../model/Estabelecimento';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '1px',
            flexGrow: 0,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 400,
            minWidth: 400,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);

type Props = {
    estabelecimento:Estabelecimento,
};

export function EstabelecimentoComponent(props: Props) {
  const classes = useStyles();
  const { estabelecimento } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
                <Link to={{
                    pathname: '/estabelecimento/detalhes',
                    state: estabelecimento
                    }}
                > 
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt=" " src={estabelecimento.getImagem()} />                        
                    </ButtonBase>
                </Link>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {estabelecimento.getNome()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {estabelecimento.getLocalizacao()}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            <Link to={{
                                    pathname: '/estabelecimento/detalhes',
                                    state: estabelecimento
                                }}
                            > 
                                Ver Detalhes 
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
