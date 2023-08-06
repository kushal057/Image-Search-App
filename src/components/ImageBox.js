import styles from "./ImageBox.module.css"
import download_icon from "../assets/icons/download_icon.svg"

export default function ImageBox ({title, src}) {
    return (
        <div className={styles.imageBox}>
            <div className={styles.image} style={{background: `url(${src})`}}></div>
            <div className={styles.options}>
                <span className={styles.title}>{title}</span>
                <img src={download_icon} alt={title}/>
            </div>
        </div>
    )
}