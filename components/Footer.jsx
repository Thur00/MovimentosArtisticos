import Link from "next/link"

function Footer() {
    return (
        <footer className="footbox">
            <p className="text1">
                Grupo 1 - Desenvolvimento de Sistemas <br />
                SESI Senai 2023 <br />
                Professores Tupinambá e Leandro <br />
            </p>
            <div className="divisor"></div>
            <p className="text2">
                Projeto interdisciplinar <br />
                com Professor Victor Tosi <br />
                na matéria de Artes
            </p>


            <Link href="/paginas/sobreNos">
                <button className="footbotao">Sobre nós</button>
            </Link>

        </footer>
    )
}

export default Footer