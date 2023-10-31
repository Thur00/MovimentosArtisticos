'use client'
import GaleriaImagens from "@/components/GaleriaImagens";

const ImageUrls = [
    {img: "/bar01.png", texto: "imagem 1"},
    {img: "/bar02.png", texto: "imagem 2"},
    {img: "/bar03.png", texto: "imagem 3"},
    {img: "/bar04.png", texto: "imagem 4"},
    {img: "/bar05.png", texto: "imagem 5"},
    {img: "/bar06.png", texto: "imagem 6"}
]

function Barroco(){
    return(
        <>

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

        </>
    )
}

export default Barroco;