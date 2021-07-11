// @flow
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import LoginButtonForm from './LoginCustomItensForm';
import { Form } from 'react-bootstrap';

type Props = {
    onClick:any,
    onChange:any
};

type State = {
  
};

export default class LoginForm extends Component<Props, State>{
    render() {
        const { onClick, onChange } = this.props;
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <TextField style={{width: "90%"}} required id="standard-required" label="Email" name="email" onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <TextField style={{width: "90%"}} required id="standard-password-input" label="Password" type="password" name="password" onChange={onChange}/>
                    </Form.Group>
                    <LoginButtonForm onClick={onClick}/>
                </Form>
            </div>
        );
    };
};