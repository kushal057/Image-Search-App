import styles from "./SidebarOption.module.css"
import SidebarOptionItem from "./SidebarOptionItem.js"

export default function SidebarOption({title, options}) {
    return(
        <div className={styles.option}>
            <p className={styles.title}>{title}</p>
            {options.map(item => <SidebarOptionItem key={item.id} title={item.title} link={item.link}/>)}
        </div>
    )
}