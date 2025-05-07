import styles from "../discover/discover.module.css";
import Flip from "../../assets/img/uno-flip.png";
import Dos from "../../assets/img/uno-dos.png";
import Uno from "../../assets/img/uno-original.png";
import Masters from "../../assets/img/uno-masters.png";
import Barbie from "../../assets/img/uno-barbie.png";
import Minimalista from "../../assets/img/uno-minimalista.png"

const Discover = () => {
  return (
    <section className={styles.discover}>
      <div className={styles.discoverWrapper}>
        <div className={styles.discoverContent}>
          <h2>Descobrir</h2>
          <a href="#">Filtrar</a>
        </div>
        <div className={styles.discoverRow}>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Flip} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Flip SIOC</h2>
              <h2 className={styles.cardTitlePrice}>R$104,99</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Dos} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Dos</h2>
              <h2 className={styles.cardTitlePrice}>R$50,00</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Uno} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Original</h2>
              <h2 className={styles.cardTitlePrice}>R$29,90</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Masters} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Masters</h2>
              <h2 className={styles.cardTitlePrice}>R$34,99</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
        </div>
        <div className={styles.discoverRow}>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Masters} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Masters</h2>
              <h2 className={styles.cardTitlePrice}>R$34,99</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Barbie} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Barbie</h2>
              <h2 className={styles.cardTitlePrice}>R$23,99</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Minimalista} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Minimalista</h2>
              <h2 className={styles.cardTitlePrice}>R$50,20</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
          <div className={styles.discoverCard}>
            <div className={styles.cardImg}>
              <img className={styles.modelsImg} src={Flip} alt="" />
            </div>
            <div className={styles.cardTitleBuy}>
              <h2 className={styles.cardTitle}>UNO® Flip</h2>
              <h2 className={styles.cardTitlePrice}>R$104,99</h2>
            </div>
            <div className={styles.cardBuy}>
              <h2>
                Acaba em <span>01.34.45</span>
              </h2>
              <a href="">Comprar</a>
            </div>
          </div>
        </div>
        <div className={styles.discoverMore}>
          <a href="">Ver Mais</a>
        </div>
      </div>
    </section>
  );
};

export default Discover;
