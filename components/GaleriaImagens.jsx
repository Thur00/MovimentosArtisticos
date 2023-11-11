import { useState } from "react"

const GaleriaImagens = (props) => {
    const [selecionadoImg, setSelecionadoImg] = useState(null)
    const [selecionadoText, setSelecionadoText] = useState(null)
    const [selecionadoImage, setSelecionadoImage] = useState(null)

    const openDuo = (imageUrl) => {
        setSelecionadoImg(imageUrl.imgI)
        setSelecionadoText(imageUrl.texto)
    }

    const closeDuo = () => {
        setSelecionadoImg(null)
    }

    const openImg = (imageUrl) => {
        setSelecionadoImage(imageUrl.imgI)
    }

    const closeImg = () => {
        setSelecionadoImage(null)
    }


    return (
        <>
            <div className="ImageGallery">
                {props.ImageUrls.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="imageThumbnail"
                    >
                        <img onClick={() => openImg(imageUrl)} src={imageUrl.imgC} alt={`Imagem ${index}`} />

                        <button onClick={() => openDuo(imageUrl)}> Saiba mais </button>

                    </div>
                ))}
            </div>

            {selecionadoImg && (
                <div className="imageModal1">
                    <span className="closeButton" onClick={closeDuo}>
                        &times;
                    </span>

                    <img src={selecionadoImg} alt="Imagem Selecionada" />

                    <p>{selecionadoText}</p>


                </div>
            )}

            {selecionadoImage && (
                <div className="imageModal2">
                    <span className="closeButton" onClick={closeImg}>
                        &times;
                    </span>

                    <img src={selecionadoImage} alt="Imagem Selecionada" />

                </div>
            )}
        </>
    )
}

export default GaleriaImagens