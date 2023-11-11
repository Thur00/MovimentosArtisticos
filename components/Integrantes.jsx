
import styles from './integrante.module.css'

function Integrante(props) {

    return (
        <>
            {props.ImageUrls.map((imageUrl, index) => (
                <div className={styles.card}>
                    <div
                        key={index}
                        className={styles.imgBx}
                    >
                        <img src={imageUrl.img} alt={`Imagem ${index}`} title={`Imagem ${index}`} />
                    </div>
                    <div className={styles.content}>
                        <h3>Nome: {imageUrl.nome}</h3><br />
                        <h3>Idade: {imageUrl.idade}</h3><br />
                        <h3>Função: {imageUrl.funcao}</h3>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Integrante