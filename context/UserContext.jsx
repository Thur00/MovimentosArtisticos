'use client';
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export default function AppStore({ children }) {

    const { name, setName } = useState("Arthur")

    return (

        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
}