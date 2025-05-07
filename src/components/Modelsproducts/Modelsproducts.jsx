import styles from './Modelsproducts.module.css'
import Img from '../../assets/img/uno-minimalista.png'
import Img2 from '../../assets/img/uno-flip.png'
import Img3 from '../../assets/img/uno-original.png'
import Img4 from '../../assets/img/uno-dos.png'
export default function Modelsproducts() {
  return (
    <>
      <section>
        <div className={styles.products}>

          <div className={styles.productsWrapper}>

            {/* TEXTOS */}
            <div className={styles.boxText}>
              <h3>Nossos novos modelos</h3>
              <a href="" className=""> ver todos → </a>
            </div>

            {/* CARDS */}
            <div className={styles.boxCard}>

              <div className={styles.card}>

                <img className={styles.modelsImg} src={Img} alt="" />

                <div className={styles.cardText}>
                    <p>UNO® Flip SIOC </p>
                    <p>R$ 80</p>
                </div>

                {/* <div className={styles.row}></div> */}
                <div className={styles.boxPrice}>
                    <p>Acaba em <span>01.34.45</span> </p>
                    <div className={styles.button}><a href="">Comprar</a></div>
                </div>

              </div>
              
              <div className={styles.card}>

                <img className={styles.modelsImg} src={Img2} alt="" />

                <div className={styles.cardText}>
                    <p>UNO® minimalista </p>
                    <p>R$ 80</p>
                </div>

                {/* <div className={styles.row}></div> */}
                <div className={styles.boxPrice}>
                    <p>Acaba em <span>01.34.45</span> </p>
                    <div className={styles.button}><a href="">Comprar</a></div>
                </div>

              </div>

              <div className={styles.card}>
                <img className={styles.modelsImg} src={Img3} alt="" />

                <div className={styles.cardText}>
                    <p>UNO®  Original </p>
                    <p>R$ 80</p>
                </div>

                {/* <div className={styles.row}></div> */}
                <div className={styles.boxPrice}>
                    <p>Acaba em <span>01.34.45</span> </p>
                    <div className={styles.button}><a href="">Comprar</a></div>
                </div>

              </div>
              <div className={styles.card}>
                <img className={styles.modelsImg} src={Img4} alt="" />

                <div className={styles.cardText}>
                    <p>UNO® Dos </p>
                    <p>R$ 80</p>
                </div>

                {/* <div className={styles.row}></div> */}
                <div className={styles.boxPrice}>
                    <p>Acaba em <span>01.34.45</span> </p>
                    <div className={styles.button}><a href="">Comprar</a></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
