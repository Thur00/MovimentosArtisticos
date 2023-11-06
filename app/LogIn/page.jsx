"use client"

import { UserLogado, UserLogadoProvider } from "@/context/UserLogado";
import InputArea from "@/components/InputArea";
import { useContext, useState } from "react";
import styles from "@/components/login.module.css"
import Link from "next/link";



function LogIn() {

    const [name, setName] = useState("");

    return (
        <UserLogado.Provider value={{ name }}>
            <div className={styles.labelFloat}>
                <input type="text"
                    paceholder=""
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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

            <Link href="/paginas/sobreNos">
                <button>Cadastrar-se</button>
            </Link>

        </UserLogado.Provider>
    )
}

export default LogIn