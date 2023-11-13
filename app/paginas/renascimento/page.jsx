"use client"
import GaleriaImagens from "../../../components/ImgGaleria"
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

const ImageUrls = [
    { imgC: "/Renascimento-A criação de adão2.jpg", imgI: "/renascimento- criação do adao.jpg", texto: "'A Criação de Adão' de Michelangelo é uma icônica parte do afresco no teto da Capela Sistina. Nela, Deus estende a mão para Adão, criando um toque divino. A composição simboliza a criação da humanidade e é notável pela tensão e proximidade entre as mãos de Deus e Adão. A atmosfera celestial e o poder do toque são impressionantemente representados, tornando esta obra uma das mais reconhecidas e admiradas na história da arte." },
    { imgC: "/Renascimento-A escola de Atenas2.jpg", imgI: "/Renascimento-A escola de Atenas.jpg", texto: "'A Escola de Atenas' de Rafael é uma obra-prima renascentista que retrata filósofos clássicos em um espaço arquitetônico grandioso. Notáveis figuras como Platão e Aristóteles estão no centro da composição, simbolizando a busca pelo conhecimento e a filosofia. A perspectiva e a arquitetura são impressionantes, com detalhes arquitetônicos clássicos e uma representação impressionante da profundidade. Esta pintura é um tributo à filosofia e à erudição da Antiguidade, destacando o ideal renascentista de harmonia e sabedoria." },
    { imgC: "/Renascimento-A ultima ceia2.jpg", imgI: "/Renascimento-A ultima ceia.jpg", texto: "'A Última Ceia' de Leonardo da Vinci é uma obra-prima renascentista que retrata a Última Ceia de Jesus e seus 12 apóstolos. A composição simétrica destaca Jesus no centro, enquanto as expressões faciais revelam uma gama de emoções. A iluminação e a perspectiva habilmente utilizadas dão profundidade à cena. Detalhes simbólicos, como o cálice e os pães, são incorporados. Apesar dos danos ao longo dos anos, a pintura mantém seu impacto histórico e influência duradoura na história da arte." },
    { imgC: "/renascimento4.jpg", imgI: "/renascimento - homem.jpg", texto: "O 'Homem Vitruviano' de Leonardo da Vinci é um estudo icônico da proporção humana e sua relação com a geometria. A figura humana está inscrita em um círculo e um quadrado, demonstrando a busca renascentista pela harmonia e equilíbrio. A obra destaca a interseção da arte, ciência e anatomia, mostrando o compromisso de da Vinci com a compreensão completa do corpo humano. É um testemunho da mente genial de da Vinci e seu desejo de unir arte e conhecimento científico." },
    { imgC: "/renascimento-Nascimento de Venus2.jpg", imgI: "/renascimento-Nascimento de Venus.jfif", texto: "O 'Nascimento de Vênus' é uma icônica pintura renascentista criada por Sandro Botticelli por volta de 1484-1486. A obra retrata a deusa Vênus emergindo do mar dentro de uma concha, cercada por ninfas e zéfiros. A composição é marcada pela elegância e graça das figuras, com influências da mitologia clássica e do humanismo da Renascença. Botticelli emprega cores suaves e uma abordagem simbólica, representando o renascimento e a beleza divina. 'O Nascimento de Vênus' é um dos mais famosos trabalhos do período renascentista e uma representação icônica da harmonia e idealização artística." },
    { imgC: "/renascimento6.jpg", imgI: "/renascimento - monalisa.jpg", texto: "A ‘Mona Lisa’ é uma icônica pintura renascentista criada por Leonardo da Vinci no início do século XVI. A obra é famosa por seu sorriso enigmático e olhar cativante, que tem intrigado gerações de espectadores. Leonardo da Vinci usou a técnica do sfumato para criar transições suaves de cores e sombras, resultando em uma representação realista da figura humana. A pintura teve uma história tumultuada, incluindo o roubo em 1911 e a atração de admiradores e críticos de todo o mundo. A ‘Mona Lisa’ é vista como um símbolo da beleza e da arte renascentista, representando a idealização da forma humana e a busca pela perfeição." },

]


function Renascimento() {
    return (
        <>
            <div className="titulo">
                <h1 className={abril.className}>Renascimento</h1>

                <h3 className={abril.className}>séc. XIV - XVI</h3>
            </div>
            <br></br>
            <div className="corpo">
                <p className={open.className}>O Renascimento, um dos períodos mais fascinantes da história da arte e da cultura, floresceu na Europa entre os séculos XIV e XVI. Esse movimento revolucionário não apenas marcou o renascimento do interesse pela cultura clássica greco-romana, mas também desencadeou uma explosão de criatividade e inovação em diversas áreas, incluindo arte, literatura, ciência e filosofia. Neste contexto, artistas como Leonardo da Vinci, Michelangelo e Rafael produziram obras-primas que ainda hoje encantam e inspiram. O Renascimento não foi apenas uma época de redescobrimento, mas também um período de renovação intelectual e cultural que moldou a evolução do mundo ocidental, deixando um legado duradouro que ainda podemos admirar e estudar.</p>
            </div>
            <div className="titgal">
                <h2 className={abril.className}>Galeria de Imagens</h2>
                <GaleriaImagens ImageUrls={ImageUrls} />
            </div>
            <br />

            <div className="video">
                <h2>Saiba mais sobre o Movimento!</h2>
            </div>
            <div className="vids">
                <iframe
                    width="600"
                    height="300"
                    src="/videos/renascimentoEdit.mp4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </>
    )
}
export default Renascimento