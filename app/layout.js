import Nav from '@/components/Header'
import './globals.css'
import Footer from "@/components/Footer"
import { Abril_Fatface } from "next/font/google"
import { Open_Sans } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const open = Open_Sans({
    subsets: ['latin'],
    weight: '400'
})
    
export const metadata = {
    title: 'Movimentos Artisticos',
    description: 'Feito pelo Grupo 1',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    )
}
