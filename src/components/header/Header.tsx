import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.sass';
import NavMenu from './NavMenu';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to="/">
                Logo
            </NavLink>

            <nav className={styles.nav}>
                <Link className={styles.link} to="/#about">
                    About
                </Link>
                <Link className={styles.link} to="/#skills">
                    Skills
                </Link >
                <Link className={styles.link} to="/#experience">
                    Experience
                </Link>
                <Link className={styles.link} to="/#projects">
                    Projects
                </Link>
                <Link className={styles.link} to="/#contacts">
                    Contacts
                </Link>
            </nav>


            <button onClick={() => setMenuOpen(!isMenuOpen)} className={`${styles.burger} ${isMenuOpen && styles.open}`}>
                <input className={styles.checkbox} type="checkbox" name="" id="" />
                <div className={styles.lines}>
                    <span className={`${styles.line} ${styles.line1}`}></span>
                    <span
                        style={{ transition: isMenuOpen ? `transform 0.2s ease-in-out` : `transform 0.5s ease-in-out` }}
                        className={`${styles.line} ${styles.line2}`}
                    ></span>
                    <span className={`${styles.line} ${styles.line3}`}></span>
                </div>
            </button>

            <NavMenu close={() => setMenuOpen(false)} isOpen={isMenuOpen} />
        </header>
    );
}

export default Header;