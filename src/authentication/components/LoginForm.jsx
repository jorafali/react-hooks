import React from 'react';
import { Form } from '../../lib/components/forms';
import { Input } from '../../lib/components/inputs';
import { Button } from '../../lib/components/buttons';
import { useLogin } from '../react-hooks';

export default function LoginForm(props){

    const [{username, password}, setUsername, setPassword, doLogin] = useLogin();

    return (
        <Form>
            <Input type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}>
            </Input>
            <Input type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}></Input>
            
            <Button type="submit"
                onClick = {
                    e => {
                        e.preventDefault();
                        doLogin();
                    }
                }>Login</Button>
        </Form>
    )
}