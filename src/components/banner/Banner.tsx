import { NavLink } from 'react-router-dom'

import styles from './Banner.module.sass';

import mark from '@images/mark.svg'
import github from '@images/github.svg';
import img from '@images/main9.jpg';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Marta
                </h1>

                <p className={styles.row}>
                    For the past 3 years, I have been immersing myself in the world of web development, and every day of this exciting journey feels like a new discovery to me. During this time, I have gained significant experience and learned many crucial aspects of this field, but most importantly, my dedication and motivation never leave me, not even for a moment.
                </p>

                <div className={styles.point}>
                    <img src={mark} alt="" />
                    <span>Ternopil, Ukraine</span>
                </div>
                <div className={styles.point}>
                    <div className={styles.dot}><span /></div>
                    <span>Available for new job</span>
                </div>

                <div className={styles.links}>
                    <NavLink target="_blank" to="https://github.com/Martucia">
                        <img src={github} alt="" />
                        <span>GitHub</span>
                    </NavLink>
                </div>
            </div>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>
        </section>
    );
}

export default Banner;