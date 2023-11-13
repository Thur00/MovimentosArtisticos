"use client"

import Link from "next/link"
import { cloneElement, useContext, useState } from "react";
import { Abril_Fatface } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { useUserContext } from "@/context/UserContext";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const open = Open_Sans({
    subsets: ['latin'],
    weight: '400'
})

function Nav(props) {

    const { user } = useUserContext()

    const menuShow = () => {

        let menuMobile = document.querySelector('.mobile-menu')

        if (menuMobile.classList.contains('open')) {

            menuMobile.classList.remove('open')

            document.querySelector('.icon').src = "/menuIcon.png"

        }

        else {

            menuMobile.classList.add('open')

            document.querySelector('.icon').src = "/menuIcon.png"

        }

    }

    const closeMenu = () => {
        let menuMobile = document.querySelector('.mobile-menu')

        if (menuMobile.classList.contains('open')) {

            menuMobile.classList.remove('open')

        }
    }

    return (
        <>
            <div className="headerTitulo">
                <h1 className={abril.className}>
                    <Link href="/paginas/index">MOVIMENTOS ARTÍSTICOS</Link>
                </h1>
                <div>
                    <h3 className={open.className}>
                        <Link href="">Ola, {user.name}</Link>
                    </h3>
                </div>
            </div>
            <nav className="navegacao">
                <h3 className={open.className}>
                    <Link href="">Ola, {user.name}</Link>
                </h3>

                <div className="nav-header">

                    <ul className={open.className}>
                        <li>
                            <Link href="/paginas/index">Início</Link>
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

                </div>

                <div className="mobile-menu-icon">

                    <button onClick={menuShow} className="btn-icon"><img className="icon" src="/menuIcon.png" alt="Menu Icon" /></button>

                </div>
            </nav>

            <div className="mobile-menu">

                <div className="headerTitulo">
                    <h1 className={abril.className}>
                        <Link href="/paginas/index">MOVIMENTOS ARTÍSTICOS</Link>
                    </h1>
                </div>
                <div className="mobile-menu-icon">

                    <button onClick={menuShow} className="btn-icon"><img className="icon" src="/menuIcon-close.png" alt="Menu Icon" /></button>

                </div>
                <ul className={open.className}>
                    <li>
                        <Link href="/paginas/index" onClick={closeMenu}>Início</Link>
                    </li>
                    <li>
                        <Link href="/paginas/renascimento" onClick={closeMenu}>Renascimento</Link>
                    </li>
                    <li>
                        <Link href="/paginas/barroco" onClick={closeMenu}>Barroco</Link>
                    </li>
                    <li>
                        <Link href="/paginas/romantismo" onClick={closeMenu}>Romantismo</Link>
                    </li>
                    <li>
                        <Link href="/paginas/neoclassicismo" onClick={closeMenu}>Neoclassicismo</Link>
                    </li>
                    <li>
                        <Link href="/paginas/rococo" onClick={closeMenu}>Rococó</Link>
                    </li>
                    <li>
                        <Link href="/paginas/realismo" onClick={closeMenu}>Realismo</Link>
                    </li >
                    <li>
                        <Link href="/paginas/impressionismo" onClick={closeMenu}>Impressionismo</Link>
                    </li>
                    <li>
                        <Link href="/paginas/abstracionismo" onClick={closeMenu}>Abstracionismo</Link>
                    </li>
                </ul>

            </div>
        </>

    )
}

export default Nav