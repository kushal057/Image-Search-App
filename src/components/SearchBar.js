import styles from "./SearchBar.module.css"
import search_icon from "../assets/icons/search_icon.svg"

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input type="text"/>
            <img src={search_icon} alt="search"/>
        </div>
    )
}