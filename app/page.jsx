"use client"

import styles from './page.module.css'
import Link from 'next/link'
import { Abril_Fatface } from "next/font/google";
import { Open_Sans } from "next/font/google";
import Nav from '@/components/Header';

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const open = Open_Sans({
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
    return (
        <>
            <div className={styles.capa}>
                <p className={abril.className}>
                    Venha conhecer mais sobre os movimentos <br />
                    artísticos que marcaram a história<br />
                    e inspiram gerações
                </p>
            </div>


            <div className={styles.navImg}>
                <div className={styles.boxGrande}>
                    <Link href="/paginas/renascimento" className={styles.imgCumprido}>
                        <img src="/index/renascimento.jpg" alt="" />
                        <p className={abril.className}>Renascimento</p>
                    </Link>
                    <Link href="/paginas/rococo" className={styles.imgQuadrado}>
                        <img src="/index/rococo.jpg" alt="" />
                        <p className={abril.className}>Rococó</p>
                    </Link>
                    <Link href="/paginas/realismo" className={styles.imgQuadrado}>
                        <img src="/index/realismo.jpg" alt="" />
                        <p className={abril.className}>Realismo</p>
                    </Link>
                </div>

                <div className={styles.boxGrande}>
                    <Link href="/paginas/barroco" className={styles.imgQuadrado}>
                        <img src="/index/barroco.jpg" alt="" />
                        <p className={abril.className}>Barroco</p>
                    </Link>
                    <Link href="/paginas/romantismo" className={styles.imgQuadrado}>
                        <img src="/index/romantismo.jpg" alt="" />
                        <p className={abril.className}>Romantismo</p>
                    </Link>
                    <Link href="/paginas/impressionismo" className={styles.imgCumprido}>
                        <img src="/index/impressionismo.jpg" alt="" />
                        <p className={abril.className}>Impressionismo</p>
                    </Link>
                </div>

                <div className={styles.boxPequeno}>
                    <Link href="/paginas/neoclassicismo" className={styles.imgEspecial}>
                        <img src="/index/neoclassicismo.jpg" alt="" />
                        <p className={abril.className}>Neoclassicismo</p>
                    </Link>
                    <Link href="/paginas/abstracionismo" className={styles.imgEspecial}>
                        <img src="/index/abstracionismo.jpg" alt="" />
                        <p className={abril.className}>Abstracionismo</p>
                    </Link>
                </div>

            </div>
        </>
    )
}