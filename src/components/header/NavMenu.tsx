import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.sass';

import git from '@images/github.svg';
import telegram from '@images/telegram.svg';

interface NavMenuProps {
    close: () => void,
    isOpen: boolean
}

const NavMenu = ({ close, isOpen }: NavMenuProps) => {

    // const onClick = () => {
    //     close();
    // }

    return (
        <div className={`${styles.navmenu} ${isOpen && styles.open}`}>
            <Link onClick={close} className={styles.link} to="/#about">
                About
            </Link>
            <Link onClick={close} className={styles.link} to="/#skills">
                Skills
            </Link >
            <Link onClick={close} className={styles.link} to="/#experience">
                Experience
            </Link>
            <Link onClick={close} className={styles.link} to="/#projects">
                Projects
            </Link>
            <Link onClick={close} className={styles.link} to="/#contacts">
                Contacts
            </Link>

            <div className={styles.links}>
                <NavLink target="_blank" to="https://github.com/Martucia">
                    <img src={git} alt="" />
                </NavLink>
                <NavLink target="_blank" to="https://t.me/pochkaa">
                    <img src={telegram} alt="" />
                </NavLink>
            </div>
        </div>
    );
}

export default NavMenu;