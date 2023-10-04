import Heading from '../heading/Heading';

import styles from './Projects.module.sass';

import { projects } from '../../data/projects.ts';
import Project from './Project.tsx';

const Projects = () => {
    return (
        <section className={styles.projects} id="projects">
            <Heading title="Projects" />

            <div className={styles.subtitle}>
                Some of the noteworthy projects I have built:
            </div>

            <div className={styles.wrapper}>
                {projects.map(project =>
                    <Project key={project.name} project={project} />
                )}
            </div>
        </section>
    );
}

export default Projects;