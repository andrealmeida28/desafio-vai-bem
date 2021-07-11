import Button from '@material-ui/core/Button';

type Props = {
  onClick:any
}

const LoginButtonForm = (props: Props) => {
  const { onClick } = props;
  return (
    <Button variant="contained" color="primary" onClick={onClick} >Entrar</Button>
  );
};

export default LoginButtonForm;