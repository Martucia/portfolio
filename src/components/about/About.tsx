import Heading from '../heading/Heading';

import styles from './About.module.sass';

import img from '@images/main3.jpg';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <Heading title="About me" />
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    Curious about me? Here you have it:
                </h3>

                <p className={styles.text}>
                    In 2019, I started my exciting journey into the world of web development. Starting with simple HTML landing pages, each project became a new challenge and opportunity for growth. I was constantly striving to complicate my work and gain new knowledge.
                </p>

                <p className={styles.text}>
                Three years of development experience gave me the opportunity to become a full-fledged developer. I learned various technologies, focusing on React.js and Node.js.
My development journey has been marked by constant learning, experimentation, and strong-willed determination. I am always ready to improve my skills and participate in new projects in order to find the best solutions and create high-quality products.
                </p>
                <p className={styles.text}>
                In my free time, I find incredible joy in playing tennis and horseback riding. But I also appreciate the silence and enjoyment of reading books, and sometimes the best rest is just lying on the couch and relaxing.
                </p>
                <p className={styles.text}>
                Now I am actively looking for a job where I can find a balance between what I know now and what I want to learn. I see work not just as a way to earn an income, but also as an opportunity for personal growth and learning new things. I believe that the best way to develop yourself is to surround yourself with motivated and driven colleagues.
                </p>
            </div>
        </section>
    );
}

export default About;