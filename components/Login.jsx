import { UserLogado } from "@/context/UserLogado"
import { useContext, useState } from "react"
import styles from "./login.module.css"

export function UserName() {
    if (InputArea.name !== null) {
        return InputArea.name
    }
    else {
        return PROFESSORLEANDRO
    }
}


function InputArea() {
    const UserLogadoCtx = useContext(UserLogado)

    const [name, setName] = useState("")


    return (
        <>
            <div>{UserLogadoCtx.name}</div>
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
            <button type="submit" onClick={UserName}>Cadastrar-se</button>
        </>
    )
}

export default InputArea