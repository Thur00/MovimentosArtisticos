"use client"

import styles from './page.module.css'
import Nav from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={styles.capa}>
      <p>
        Bem-vindo ao nosso site dedicado à <br />
        jornada pelos movimentos artísticos <br />
        que moldaram a história e <br />
        inspiram gerações.
      </p>
    </div>
  )
}
