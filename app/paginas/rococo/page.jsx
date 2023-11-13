"use client"
import GaleriaImagens from "../../../components/ImgGaleria"
import { Abril_Fatface } from "next/font/google"

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const ImageUrls = [
    { imgC: "/rococo1.jpg", imgI: "/Rococó-O balanço.jpg", texto: "'O Balanço' é uma pintura rococó de Jean Honoré Fragonard, um famoso pintor francês. A obra retrata uma cena idílica de uma jovem em um balanço, enquanto um voyeur a observa escondido nos arbustos. A pintura é um exemplo do estilo característico de Fragonard, com sua ênfase em temas domésticos e sentimentais. Os tons suaves e a iluminação delicada adicionam um toque de erotismo à cena. 'O Balanço' é uma representação encantadora da vida bucólica e da elegância do período rococó." },
    { imgC: "/rococo2.jpg", imgI: "/rococo-a leitora-.jpg", texto: "'A Leitora' é uma pintura de Jean-Baptiste-Siméon Chardin que retrata uma mulher imersa em sua leitura. A composição minimalista destaca a figura central, com sua expressão tranquila e postura recolhida. A iluminação sutil realça os detalhes do rosto da leitora, enquanto as pinceladas suaves criam uma atmosfera serena. A escolha de cores neutras e terrosas transmite uma sensação de calma e introspecção. A obra capta a quietude e a concentração da experiência de leitura, convidando o espectador a compartilhar desse momento íntimo." },
    { imgC: "/rococo3.jpg", imgI: "/rococo-madamepompador.jpg", texto: "A obra 'Madame de Pompadour em seu estudo' é um exemplo do movimento artístico Rococó, que floresceu na Europa entre os séculos XVIII e XIX. O quadro retrata a amante do rei francês Luís XV em um ambiente íntimo e elegante, rodeada de livros e objetos de arte refinados. A técnica utilizada por Maurice-Quentin de La Tour destaca a delicadeza e a sensualidade da figura feminina, com uma paleta de cores suaves e luminosas. A obra representa a influência da nobreza na arte Rococó e a valorização da beleza e do luxo em contraposição aos valores religiosos e morais do Barroco. A pintura é considerada uma das obras-primas do artista e um ícone do Rococó francês." },
    { imgC: "/rococo4.jpg", imgI: "/Rococó-Triúnfo de aurora.jpg", texto: "'Triunfo de Aurora' é uma obra-prima do famoso pintor francês Jean Fragonard. Ela retrata uma cena idílica e encantadora, característica do estilo rococó. A pintura apresenta a deusa Aurora, personificação da aurora, voando em sua carruagem celestial, cercada por um grupo de cupidos. As cores vibrantes e agradáveis, combinadas com os detalhes delicados e a atmosfera romântica, criam uma sensação de harmonia e beleza. Fragonard capturou perfeitamente a elegância e a exuberância típicas do período rococó nesta obra." },
    { imgC: "/rococo5.jpg", imgI: "/Rococó-Pesca.jpg", texto: "'A Pesca' é uma obra do artista francês François Boucher, que retrata um grupo de pescadores em um ambiente campestre. A pintura é composta por uma paleta de cores suaves e delicadas, que conferem uma atmosfera bucólica e tranquila à cena. Os personagens são retratados em poses naturais, com destaque para a figura feminina à direita da tela, que segura um cesto com peixes. A obra é um exemplo do estilo rococó, caracterizado pela elegância, sofisticação e leveza. Em resumo, 'A Pesca' é uma pintura encantadora que transmite a beleza da natureza e a simplicidade da vida rural." },
    { imgC: "/rococo6.jpg", imgI: "/rococo-the meeting.jpg", texto: "A obra 'The Progress of Love: The Meeting' é um dos quadros mais famosos de Jean-Honoré Fragonard. Pintado em 1771, faz parte de uma série de pinturas intitulada 'The Progress of Love'. A obra retrata um encontro romântico entre um casal em um jardim exuberante. Os tons suaves e vibrantes combinados com os detalhes delicados criam uma atmosfera romântica e encantadora. Fragonard utiliza pinceladas soltas e uma abordagem mais descontraída, característica do estilo rococó. A pintura é um exemplo da elegância e sensualidade que permeiam a arte rococó, com uma ênfase na beleza e no amor." },

]


function Rococo() {
    return (
        <main className={abril.className}>
            <div className="titulo">
                <h1>Rococó</h1>

                <h3>séc. XVIII - XIX</h3>
            </div>
            <br></br>
            <div className="corpo">
                <p >O Rococó, um estilo artístico que floresceu na Europa nos séculos XVIII e XIX, representa uma reviravolta encantadora na história da arte e do design. Marcado por sua ênfase na delicadeza, elegância e ornamentação, o Rococó emerge como uma reação ao formalismo rígido do Barroco. Com suas cores suaves, curvas graciosas e detalhes intrincados, o Rococó evoca uma sensação de leveza e frivolidade. Neste período, artistas, arquitetos e artesãos exploraram a beleza e a graciosidade em uma variedade de formas, criando ambientes que cativam os sentidos.</p>
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
                <iframe width="600" height="300" src="https://www.youtube.com/embed/SRxcTxR0iZM?si=r40C7NtDiPG30NCX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </main>
    )
}
export default Rococo