import styles from './Heading.module.sass';

interface HeadingProps {
    title: string
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <h2 className={styles.heading}>
            {title}
        </h2>
    );
}

export default Heading;