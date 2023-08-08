import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import SidebarOption from "./SidebarOption"

export default function Sidebar({handleResolution}) {
    return (
        <div className={styles.sidebar}>
            <Logo title="Unsplash" description="Image Search App"/>
            <SidebarOption title="Sort By" handleResolution={handleResolution}/>
        </div>
    )
}