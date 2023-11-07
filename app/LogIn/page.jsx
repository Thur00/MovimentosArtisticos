"use client"

import { UserLogado, UserLogadoProvider } from "@/context/UserLogado";
import InputArea from "@/components/Login";
import { useContext, useState } from "react";
import styles from "@/components/login.module.css"
import Link from "next/link";



function LogIn() {

    const [name, setName] = useState("");

    return (
        <UserLogado.Provider value={{ name }}>

            <div className="titulo">
                <h1>Log In</h1>
            </div>


            <div className={styles.inputBox}>
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

                <Link href="/" className={styles.inputBotao}>
                    <button>Cadastre-se</button>
                </Link>
            </div>

        </UserLogado.Provider>
    )
}

export default LogIn