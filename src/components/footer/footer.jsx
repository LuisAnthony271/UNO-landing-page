import styles from "../footer/footer.module.css";
import Insta from "../../assets/img/insta-icon.svg";
import Meta from "../../assets/img/face-icon.svg";
import Twitter from "../../assets/img/twitter-x.svg";
import UnoLogo from "../../assets/img/uno-logo.png";
import ButtonRed from "../buttonRed/buttonRed";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.contentFooter}>
            <div>
              <img className={styles.modelsImg} src={UnoLogo} alt="" />
            </div>
            <p>
              Esta edição especial do UNO®, o jogo de cartas adorado por todos,
              tem um visual totalmente exclusivo. Concebida com uma estética
              minimalista, essa versão é um grande presente para colecionadores
              de UNO®.
            </p>
          
          <div className={styles.subscribeFooter}>
            <p>
              Inscreva-se para saber de novidades do mundo uno. Se inscreva-se
              abaixo agora!
            </p>

            <div className={styles.emailFooter}>
              <input type="e-mail" placeholder="Digite o seu email aqui" />
              <ButtonRed>Cadastre-se</ButtonRed>
            </div>
          </div>
        </div>
        <div className={styles.Copy}>
          <div className={styles.imgCopy}>
            <a href="">
              <img className={styles.modelsImg} src={Insta} alt="" />
            </a>
            <a href="">
              <img className={styles.modelsImg} src={Meta} alt="" />
            </a>
            <a href="">
              <img className={styles.modelsImg} src={Twitter} alt="" />
            </a>
          </div>
          <div className={styles.divP}>
            <p>© 2024 MATEL. </p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
