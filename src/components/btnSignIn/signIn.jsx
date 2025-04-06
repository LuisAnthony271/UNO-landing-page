import styles from '../btnSignIn/signIn.module.css';

const SignIn = (props, link) => {
    return (
        <div className={styles.SignInWrapper}>
            <a href={link} className={styles.signIn} {...props}></a>
        </div>
    )
}

export default SignIn;