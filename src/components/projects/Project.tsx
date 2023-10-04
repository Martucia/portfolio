import { NavLink } from 'react-router-dom';

import styles from './Projects.module.sass';

import git from '@images/github.svg'
import { IProject } from '../../types/IProject';

interface ProjectProps {
    project: IProject
}

const Project = ({ project }: ProjectProps) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <NavLink target="_blank" to={project.link} className={styles.link}>
                    <img src={project.img} alt="" />
                </NavLink>
            </div>
            <div className={styles.content}>
                <NavLink target="_blank" to={project.link} className={styles.title}>
                    {project.name}
                </NavLink>
                <div className={styles.desc}>
                    {project.description}
                </div>
                <div className={styles.tags}>
                    {project.tags.map(tag =>
                        <div className={styles.tag} key={tag}>
                            {tag}
                        </div>
                    )}
                </div>
                <div className={styles.links}>
                    {project.github &&
                        <NavLink target="_blank" to={project.github}>
                            <img src={git} alt="" />
                            <span>GitHub</span>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;