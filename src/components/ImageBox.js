import styles from "./ImageBox.module.css"
import download_icon from "../assets/icons/download_icon.svg"

export default function ImageBox ({text, src}) {
    return (
        <div className={styles.imageBox}>
            <div className={styles.image} style={{background: `url(https://images.unsplash.com/photo-1690722410513-ff89e9ceb825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80})`}}></div>
            <div className={styles.options}>
                <span className={styles.text}>{text}</span>
                <img src={download_icon} alt={text}/>
            </div>
        </div>
    )
}