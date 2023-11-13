'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export default function AppStore({ children }) {
    const [user, setUser] = useState({
        id: 1,
        name: 'Artista',
        token: '3DJ39#DFLLDF58$LKDFO#O3N4OO',
    });

    const changeUser = (newUser) => {
        setUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, changeUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}