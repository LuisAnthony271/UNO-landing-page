import { useState } from 'react';
import styles from './header.module.css';
import SignIn from '../btnSignIn/signIn';
import SignUp from '../btnSignUp/signUp';   
import Logo from '../../assets/img/uno-logo.png';
import iconCloser from '../../assets/img/menu-closer.svg';
import iconBars from '../../assets/img/menu-togle.svg';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => { 

        setMenuActive(!menuActive);
    };
    
    return (
        <header className={`${styles.header} ${menuActive ? styles.active : ""}`}>
            <div className={styles.headerWrapper}>
                <div className="">
                    <a href="#" className={styles.btnLogo}>
                        <img src={Logo} alt="LogoHeader" className={styles.logoHeader}/>
                    </a>
                </div>
                <div className={styles.btnMobile}>
                    <button onClick={toggleMenu} id={styles.buttonMobile}>
                        <img src={menuActive ? iconCloser : iconBars} id={styles.menuIcons} alt=""/>
                    </button>
                </div>
                <nav className={menuActive ? styles.active : ""}>
                    <ul className={styles.ulNav}>
                        <li className={styles.navLi}><a href="#" className={styles.aNav}>Ínicio</a></li>
                        <li className={styles.navLi}><a href="#" className={styles.aNav}>Onde encontra</a></li>
                        <li className={styles.navLi}><a href="#" className={styles.aNav}>Novos Produtos</a></li>
                        <li className={styles.navLi}><a href="#" className={styles.aNav}>Creditos</a></li>
                        <div className={styles.btnWrapperActive}>
                            <SignIn className={styles.signIn}>Entrar</SignIn>
                            <SignUp className={styles.signUp}>Cadastre-se</SignUp>
                        </div>
                    </ul>
                </nav>
                <div className={styles.btnWrapper}>
                    <SignIn className={styles.signIn}>Entrar</SignIn>
                    <SignUp className={styles.signUp}>Cadastre-se</SignUp>
                </div>
            </div>
        </header>
    )
}
                        
                            

export default Header;