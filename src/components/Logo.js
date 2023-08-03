import styles from "./Logo.module.css"

export default function Logo ({title, description}) {
    return (
        <div className={styles.logo}>
            <p><span className={styles.title}>{title}</span> <br/> <span className={styles.description}>{description}</span></p>
        </div>
    )
}