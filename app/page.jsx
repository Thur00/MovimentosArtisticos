"use client"

import styles from './page.module.css'
import Nav from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.capa}>
        <p>
          Bem-vindo ao nosso site dedicado à <br />
          jornada pelos movimentos artísticos <br />
          que moldaram a história e <br />
          inspiram gerações.
        </p>
      </div>


      <div className={styles.navImg}>
        <div className={styles.boxGrande}>
          <Link href="/" className={styles.imgCumprido}>
            <img src="/background.jpg" alt="" />
          </Link>
          <Link href="/" className={styles.imgQuadrado}>
            <img src="/background.jpg" alt="" />
          </Link>
          <Link href="/" className={styles.imgQuadrado}>
            <img src="/background.jpg" alt="" />
          </Link>
        </div>

        <div className={styles.boxGrande}>
          <Link href="/" className={styles.imgQuadrado}>
            <img src="/background.jpg" alt="" />
          </Link>
          <Link href="/" className={styles.imgQuadrado}>
            <img src="/background.jpg" alt="" />
          </Link>
          <Link href="/" className={styles.imgCumprido}>
            <img src="/background.jpg" alt="" />
          </Link>
        </div>

        <div className={styles.boxPequeno}>
          <Link href="/" className={styles.imgEspecial}>
            <img src="/background.jpg" alt="" />
          </Link>
          <Link href="/" className={styles.imgEspecial}>
            <img src="/background.jpg" alt="" />
          </Link>
        </div>

      </div>
    </>
  )
}
