import { useState, useEffect, react } from 'react'
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import SearchBar from "./components/SearchBar";
import ImageBox from "./components/ImageBox";
import axios from "axios";
import searchImage from './services/unsplash'; // Module to fetch images and interact with the unsplash api
import homepage_goalpost from './assets/images/homepage_goalpost.jpg'

function App() {
  const [searchInput, setSearchInput] = useState("aurora") // Track the input in the ImageBox component
  const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page to display specific number of images
  const [images, setImages] = useState([]); // Store images that are fetched
  const [reloadImages, setReloadImages] = useState({value: false, resolution: ""}); // Flag to fetch images again
  const imagesPerPage = 4;

  console.log(images);
  console.log(searchInput)

  const handleSearchInput = (e) => {setSearchInput(e.target.value)} // Function to handle the input in the Search bar
  const handleReloadImages = (e) => { // Function to handle search button submit
    e.preventDefault();
    setReloadImages(true);
  } 
  useEffect(() => {
    const fetchImages = async () => {
      const allImages = searchInput ? await searchImage(searchInput) : await searchImage("Nature") ;
      console.log("🚀 ~ file: App.js:24 ~ fetchImages ~ allImages:", allImages)
      let id = 1;
      const mappedImages = allImages.map(item => {
        id++;
        return { id: id - 1, src: item}
      })
      setImages(mappedImages);
    }
    fetchImages();
    setReloadImages(false);
  }, [reloadImages])

  // Calculate the index range for images in the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <SearchBar searchInput={searchInput} handleSearchInput={handleSearchInput} handleReloadImages={handleReloadImages}/>
        <div className={styles.imageBoxContainer}>
          {images && images.slice(startIndex, endIndex).map((item) => {
            return <ImageBox text="nature" src={item.src}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
