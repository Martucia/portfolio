import { NavLink } from 'react-router-dom';

import Heading from '../heading/Heading';

import styles from './Contacts.module.sass';

import img from '@images/main8.jpg'

const Contacts = () => {
    return (
        <section className={styles.contacts} id="contacts">
            <Heading title="Contacts" />

            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.content}>

                    <div className={styles.block}>
                        <span>Email:</span>
                        <NavLink to="mailto:imarta.shlapak@gmail.com">
                            imarta.shlapak@gmail.com
                        </NavLink>
                    </div>

                    <div className={styles.block}>
                        <span>Phone (Ukraine):</span>
                        <NavLink to="tel:380971407938">
                            +380 (97) 140-79-38
                        </NavLink>
                    </div>

                    <div className={styles.block}>
                        <span>Telegram:</span>
                        <NavLink target="_blank" to="https://t.me/pochkaa">
                            @pochkaa
                        </NavLink>
                    </div>

                    <div className={styles.block}>
                        <span>GitHub:</span>
                        <NavLink target="_blank" to="https://github.com/Martucia">
                            @Martucia
                        </NavLink>
                    </div>



                </div>
            </div>
        </section>
    );
}

export default Contacts;