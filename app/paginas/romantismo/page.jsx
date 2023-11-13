"use client"
import GaleriaImagens from "../../../components/ImgGaleria"
import { Abril_Fatface } from "next/font/google"



const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const ImageUrls = [
    { imgC: "/romantismo1.jpg", imgI: "/Romantismo-A ordenação de um cavaleiro.jpg", texto: "'A Ordenação de um Cavaleiro' de Edmund Blair Leighton é uma pintura vitoriana que representa um cavaleiro sendo armado por seu mestre antes de partir para uma jornada heroica. A cena é ricamente detalhada, com ênfase nas vestimentas medievais e armas. A pintura capta a nobreza e o idealismo da cavalaria, com uma atmosfera romântica e nostálgica. Leighton demonstra sua habilidade na representação de texturas e luz, criando uma cena que evoca um senso de honra e dever. É uma obra que encapsula o fascínio do período vitoriano pela história medieval e o ideal do cavaleiro." },
    { imgC: "/romantismo2.jpg", imgI: "/Romantismo -A alma da rosa linda mulher cheirando a flor.jpg", texto: "'A Alma da Rosa' é uma pintura que retrata uma linda mulher cheirando uma flor. A obra exala sensualidade e delicadeza, com detalhes minuciosos na representação da flor e da mulher. A combinação de cores suaves cria uma atmosfera romântica e misteriosa. A pintura é uma celebração da beleza da natureza e da feminilidade, capturando a fragrância e a essência da rosa na mulher. É uma representação artística da ligação entre a humanidade e a natureza." },
    { imgC: "/romantismo3.jpg", imgI: "/Romantismo-Miranda, a tempestade.jpg", texto: "A pintura 'Miranda e a Tempestade' captura a essência do famoso drama de William Shakespeare. Com traços vívidos e cores impressionantes, a obra retrata Miranda, uma jovem mulher que vive em uma ilha deserta com seu pai, Prospero. Ao fundo, uma tempestade imponente simboliza a ira de Prospero, que busca vingança contra seus inimigos, trazendo-os para a ilha. A pintura transmite uma atmosfera de mistério e poder, refletindo os temas de traição, redenção e transformação presentes na peça. É uma representação visual marcante da complexidade humana e dos desafios enfrentados pelos personagens." },
    { imgC: "/romantismo4.jpg", imgI: "/romantismo-iracema.webp", texto: "A pintura 'Iracema' retrata a personagem homônima do romance de José de Alencar. A obra captura a essência da protagonista indígena, destacando sua beleza e força. Iracema é retratada em um ambiente natural, rodeada por paisagens exuberantes da floresta e do mar. A pintura transmite uma sensação de serenidade e conexão com a natureza, refletindo a relação profunda da personagem com sua terra natal. A expressão serena de Iracema revela sua sabedoria e resiliência diante dos desafios que enfrenta em sua jornada. É uma representação visualmente impressionante da cultura e da identidade indígena." },
    { imgC: "/romantismo5.jpg", imgI: "/Romantismo-Goethe na Itália.jpg", texto: "'Goethe na Campagna Romana' é uma pintura de Johann Heinrich Wilhelm Tischbein que retrata o escritor Johann Wolfgang von Goethe durante suas viagens pela Itália. A obra, concluída em 1788, mostra Goethe contemplando a paisagem com ruínas romanas ao fundo. A pintura é uma mistura eclética de elementos clássicos e neoclássicos, refletindo a admiração do artista pela antiguidade. A obra é considerada um ícone da pintura nacional alemã e moldou a imagem de Goethe como personificação do ideal humanista clássico da Alemanha. Atualmente, está abrigada no Museu Städel em Frankfurt." },
    { imgC: "/romantismo6.jpg", imgI: "/romantismo-batalha.jpg", texto: "'A Batalha do Avaí' é uma famosa pintura de Pedro Américo, concluída em 1877, que retrata uma cena da Guerra do Paraguai. A obra representa um momento histórico importante da batalha entre as forças brasileiras e paraguaias. Américo demonstra grande habilidade ao retratar a ação e a tensão do campo de batalha, além de capturar a bravura dos soldados. A pintura é conhecida por sua precisão histórica e detalhes minuciosos, e é considerada uma das obras mais emblemáticas da arte brasileira. 'A Batalha do Avaí' é um testemunho artístico da história militar do Brasil." }
]


function Romantismo() {
    return (
        <main className={abril.className}>
            <div className="titulo">
                <h1>Romantismo</h1>

                <h3>séc. XVIII - XIX</h3>
            </div>
            <br></br>
            <div className="corpo">
                <p className={open.className}>O Romantismo, um movimento cultural que varreu a Europa no final do século XVIII e início do XIX, é caracterizado por uma profunda ênfase na expressão emocional, na individualidade e na busca pela liberdade artística. Foi uma reação ao Iluminismo e ao racionalismo da época, com ênfase na intuição e na imaginação. Neste período, escritores, artistas e músicos buscaram inspiração na natureza, nas emoções humanas e nas histórias de amor, criando obras que evocam paixões e sentimentos profundos. O Romantismo não apenas influenciou a literatura e a arte, mas também teve um impacto duradouro na política e na cultura, moldando o pensamento e a criatividade das gerações futuras.</p>
            </div>
            <div className="titgal">
                <h2>Galeria de Imagens</h2>
                <GaleriaImagens
                    ImageUrls={ImageUrls} />
            </div>
            <br />

            <div className="video">
                <h2>Saiba mais sobre o Movimento!</h2>
            </div>
            <div className="vids">
                <iframe
                    width="600"
                    height="300"
                    src="/videos/romantismoEdit.mp4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </main>
    )
}
export default Romantismo