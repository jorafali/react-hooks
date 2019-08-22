import {useState, useEffect} from 'react';
import {user$$} from '../state/user';

export function useUser(){
    console.log('useUser');
    const [user, setUser] = useState(null);
    useEffect(() => {
        const sub = user$$.subscribe(setUser);
        return sub.unsubscribe
    }, [])

    return user;
}