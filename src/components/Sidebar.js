import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import SidebarOption from "./SidebarOption"

export default function Sidebar({handleResolution}) {
    const sortOptions = [{id: 1, title: "High Quality", link: "#", resolution: "high"}, {id: 2, title: "Low Quality", link: "#", resolution: "high"}]

    return(
        <div className={styles.sidebar}>
            <Logo title="Unsplash" description="Image Search App"/>
            <SidebarOption title="Sort By" options={sortOptions} handleResolution={handleResolution}/>
        </div>
    )
}