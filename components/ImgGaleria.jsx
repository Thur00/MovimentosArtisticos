import Image from "next/image"
import { useState } from "react"

function GaleriaImagens(props){
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
        setSelecionadoImage(null)}
    return (
        <>
            <div key={index} className="ImageGallery">
                {props.ImageUrls.map((imageUrl, index) => (
                    <div
                        className="imageThumbnail"

                    >
                        <Image onClick={()=>openImg(imageUrl)} src={imageUrl.imgC} alt={`Imagem ${index}`} />

                        <button className="button"onClick={() => openDuo (imageUrl)}
                            
                        
                        >Saiba mais</button>
                    </div>
                ))}
            </div>

            {selecionadoImg && (
                <div className="imageModal1">
                    <span className="closeButton" onClick={closeDuo}>
                        &times;
                    </span>

                    <Image src={selecionadoImg} alt="Imagem Selecionada" />

                    <div>
                    <p>{selecionadoText}</p> 
                    </div>

                </div>
            )}

            {selecionadoImage && (
                <div className="imageModal2">
                    <span className="closeButton" onClick={closeImg}>
                        &times;
                    </span>

                    <Image src={selecionadoImage} alt="Imagem Selecionada" />


                </div>
            )}
        </>
    )
}

export default GaleriaImagens