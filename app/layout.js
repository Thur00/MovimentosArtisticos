import Nav from '@/components/Header'
import './globals.css'
import Footer from "@/components/Footer"
    
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
