"use client"

import styles from "./page.module.css"
import Link from "next/link";
import { Abril_Fatface } from "next/font/google"
import InputArea from "@/components/Login";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})


function LogIn() {
    return (
        <>
            <div className="titulo">
                <h1 className={abril.className}>Log In</h1>
            </div>

            <InputArea />

        </>
    )
}

export default LogIn