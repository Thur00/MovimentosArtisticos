"use client"
import GaleriaImagens from "../../../components/ImgGaleria"
import { Abril_Fatface } from "next/font/google"


const abril= Abril_Fatface({
    subsets:['latin'],
weight:'400'
})

const ImageUrls = [
    {imgC: "/impressionismo1.jpg",imgI:"/impressionismo-nenúnfares e a ponte japonesa.jpg", texto: "'Quadro Nenúfares e a ponte japonesa' é uma obra-prima do famoso pintor impressionista Claude Monet. Nesta pintura, Monet retrata seu jardim em Giverny, com sua icônica ponte japonesa e a serenidade dos nenúfares flutuando na água. Os traços soltos e as pinceladas rápidas do artista criam uma atmosfera de leveza e tranquilidade. As cores suaves e vibrantes trazem vida à cena, enquanto a representação do reflexo na água adiciona um toque de mistério. A obra transmite uma sensação de harmonia e paz, convidando o espectador a se perder na beleza da natureza."},
    {imgC: "/impressionismo2.jpg",imgI:"/Impressionismo-Noite estrelada.jpg", texto: "'Noite Estrelada' é uma pintura icônica de Vincent van Gogh que retrata uma paisagem noturna estonteante. A obra apresenta um céu estrelado com uma lua crescente brilhante e uma constelação em destaque. As cores vibrantes e a pincelada expressiva conferem um sentido de movimento e energia à pintura. A presença de um pequeno vilarejo com casas e uma igreja adiciona um toque humano à cena. No geral, 'Noite Estrelada' cativa os espectadores com sua representação única do céu noturno e sua interpretação artística e emotiva da natureza."},
    {imgC: "/impressionismo3.jpg",imgI:"/impressionismo - A aula de danças.jpg",  texto: "'A Aula de Dança' é uma obra icônica que retrata um momento de movimento e harmonia. A composição é marcada pela elegância das bailarinas, que se destacam em meio ao ambiente clássico e refinado. As figuras femininas, com suas vestimentas delicadas e posturas graciosas, transmitem uma sensação de leveza e fluidez. A paleta de cores suaves e a iluminação suave contribuem para criar uma atmosfera serena e encantadora. É uma representação encantadora do mundo da dança e da beleza da expressão corporal."},
    {imgC: "/impressionismo4.jpg",imgI:"/impressionismo-Quadro natureza morta com maçãs.jpg",  texto: "'Natureza Morta com Maçãs' é uma obra do artista Paul Cézanne que retrata uma composição de frutas em uma mesa. As maçãs são representadas com detalhes realistas, revelando a habilidade técnica do artista. Cézanne utiliza cores vibrantes e pinceladas soltas para criar uma sensação de volume e textura nas frutas. A pintura transmite uma atmosfera tranquila e serena, convidando o espectador a apreciar a simplicidade e beleza da natureza. A obra de Cézanne é um exemplo do seu estilo único e revolucionário, que influenciou muitos artistas posteriores."},
    {imgC: "/impressionismo5.jpg",imgI:"/impressionismo-a leitura.jpg",  texto: "'A Leitura' de Pierre-Auguste Renoir é uma obra encantadora que retrata duas crianças imersas na atividade da leitura. O artista captura a cena com sua técnica impressionista, usando pinceladas suaves e delicadas. As roupas das crianças são representadas em um belo tom azul noturno, contrastando com suas peles claras e cabelos loiros. A pintura transmite uma sensação de tranquilidade e concentração, convidando o espectador a apreciar o poder da leitura e a inocência da infância. Renoir, um dos principais pintores impressionistas, celebra a beleza e a simplicidade da vida cotidiana em sua obra."},
    {imgC: "/impressionismo6.jpg",imgI:"/impressionismo-o berço.jpg",  texto: "'O Berço' é uma pintura icônica que retrata a ternura e a delicadeza do momento da maternidade. A obra apresenta uma mãe amorosa inclinada sobre o berço de seu bebê, em um ambiente sereno e acolhedor. As pinceladas suaves e os tons suaves utilizados pelo artista transmitem uma sensação de tranquilidade e calma. A luz suave que ilumina a cena realça os detalhes da pintura, como os tecidos macios e os traços sutis no rosto da mãe. A imagem captura a intimidade e a conexão emocional entre mãe e filho, convidando o espectador a compartilhar desse momento de ternura e serenidade."}
]

function Impressionismo(){
    return(
    <main className={abril.className}>
        <div className="titulo">
<h1>Impressionismo</h1>

<h3>séc. XIX</h3>
        </div>
        <br></br>
        <div className="corpo">
            <p className={open.className}>O Impressionismo, um movimento artístico revolucionário que emergiu no final do século XIX, representa uma notável mudança na forma como a arte visual é percebida e representada. Diferentemente das convenções artísticas anteriores, os impressionistas buscavam capturar a efemeridade das experiências visuais e emocionais, em vez de se prender a detalhes precisos. Artistas como Claude Monet, Edgar Degas e Pierre-Auguste Renoir desafiaram as normas estabelecidas ao pintar cenas ao ar livre, com ênfase na luz, na cor e na atmosfera. Essa abordagem inovadora resultou em pinceladas soltas e cores vibrantes, criando obras que parecem efêmeras e em constante transformação. O Impressionismo não apenas redefiniu a arte, mas também influenciou as gerações subsequentes, marcando um ponto de partida para a arte moderna.</p>
        </div>
        <div className="titgal">
            <h2>Galeria de Imagens</h2>
            <GaleriaImagens
             ImageUrls={ImageUrls} />
        </div>
        <br/>
        
        <div className="video">
            <h2>Saiba mais sobre o Movimento!</h2>
        </div>
        <div className="vids">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/P4BmEwdJZvc?si=OEgZvJyXFXqsuiJm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </main>
    )
}
export default Impressionismo