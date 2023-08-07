import styles from "./SidebarOption.module.css"
import SidebarOptionItem from "./SidebarOptionItem.js"

export default function SidebarOption({title, handleResolution}) {
    return(
        <div className={styles.option}>
            <p className={styles.title}>{title}</p>
            <SidebarOptionItem title="High Quality" handleResolution={handleResolution}/>
            <SidebarOptionItem title="Low Quality" handleResolution={handleResolution}/>
        </div>
    )
}