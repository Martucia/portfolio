import Heading from '../heading/Heading';

import styles from './Experience.module.sass';

import vv from '@images/vv.webp'
import nrg from '@images/nrg.png'

const Experience = () => {
    return (
        <section className={styles.experience} id="experience">
            <Heading title="Experience" />

            <div className={styles.subtitle}>
                Here is a quick summary of my most recent experiences:
            </div>

            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img style={{ width: 100 }} className={styles.logo} src={vv} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            Vandal Vape
                        </div>
                        <div className={styles.text}>
                            Together with the team, we created web applications for internal and external use using ReactJs and Node.js (in some cases, NestJs) technologies. Our developments made the lives of the company's employees much easier by implementing effective solutions. In addition, I took over the creation of most of the business automation for customer relationship management (CRM), which led to a reduction in the need for a large number of employees in some divisions of the company.
                        </div>
                    </div>
                    <div className={styles.duration}>
                        Jun 2022 - Sep 2023
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.image}>
                        <img style={{ width: 100 }} className={styles.logo} src={nrg} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            NRG
                        </div>
                        <div className={styles.text}>
                            I gained my first commercial experience in this company. I developed websites using HTML, Sass, JavaScript, JQuery, and Docker. Unfortunately, due to the outbreak of a full-scale war in my country, the company had to temporarily suspend its work.
                        </div>
                    </div>
                    <div className={styles.duration}>
                        Dec 2021 - May 2022
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;