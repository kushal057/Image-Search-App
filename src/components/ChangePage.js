import styles from "./ChangePage.module.css"
import previous_page_icon from "../assets/icons/previous_page_icon.svg"
import next_page_icon from "../assets/icons/next_page_icon.svg"

export default function ChangePage({currentPage, totalPage, handlePreviousPage, handleNextPage}) {
    return (
        <div className={styles.changePage}>
            <button className={styles.previousPageBtn} onClick={handlePreviousPage}><img src={previous_page_icon} alt="Previous Page"/></button>
            <p>Page {currentPage} of {totalPage}</p>
            <button className={styles.nextPageBtn} onClick={handleNextPage}><img src={next_page_icon} alt="Next Page"/></button>
        </div>
    )
}