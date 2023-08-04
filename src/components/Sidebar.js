import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import SidebarOption from "./SidebarOption"

export default function Sidebar() {
    const sortOptions = [{title: "High Quality", link: "#"}, {title: "Low Quality", link: "#"}]

    return(
        <div className={styles.sidebar}>
            <Logo title="Unsplash" description="Image Search App"/>
            <SidebarOption title="Sort By" options={sortOptions}/>
        </div>
    )
}