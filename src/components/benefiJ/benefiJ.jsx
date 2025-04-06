import styles from "../benefiJ/benefiJ.module.css";
import Shild from "../../assets/img/shild-icon.svg"
import Box from "../../assets/img/box-icon.svg"
import Media from "../../assets/img/media-icon.svg"
import Rocket from "../../assets/img/rocket-icon.svg"

const BenefiJ = () => {
    return (
        <section className={styles.benefitJ}>
            <div className={styles.benefiJWrapper}>
                <h2>Benefícios de joga uno</h2>
                <p>Saiba mais sobres os benefícios de joga uno com seus amigos e família </p>
                <div className={styles.benefiJIconWrapper}>
                    <div className={styles.First}>
                        <div className={styles.boxIconWrapper}>
                            <div className={styles.boxIcon}>
                                <img src={Shild} alt="shild" />
                            </div>
                            <p>Divirta-se com segurança.</p>
                        </div>

                        <div className={styles.boxIconWrapper}>
                            <div className={styles.boxIcon}>
                                <img src={Box} alt="box" />
                            </div>
                            <p>Pensamentos fora da caixinha.</p>
                        </div>
                    </div>

                    <div className={styles.Second}>
                        <div className={styles.boxIconWrapper}>
                            <div className={styles.boxIcon}>
                                <img src={Media} alt="media" />
                            </div>
                            <p className={styles.Media}>Ativa o seu lado criativo.</p>
                        </div>

                        <div className={styles.boxIconWrapper}>
                            <div className={styles.boxIcon}>
                                <img src={Rocket} alt="" />
                            </div>
                            <p>Estimula o raciocínio rápido.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BenefiJ;