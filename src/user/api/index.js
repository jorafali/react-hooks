import axios from 'axios';
import Config from '../../config';
import { map, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import { nextDetails } from '../state/user';

export function getUser(tokenPair){
    return from(axios({
        method: 'GET',
            url: Config.apiUrl + '/user',
            headers: {
                'Authorization': 'Bearer ' +tokenPair[0],
                'PinAuthorization': tokenPair[1],
                'Content-Type': 'application/json'
            }
        }))
        .pipe(
            map(res => res.data),
            tap(console.log.bind(0, 'got User')),
            tap(nextDetails)
    )
}