import styles from "./SidebarOptionItem.module.css"

export default function SidebarOptionItem({title, handleResolution}) {
    return (
        <button onClick={handleResolution} className={styles.item}>{title}</button>
    )
}