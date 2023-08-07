import styles from "./ImageBox.module.css"
import download_icon from "../assets/icons/download_icon.svg"
import {Link} from 'react-router-dom'
import {saveAs} from 'file-saver'

export default function ImageBox ({text, src}) {
    const downloadImage = (e) => {
        e.preventDefault();
        saveAs(src, 'image.jpg');
    };

    return (
        <div className={styles.imageBox}>
            <div className={styles.image}><img src={src} alt={text}/></div>
            <div className={styles.options}>
                <Link to={src} target="_blank" className={styles.text}>Open Image in New Tab</Link>
                <button onClick={downloadImage} className={styles.downloadBtn}><img src={download_icon} alt={text}/></button>
            </div>
        </div>
    )
}