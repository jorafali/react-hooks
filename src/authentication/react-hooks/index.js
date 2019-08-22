import {useState} from 'react';
import {func as api} from '../api';

export function useLogin(){
    console.log('useLogin');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function doLogin(){
        console.log('doLogin')
        api.login({username, password})
        .subscribe(
            console.log.bind(0, 'did Login :'),
            console.log.bind(0, 'error Login :'),
            console.log.bind(0, 'complete Login :')
        )
    }

    return [{username, password}, setUsername, setPassword, doLogin];
}