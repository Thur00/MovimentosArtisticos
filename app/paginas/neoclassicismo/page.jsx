'use client'
import GaleriaImagens from "@/components/ImgGaleria";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})  

const ImageUrls = [
    {imgC: "/Neoclassicismo1.jpg", imgI: "/Neoclassicismo-A intervenção das sabinas.jpg", texto: "'A Intervenção das Sabinas' é uma famosa obra do artista francês Jacques-Louis David. A pintura retrata o momento em que os romanos raptam as mulheres sabinas para se casarem com elas. A composição é marcada pela tensão e pelo movimento, com figuras em poses dramáticas e expressões faciais intensas. Os detalhes das roupas e dos cenários são meticulosamente executados, realçando a habilidade técnica do artista. A obra transmite a emoção e o conflito da situação, capturando um momento crucial da história romana."},
    {imgC: "/Neoclassicismo2.png", imgI: "/Neoclassicismo-Marat Assassine.png", texto: "'A Morte de Marat' é uma obra-prima do pintor francês Jacques-Louis David. Retratando a figura do revolucionário Jean-Paul Marat, o quadro apresenta diversos elementos que o tornam marcante. A composição é dominada pela figura de Marat, que está deitado em uma banheira, morto, com uma expressão serena em seu rosto. A iluminação dramática e o uso de cores frias intensificam a sensação de tragédia e melancolia. A simplicidade da cena, aliada ao realismo dos detalhes, transmite uma sensação de proximidade com o espectador, tornando-o parte da narrativa. A obra é um poderoso símbolo da Revolução Francesa e do sacrifício de seus líderes."},
    {imgC: "/Neoclassicismo3.jpg", imgI: "/Neoclassicismo-Bonaparte.jpg", texto: "'Bonaparte Atravessando os Alpes' é uma pintura icônica que retrata Napoleão Bonaparte montado em um cavalo branco, liderando seu exército através das montanhas. A obra transmite uma sensação de grandiosidade e poder, com Napoleão imponente em seu uniforme militar. Os tons vibrantes e contrastantes realçam a determinação e a determinação do líder francês. A paisagem montanhosa ao fundo cria um cenário dramático, simbolizando os desafios enfrentados por Napoleão em sua campanha militar. A pintura captura a essência do carisma e da ambição de um dos líderes mais influentes da história."},
    {imgC: "/Neoclassicismo4.jpg", imgI: "/Neoclassicismo-O juramento dos horácios.jpg", texto: "'O Juramento dos Horácios' é uma pintura icônica do artista francês Jacques-Louis David. A obra retrata um momento dramático da história antiga de Roma, em que três irmãos, os Horácios, juram lealdade à sua cidade e se preparam para lutar contra os Curiácios, representando uma batalha entre as cidades de Roma e Alba Longa. A pintura é conhecida por sua composição simétrica e posturas heroicas dos personagens, transmitindo uma sensação de coragem e patriotismo. Com sua paleta de cores sóbrias e iluminação dramática, a obra captura a intensidade emocional e o sacrifício necessário para cumprir o dever cívico."},
    {imgC: "/Neoclassicismo5.jpg", imgI: "/Neoclassicismo-a pompeian beauty.jpg", texto: "'A Pompeiian Beauty' é uma pintura clássica do artista britânico Sir Lawrence Alma-Tadema. A obra retrata uma jovem mulher em um ambiente romano, vestida com roupas elegantes e adornos. A composição é caracterizada por um uso habilidoso de cores vivas e luz suave, destacando a beleza da figura feminina. Detalhes meticulosos, como a textura dos tecidos e os detalhes arquitetônicos, adicionam realismo à cena. A pintura evoca uma sensação de tranquilidade e elegância, transportando o espectador para a atmosfera exuberante da antiga Pompeia."},
    {imgC: "/Neoclassicismo6.jpg", imgI: "/Neoclassicismo-The Death of Viriatus.jpg", texto: "'The Death of Viriatus' é uma pintura histórica que retrata o momento da morte de Viriatus, um líder lusitano que resistiu à ocupação romana na Península Ibérica. A obra apresenta uma cena dramática, com Viriatus caído em primeiro plano, rodeado por guerreiros romanos triunfantes. A composição é intensa, com cores escuras e sombrias que refletem a tragédia e a violência do evento. Os detalhes das expressões faciais e dos trajes dos personagens evidenciam o talento técnico do artista, destacando a emoção e a tensão do momento. A pintura representa um episódio importante da história ibérica e captura a bravura e o sacrifício de Viriatus em defesa de seu povo."}
]

function Neoclass(){
    return(
        <main className={abril.className}>

        <div className="titulo">
            <h1> Neoclassicismo </h1>
            <h3> séc. XVIII - XIX </h3>
        </div>

        <div className="corpo">
            <p> O Neoclassicismo foi um movimento artístico que surgiu no final do século XVIII, buscando inspiração na Antiguidade Clássica, 
                especialmente na Grécia e Roma. Caracterizou-se pela ênfase na simplicidade, clareza e harmonia das formas nas artes visuais, 
                arquitetura e literatura. Este movimento influenciou a criação de edifícios com colunas clássicas, esculturas idealizadas e 
                uma linguagem literária mais precisa. Além disso, o Neoclassicismo refletiu os ideais do Iluminismo, promovendo a razão e a 
                liberdade em um contexto histórico de transformações significativas. </p>
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
            src="/videos/neoclassicismoEdit.mp4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
        </div>

        </main>
    )
}

export default Neoclass;