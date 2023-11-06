import Link from "next/link"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footbox}>
            <p className={styles.text1}>
                Grupo 1 - Desenvolvimento de Sistemas <br />
                SESI Senai 2023 <br />
                Professores Tupinambá e Leandro <br />
            </p>
            <div className={styles.divisor}></div>
            <p className={styles.text2}>
                Projeto interdisciplinar <br />
                com Professor Victor Tosi <br />
                na matéria de Artes
            </p>


            <Link href="/paginas/sobreNos">
                <button className={styles.footbotao}>Sobre nós</button>
            </Link>

        </footer>
    )
}

export default Footer