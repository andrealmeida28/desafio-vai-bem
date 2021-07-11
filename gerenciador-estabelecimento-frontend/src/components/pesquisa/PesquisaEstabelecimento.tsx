// @flow
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  onChange:any
};
type State = {
  
};
export class PesquisaEstabelecimento extends Component<Props, State>{
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <TextField style={{width: "90%"}} id="standard" label="Pesquisa por localidade" name="textoPesquisa" onChange={onChange}/>
      </div>
    );
  };
};