import styles from "../buttonBlack/buttonBlack.module.css";

const buttonBlack = (props, link) => {
    return(
        <div className={styles.WrapperButtonBlack}>
          <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )

}

export default buttonBlack;