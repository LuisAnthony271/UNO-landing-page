import styles from '../btnSignUp/signUp.module.css';

const SignUp = (props, link) => {
    return (
        <div className={styles.sighUpWrapper}>
            <a href={link} className={styles.signUp} {...props}></a>
        </div>
    )
}

export default SignUp;