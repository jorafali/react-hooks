import React, {useState, useEffect} from 'react';
import { user$$ } from '../state/user';
// import {selectUserDetails} from '../state/selectors';

export default function UserDetails(props){
    const [user, setUser] = useState(null);
    useEffect(() => {
        const sub = user$$.subscribe(setUser);
        return sub.unsubscribe
    }, [])
    return (
        <h1>
            {
                (user && user.details)
                ? user.details.name
                : 'Not authenticated'
            }
        </h1>
    )
}