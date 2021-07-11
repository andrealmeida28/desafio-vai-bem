// @flow
import { ChangeEvent, useState } from 'react';
import LoginForm from './LoginForm';
import { history } from '../../routes/routesNavegation';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import Usuario from '../../model/Usuario';
import { useAuth } from '../../services/auth';
import { Grid } from '@material-ui/core';
import useStyles from './LoginStyle';

type Props = {
  
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Login = (props: Props) => {
  const [auth, setAuth] = useState<Usuario>(new Usuario());
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const context = useAuth();
  const classes = useStyles();

  const handleClick = () => {
    setLoading(true);
    if(auth.getLogin() === ""){
      setLoading(false);
      setOpen(true);
      setIsError(true);
      setSnackMsg("Campo Email está vazio!")
    }
    else if(auth.getPassword() === ""){
      setLoading(false);
      setOpen(true);
      setIsError(true);
      setSnackMsg("Campo Senha está vazio!")
    }
    else{
      context.Login(auth.getLogin(), auth.getPassword())
      .then(response => {
        console.log(response)
        if(response.erro){
          setLoading(false);
          setOpen(true);
          setIsError(true);
          setSnackMsg(response.message)
        }
        else{
          setLoading(false);
          setIsError(false);
          setOpen(true);
          setSnackMsg(response.message)
          history.push('/home')
        }
      })
      .catch(error => {
        setLoading(false);
        setOpen(true);
        setIsError(true);
        setSnackMsg("Erro ao efetuar o login")
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    let usuario:Usuario = auth;
    if(event.target.name === "email"){
      usuario.setLogin(event.target.value)
    }
    else{
      usuario.setPassword(event.target.value)
    }
    setAuth(usuario);
  };

  return (
    <div className={classes.root}>
      {isError &&
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
        >
          {isError &&
          <Alert onClose={handleClose} severity="error">
            {snackMsg}
          </Alert>
          }
        </Snackbar>
      }
      {!isError &&
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
        >
          <Alert onClose={handleClose} severity="success">
            {snackMsg}
          </Alert>
        </Snackbar>
      }
      <Grid 
        container 
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <h3 className="card-itle">Autenticação</h3>
          <LoginForm onClick={handleClick} onChange={handleChange}/>
          <br/>
          {loading && <LinearProgress />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;