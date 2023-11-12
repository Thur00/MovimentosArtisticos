'use client'
import GaleriaImagens from "@/components/ImgGaleria";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
    subsets: ['latin'],
    weight: '400'
})  

const ImageUrls = [
    {imgI: "/Abstracionismo-black and violet.jfif", imgC:"/Abstracionismo1.jpg", texto:"‘Black and Violet’ é uma obra de arte que combina os elementos contrastantes das cores preta e violeta para criar uma composição intrigante. A pintura apresenta um jogo de luz e sombra, onde o preto profundo se mistura com o violeta intenso, criando uma sensação de mistério e profundidade. A escolha das cores transmite uma atmosfera de mistério e introspecção, convidando o espectador a explorar as nuances e os detalhes presentes na obra. A combinação dessas cores contrastantes cria uma tensão visual que cativa o olhar e desperta a curiosidade do observador."},
    {imgI: "/Abstracionismo-Composição com vermelho amarelo e azul.jpg", imgC:"/Abstracionismo2.jpg", texto:"‘Composição com vermelho, amarelo e azul’ é uma obra de arte que combina cores vibrantes para criar uma composição dinâmica e impactante. Os três principais elementos de cor - vermelho, amarelo e azul - são colocados de forma estratégica, criando um contraste marcante entre as cores primárias. A disposição das formas e linhas na obra aumenta ainda mais a sensação de movimento e energia. Essa combinação de cores brilhantes e composição dinâmica torna 'Composição com vermelho, amarelo e azul' uma peça visualmente estimulante e cativante."},
    {imgI: "/Abstracionismo-number-8.jpg", imgC:"/Abstracionismo3.jpg", texto:"‘Number 8’ é uma obra abstrata que apresenta uma combinação harmoniosa de linhas, formas e cores. O uso de pinceladas ousadas e gestuais cria uma sensação de movimento e energia. As cores vibrantes, como o vermelho, o amarelo e o azul, se destacam e capturam a atenção do espectador. A composição é dinâmica e convida à exploração visual, revelando diferentes camadas e texturas. ‘Number 8’ é uma obra cativante e expressiva, que desperta uma variedade de emoções e interpretações."},
    {imgI: "/Abstracionismo- Red, o, t and p.jpg", imgC:"/Abstracionismo4.jpg", texto:"‘Red, Orange, Tan, and Purple’ é uma obra de arte que combina cores vibrantes e contrastantes para criar uma composição visualmente estimulante. Os tons de vermelho, laranja, marrom claro e roxo se misturam e se sobrepõem de maneira harmoniosa, criando uma sensação de movimento e dinamismo. A paleta de cores escolhida pelo artista transmite energia e vitalidade, enquanto a sobreposição das cores cria profundidade e dimensão. É uma pintura que captura a atenção do espectador e o convida a explorar os diferentes matizes e texturas presentes na obra."},
    {imgI: "/Abstracionismo-Varios circulos.jpg", imgC:"/Abstracionismo5.jpg", texto:"‘Vários Círculos’ é uma obra abstrata que se destaca pela presença dominante dos círculos em sua composição. Os círculos são representados em diferentes tamanhos e cores, criando uma sensação de movimento e dinamismo. Cada círculo é único e possui sua própria textura e padrão, o que adiciona uma camada de complexidade à obra. A repetição dos círculos cria uma sensação de ritmo e harmonia, enquanto a variedade de cores adiciona vivacidade e interesse visual. A obra convida o espectador a explorar a interação entre os diferentes círculos e a apreciar a beleza intrínseca dessa forma geométrica."},
    {imgI: "/Abstracionismo-yellow-cherry-orange.jpg", imgC:"/Abstracionismo6.jpg", texto:"‘Yellow, Cherry, Orange’ é uma obra de arte que combina cores vibrantes e contrastantes para criar uma composição visualmente impactante. Os tons de amarelo, cereja e laranja se misturam e se sobrepõem, criando uma sensação de calor e energia. As pinceladas ousadas e expressivas adicionam movimento e dinamismo à obra. A combinação de cores brilhantes e a composição dinâmica tornam ‘Yellow, Cherry, Orange’ uma peça cativante que desperta emoções e estimula a imaginação do espectador."}
]

function Abstracionismo(){
    return(
        <main className={abril.className}>

        <div className="titulo">
            <h1> Abstracionismo </h1>
            <h3> séc. XX </h3>
        </div>

        <div className="corpo">
            <p> O Abstracionismo, um movimento artístico que surgiu no início do século XX, representa uma das rupturas mais radicais com a 
                tradição artística convencional. Diferentemente de estilos anteriores que buscavam representar o mundo de maneira figurativa, 
                os artistas abstracionistas se aventuraram no reino da abstração e da não representação. Abandonando a necessidade de retratar 
                objetos reconhecíveis, eles exploraram a linguagem visual de cores, formas e linhas, buscando expressar emoções e ideias de uma 
                forma completamente nova. Nomes como Wassily Kandinsky e Kazimir Malevich desempenharam um papel fundamental nessa transformação, 
                abrindo caminho para a arte pura e abstrata. O Abstracionismo não apenas desafiou as noções tradicionais de arte, mas também 
                influenciou todo o cenário artístico do século XX e além, explorando a liberdade criativa e a relação entre o espectador e a obra 
                de arte. </p>
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

export default Abstracionismo;