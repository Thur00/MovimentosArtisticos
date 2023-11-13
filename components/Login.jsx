"use client"

import { useUserContext } from "@/context/UserContext"
import styles from "./login.module.css"
import Link from "next/link"

function InputArea() {

    const { user } = useUserContext()

    return (
        <div className={styles.inputBox}>

            <div className={styles.labelFloat}>

                <label>Você está logado como: {user.name}</label>

            </div>
            <Link href="/paginas/index" className={styles.inputBotao}>
                <button type="submit">Entrar</button>
            </Link>

        </div>
    )
}

export default InputArea