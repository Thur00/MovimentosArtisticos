"use client"

import { UserLogado, UserLogadoProvider } from "@/context/UserLogado"
import Link from "next/link"
import { useContext } from "react";
import { Abril_Fatface } from "next/font/google";
import { Open_Sans } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const open = Open_Sans({
    subsets: ['latin'],
    weight: '400'
})

function Nav(props) {

    return (
        <>
            <UserLogadoProvider>
                <div className="headerTitulo">
                    <h1 className={abril.className}>
                        <Link href="/">MOVIMENTOS ARTISTICOS</Link>
                    </h1>
                    <div>
                        <h3 className={open.className}>
                            <Link href="/LogIn">Log In</Link>
                        </h3>
                    </div>
                </div>
                <nav className="navegacao">
                    <ul className={open.className}>
                        <li>
                            <Link href="/">Início</Link>
                        </li>
                        <li>
                            <Link href="/paginas/renascimento">Renascimento</Link>
                        </li>
                        <li>
                            <Link href="/paginas/barroco">Barroco</Link>
                        </li>
                        <li>
                            <Link href="/paginas/romantismo">Romantismo</Link>
                        </li>
                        <li>
                            <Link href="/paginas/neoclassicismo">Neoclassicismo</Link>
                        </li>
                        <li>
                            <Link href="/paginas/rococo">Rococó</Link>
                        </li>
                        <li>
                            <Link href="/paginas/realismo">Realismo</Link>
                        </li >
                        <li>
                            <Link href="/paginas/impressionismo">Impressionismo</Link>
                        </li>
                        <li>
                            <Link href="/paginas/abstracionismo">Abstracionismo</Link>
                        </li>
                    </ul>
                </nav>
            </UserLogadoProvider>
        </>

    )
}

export default Nav