import {BehaviorSubject} from 'rxjs';
import produce from 'immer';
import {produceUserDetails} from './producers';
import { take, map, tap } from 'rxjs/operators';

const INITIAL_USER = produce(Object.create(null), draft => ({
    details: null
}))

const $user$$ = new BehaviorSubject(INITIAL_USER);
const current$ = $user$$.asObservable().pipe(take(1))
export const user$$ = $user$$.asObservable();
export const next = $user$$.next.bind(user$$);
export const nextDetails = details => {
    current$.pipe(
        map(user => produceUserDetails(user, details)),
        tap(newState => {
            console.log('pushing next state =', newState)
            $user$$.next(newState);
        })
    ).subscribe(
        console.log.bind(0, 'success '),
        console.log.bind(0, 'ERROR '),
    )
}
