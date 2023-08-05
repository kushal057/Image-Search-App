import styles from "./Logo.module.css"

export default function Logo ({title, description}) {
    return (
        <div className={styles.logo}>
           <p className={styles.title}>{title}</p>
           <p className={styles.description}>{description}</p>
        </div>
    )
}