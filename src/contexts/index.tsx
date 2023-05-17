/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {UserProvider} from './UserContext';

export const Context = ({children}: {children: ReactNode}) => (
    <UserProvider>
        {children}
    </UserProvider>
);
