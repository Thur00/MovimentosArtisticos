'use client'

import Integrante from '@/components/Integrantes'
import styles from '@/components/integrante.module.css'
import { UserLogado } from '@/context/UserContext';
import { useContext } from 'react';
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const ImageUrls = [
    { img: "/integrantes/Sofia.jpg", nome: "Sofia Caun", idade: "17", funcao: "Vice-Líder / Programadora" },
    { img: "/integrantes/AnaBeatriz.jpg", nome: "Ana Beatriz", idade: "17", funcao: "Programadora" },
    { img: "/integrantes/Isabeli.jpg", nome: "Isabeli D'grande", idade: "16", funcao: "Roteirista" },
    { img: "/integrantes/Arthur.jpg", nome: "Arthur Santos", idade: "17", funcao: "Líder / Programador" },
    { img: "/integrantes/Gustavo.jpg", nome: "Gustavo Silva", idade: "16", funcao: "Editor" },
    { img: "/integrantes/Yran.jpg", nome: "Yran Spresson", idade: "16", funcao: "Editor" }
]

function SobreNos() {

    const UserLogadoCtx = useContext(UserLogado)

    return (
        <main className={abril.className}>
            <div className="titulo">
                <h1>Sobre nós</h1>
            </div>

            <div>{UserLogadoCtx}</div>

            
            <div className={styles.container}>
                <Integrante ImageUrls={ImageUrls} />
            </div>
        </main>


    )
}

export default SobreNos