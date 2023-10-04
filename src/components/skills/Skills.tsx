import Heading from '../heading/Heading';

import styles from './Skills.module.sass';

import js from '@images/js.svg'
import express from '@images/express.svg'
import figma from '@images/figma.svg'
import git from '@images/git.svg'
import mongodb from '@images/mongodb.svg'
import nest from '@images/nest.svg'
import nj from '@images/nj.svg'
import postgresql from '@images/postgresql.svg'
import react from '@images/react.svg'
import sass from '@images/sass.svg'
import ts from '@images/ts.svg'

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <Heading title="Skills" />

            <div className={styles.subtitle}>
                The skills, tools and technologies I am really good at:
            </div>

            <div className={styles.wrapper}>
                <div className={styles.skill}>
                    <img src={js} alt="" />
                    <span>JavaScript</span>
                </div>
                <div className={styles.skill}>
                    <img src={react} alt="" />
                    <span>React</span>
                </div>
                <div className={styles.skill}>
                    <img src={ts} alt="" />
                    <span>TypeScript</span>
                </div>
                <div className={styles.skill}>
                    <img src={express} alt="" />
                    <span>Express</span>
                </div>
                <div className={styles.skill}>
                    <img src={nj} alt="" />
                    <span>NodeJs</span>
                </div>
                <div className={styles.skill}>
                    <img src={nest} alt="" />
                    <span>NestJs</span>
                </div>
                <div className={styles.skill}>
                    <img src={sass} alt="" />
                    <span>Sass</span>
                </div>
                <div className={styles.skill}>
                    <img src={mongodb} alt="" />
                    <span>MongoDb</span>
                </div>
                <div className={styles.skill}>
                    <img src={postgresql} alt="" />
                    <span>PostgreSQL</span>
                </div>
                <div className={styles.skill}>
                    <img src={figma} alt="" />
                    <span>Figma</span>
                </div>
                <div className={styles.skill}>
                    <img src={git} alt="" />
                    <span>Git</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;