import { UserLogado, UserLogadoProvider } from "@/context/UserLogado"
import styles from "./Header.module.css"
import Link from "next/link"

function Nav(props) {
    const UserLogadoCtx = useContext(UserLogado);

    return (
        <>
            <UserLogadoProvider>
                <div className={styles.titulo}>
                    <h1>MOVIMENTOS ARTISTICOS</h1>
                    <h3>Olá {UserLogadoCtx.name}</h3>
                </div>
                <nav>
                    <ul className={styles.navegacao}>
                        <li>
                            <Link href="">Renascimento</Link>
                        </li>
                        <li>
                            <Link href="">Barroco</Link>
                        </li>
                        <li>
                            <Link href="">Romantismo</Link>
                        </li>
                        <li>
                            <Link href="">Neoclassicismo</Link>
                        </li>
                        <li>
                            <Link href="">Rococó</Link>
                        </li>
                        <li>
                            <Link href="">Realismo</Link>
                        </li>
                        <li>
                            <Link href="">Impressionismo</Link>
                        </li>
                        <li>
                            <Link href="">Abstracionismo</Link>
                        </li>
                    </ul>
                </nav>
            </UserLogadoProvider>
        </>

    )
}

export default Nav