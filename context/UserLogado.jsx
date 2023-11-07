import { UserName } from "@/components/Login";
import { createContext, useState } from "react";

export const UserLogado = createContext(null)

export const UserLogadoProvider = ({ children }) => {
    const [name, setName] = useState(UserName)

    return (
        <UserLogado.Provider value={{ name, setName }}>
            {children}
        </UserLogado.Provider>
    )
}   