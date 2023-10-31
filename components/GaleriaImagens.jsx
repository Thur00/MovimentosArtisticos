import { useState } from "react"

const GaleriaImagens = (props) => {
    const [selecionadoImg, setSelecionadoImg] = useState(null)
    const [selecionadoText, setSelecionadoText] = useState(null)

    const openImage = (imageUrl) => {
        setSelecionadoImg(imageUrl.img)
        setSelecionadoText(imageUrl.texto)
    }

    const closeImage = () => {
        setSelecionadoImg(null)
    }

    
    return (
        <>
            <div className="ImageGallery">
                {props.ImageUrls.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="imageThumbnail"

                    >
                        <img src={imageUrl.img} alt={`Imagem ${index}`} />

                        <button onClick={() => openImage(imageUrl)}>Veja mais</button>
                    </div>
                ))}
            </div>

            {selecionadoImg && (
                <div className="imageModal">
                    <span className="closeButton" onClick={closeImage}>
                        &times;
                    </span>

                    <img src={selecionadoImg} alt="Imagem Selecionada" />

                    <p>{selecionadoText}</p>


                </div>
            )}
        </>
    )
}

export default GaleriaImagens