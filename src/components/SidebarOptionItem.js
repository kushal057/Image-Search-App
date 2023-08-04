import styles from "./SidebarOptionItem.module.css"

export default function SidebarOptionItem({title, link}) {
    return (
        <a className={styles.item} href={link}>{title}</a>
    )
}