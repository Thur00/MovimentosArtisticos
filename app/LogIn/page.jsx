"use client"

import { UserLogado } from "@/context/UserLogado";
import styles from "./login.module.css"

import { useContext, useState } from "react"


function LogIn() {

    const usuario = useContext(UserLogado);

    const [nome, setNome] = useState()
    const [user, setUser] = useState()

    function UserName() {
        setUser(nome)
    }

    return (
        <div>
            <div className={styles.labelFloat}>
                <input type="text"
                    paceholder=""
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                    required />
                <label for="usuario">Nome</label>
            </div>

            <div className={styles.labelFloat}>
                <input type="text"
                    paceholder=""
                    required />
                <label for="usuario">Sobrenome</label>
            </div>

            <div className={styles.labelFloat}>
                <input type="number"
                    paceholder=""
                    required />
                <label id="userLabel" for="usuario">Idade</label>
            </div>
            <button onClick={UserName}>Cadastrar-se</button>
            <div>{user}</div>
        </div>
    )
}

export default LogIn