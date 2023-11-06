'use client'
import GaleriaImagens from "@/components/GaleriaImagens";
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

const ImageUrls = [
    {img: " ", texto: "Descrita como uma das obras mais famosas de Coubert, ‘O Homem Desesperado’ foi pintada em 1845. A pintura retrata um homem frontalmente, enquadrado em uma moldura apertada, transmitindo uma sensação quase claustrofóbica. A obra é influenciada pelas vanguardas europeias, movimentando o fim do século XIX. Com contornos e sombras meticulosamente desenhados, a pintura revela a angústia e desespero do personagem. Através de sua expressão facial e composição visual, Coubert transmite emoções profundas e provoca reflexões sobre a condição humana."},
    {img: " ", texto: "‘Enterro em Ornans’ é uma obra do famoso pintor francês Gustave Courbet, concluída em 1850. A pintura retrata um cortejo fúnebre na cidade de Ornans, na França, e é considerada uma das primeiras obras realistas da história da arte. Courbet rompe com a tradição ao retratar pessoas comuns em um evento comum, em vez dos temas nobres e grandiosos típicos da época. A pintura transmite uma sensação de melancolia e sobriedade, com tons sombrios e uma composição naturalista. Ela desafia os padrões estéticos da época e é um marco na história da arte."},
    {img: " ", texto: "‘Colhedores Descansando’ é uma obra do renomado pintor impressionista francês Pierre-Auguste Renoir. A pintura retrata um grupo de colhedores descansando em um campo após um longo dia de trabalho. As pinceladas soltas e a paleta de cores vibrantes caracterizam o estilo impressionista de Renoir, que busca capturar a luminosidade e a atmosfera do momento. A composição da obra é equilibrada, com os colhedores dispostos de forma harmoniosa no cenário campestre. A obra transmite uma sensação de tranquilidade e serenidade, convidando o observador a apreciar a simplicidade e a beleza da vida no campo."},
    {img: " ", texto: "‘The Wheat Sifters’ é uma obra de arte que retrata uma cena cotidiana de mulheres peneirando trigo. Pintado por Gustave Courbet, o quadro apresenta uma atmosfera calma e serena, com as mulheres concentradas em seu trabalho. As pinceladas soltas e as cores suaves utilizadas pelo artista contribuem para a sensação de tranquilidade e harmonia na cena. A composição cuidadosamente equilibrada e os detalhes realistas adicionam profundidade e vida à pintura. 'The Wheat Sifters' é um exemplo cativante do talento de Courbet em capturar a beleza nas atividades diárias."},
    {img: " ", texto: "Os Quebradores de Pedras, pintura de Gustave Courbet, retrata dois homens idosos quebrando pedras. A obra é marcada pela representação realista e detalhada dos personagens e do cenário. Os traços precisos e as cores sóbrias contribuem para transmitir a dureza e a monotonia do trabalho dos quebradores de pedras. Courbet apresenta uma crítica social ao expor a condição difícil desses trabalhadores e sua falta de perspectivas. A pintura revela a habilidade do artista em capturar a realidade cotidiana e transmitir emoções através da representação visual."},
    {img: " ", texto: " "}
]

function Realismo(){
    return(
        <main className={abril.className}>

        <div className="titulo">
            <h1> Realismo </h1>
            <h3> séc. XIX </h3>
        </div>

        <div className="corpo">
            <p className={open.className} > O Realismo, um movimento artístico e literário que surgiu no século XIX, representa uma significativa mudança de paradigma 
                na história da arte e da literatura. Em contraste com os excessos estilísticos do Romantismo, o Realismo se concentrou na 
                representação fiel da vida cotidiana, sem romantizações ou idealizações. Este movimento enfatizou a observação detalhada e 
                crua da realidade, destacando questões sociais, políticas e econômicas. Escritores como Gustave Flaubert e artistas como 
                Gustave Courbet buscaram retratar a verdade, muitas vezes abordando temas como as lutas da classe trabalhadora e as condições 
                sociais desafiadoras da época. O Realismo não apenas influenciou a estética, mas também serviu como um espelho da sociedade, 
                proporcionando uma crítica direta e sincera. </p>
        </div>

        <div>
            <h2 className="titgal"> Galeria de imagens </h2>
            <GaleriaImagens ImageUrls={ImageUrls} />
        </div>

        <div className="video">
            <h2> Saiba mais sobre o movimento! </h2>
        </div>

        <div className="vids">
        <iframe 
            width="600" 
            height="300" 
            src="https://www.youtube.com/embed/1PTs1mqrToM?si=ovxU3-W9VHn6oXsB" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
        </div>

        </main>
    )
}

export default Realismo;