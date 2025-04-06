import styles from "../buttonRed/buttonRed.module.css";

const buttonRed = (props, link) => {
    return(
        <div className={styles.WrapperButtonRed}>
            <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )
}

export default buttonRed;