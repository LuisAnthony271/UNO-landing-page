import styles from "../hero/hero.module.css";
import CaixaHero from "../../assets/img/Caixa.png";

const Hero = () => {
  return (
    <section className={styles.hero}>

      <div className={styles.heroWrapper}>

        <div className={styles.heroContent}>

          <h2>
            <span>UNO® minimalista</span>, representa uma excelente opção de
            presente para colecionadores!
          </h2>

          <p>
            Esta edição especial do UNO®, o jogo de cartas adorado por todos,
            tem um visual totalmente exclusivo.
          </p>

          {/* BOTÕES */}
          <div className={styles.btnWrapper}>

            <div className={styles.btnHero}>
              <a href="#" className={styles.aHero1}>Saiba mais</a>
            </div>
            
            <div className={styles.buttonHero}>
              <a href="#" className={styles.aHero2}>Onde encontrar</a>
            </div>

          </div>
        </div>

        {/* IMAGEM  */}
        <div className={styles.imgHero}>
          <img className={styles.modelsImg} src={CaixaHero} alt="Caixa uno" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
