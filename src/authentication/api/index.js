import axios from 'axios';
import Config from '../../config';
import { from } from 'rxjs';
import {tap, map, switchMap} from 'rxjs/operators';
import { getUser } from '../../user/api';

const functions = {
    login: ({username, password}) => from(
        axios.post(Config.apiUrl + '/authentication/login', 
        {username, password},
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )).pipe(
            map(res => res.data.split(';')),
            tap(console.log.bind(0, 'response from login call =')),
            switchMap(getUser)
        )
}
export const func = functions

const observables = {}
export const obs = observables