'use client'
import GaleriaImagens from "@/components/ImgGaleria";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})

const ImageUrls = [
    { imgC: "/Barroco1.jpg", imgI: "/Barroco-A coroação da virgem.jfif", texto: "'A Coroação da Virgem', de Fra Angelico, é uma pintura renascentista que retrata a Virgem Maria sendo coroada por Cristo no céu. A composição apresenta uma cena celestial com anjos e santos. As cores suaves e a atenção aos detalhes conferem à obra uma qualidade serena e divina. O simbolismo religioso é evidente, destacando a importância da Virgem Maria na fé cristã. Esta pintura é uma expressão da devoção e espiritualidade renascentista." },
    { imgC: "/Barroco2.jpg", imgI: "/Barroco-As meninas.jpg", texto: "'As Meninas' de Diego Velázquez é uma obra-prima do século XVII que retrata as infantes espanholas Margarida e Maria Teresa. A pintura é notável pela complexidade da composição, incluindo um autorretrato de Velázquez no espelho. A habilidade técnica do artista é evidente nas texturas e detalhes dos tecidos e dos rostos. Velázquez desafia as convenções ao criar uma cena que parece ser uma observação casual do cotidiano da corte. A obra é uma reflexão sobre a natureza da representação artística e um dos exemplos mais icônicos do barroco espanhol." },
    { imgC: "/Barroco3.jpg", imgI: "/Barroco-O êxtase da santa teresa.jpg", texto: "'O êxtase de Santa Teresa', uma escultura magistral de Gian Lorenzo Bernini, representa Santa Teresa de Ávila em um momento místico. A figura da santa parece estar em êxtase enquanto um anjo com uma flecha divina a toca. A escultura é dinâmica e expressiva, capturando a intensidade do momento religioso. Bernini habilmente utiliza a luz e sombra para criar um efeito teatral. Esta obra é uma demonstração impressionante da capacidade de Bernini de dar vida ao divino na escultura barroca." },
    { imgC: "/Barroco4.jpg", imgI: "/Barroco-Passos da paixao.jpg", texto: "'Os Passos da Paixão' é uma série de esculturas de Aleijadinho que retrata a Via Sacra. Cada escultura é ricamente detalhada, mostrando o sofrimento de Jesus durante sua crucificação. As obras, esculpidas em pedra-sabão, são marcantes pelo realismo das expressões faciais e pela habilidade técnica de Aleijadinho. Elas são uma representação poderosa da devoção e do talento artístico do século XVIII no Brasil colonial." },
    { imgC: "/Barroco5.jpg", imgI: "/Barroco-funcionarios de amostragem de amsterdam.jpg", texto: "Os 'Funcionários de Amostragem da Guilda Drapers de Amsterdã' é uma pintura do artista holandês Rembrandt, criada em 1662. A obra retrata funcionários de uma guilda de tecelões examinando e medindo tecidos. Rembrandt usa uma iluminação dramática e detalhes minuciosos para destacar as figuras em um ambiente escuro. A obra revela a mestria do artista em capturar a humanidade e a atmosfera de uma cena cotidiana, enquanto demonstra seu talento para o jogo de luz e sombra. 'Os Funcionários de Amostragem da Guilda Drapers de Amsterdã' é uma representação envolvente da vida na época e da habilidade artística de Rembrandt." },
    { imgC: "/Barroco6.jpg", imgI: "/Barroco-profetas.jpg", texto: "O 'Conjunto de Profetas' é uma notável obra de escultura barroca criada por Aleijadinho no século XVIII, localizada no Santuário do Bom Jesus de Matosinhos, em Congonhas, Minas Gerais, Brasil. A obra inclui 12 esculturas de profetas esculpidas em pedra-sabão, cada uma representando um profeta do Antigo Testamento. Aleijadinho demonstra habilidades extraordinárias na expressão das feições, vestimentas e posturas dos profetas, conferindo-lhes realismo e intensidade emocional. Esse conjunto é um exemplo da maestria de Aleijadinho na escultura barroca e é considerado uma das maiores realizações da arte colonial brasileira." }
]

function Barroco() {
    return (
        <main className={abril.className}>

            <div className="titulo">
                <h1> Barroco </h1>
                <h3> séc. XVII - XVIII </h3>
            </div>

            <div className="corpo">
                <p> O movimento barroco, que floresceu principalmente nos séculos XVII e XVIII, representa um dos períodos mais fascinantes e ricos da
                    história da arte e da cultura. Marcado por sua exuberância, teatralidade e exploração da dualidade humana, o Barroco transcendeu
                    fronteiras geográficas e disciplinas artísticas, deixando um legado duradouro que influenciou a arquitetura, pintura, literatura e
                    música. </p>
            </div>

            <div>
                <h2 className="titgal"> Galeria de imagens </h2>
                <GaleriaImagens ImageUrls={ImageUrls} />
            </div>

            <div className="video">
                <h2> Saiba mais sobre o movimento! </h2>
            </div>

            <div className="vids">
                <iframe width="600" height="300" src="https://www.youtube.com/embed/yvpUSI_TzV4?si=b995GPGvGsf2vzHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </main>
    )
}

export default Barroco;