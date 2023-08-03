import styles from "./Sidebar.module.css"
import Logo from "./Logo"

export default function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <Logo title="Unsplash" description="Image Search App"/>
        </div>
    )
}