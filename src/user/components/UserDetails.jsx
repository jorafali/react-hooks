import React from 'react';
import { useUser } from '../react-hooks';
// import {selectUserDetails} from '../state/selectors';

export default function UserDetails(props){
    const user = useUser();
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