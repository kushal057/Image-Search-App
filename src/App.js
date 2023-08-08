import { useState, useEffect, react } from 'react'
import axios from "axios";
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import SearchBar from "./components/SearchBar";
import ImageBox from "./components/ImageBox";
import ChangePage from "./components/ChangePage";
import searchImage from './services/unsplash'; // Module to fetch images and interact with the unsplash api
import homepage_goalpost from './assets/images/homepage_goalpost.jpg'

function App() {
  const [searchInput, setSearchInput] = useState("aurora") // Track the input in the ImageBox component
  const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page to display specific number of images
  const [images, setImages] = useState([]); // Store images that are fetched
  const [reloadImages, setReloadImages] = useState(false); // Flag to fetch images again
  const [resolution, setResolution] = useState(""); // Set the resolution of the images to be fetched
  const [imagesPerPage, setImagesPerPage] = useState(4) // Set images to be displayed per page
  
  const totalPage = Math.floor(images.length / imagesPerPage);

  const handleSearchInput = (e) => {setSearchInput(e.target.value)} // Function to handle the input in the Search bar
  const handleReloadImages = (e) => { // Function to handle search button submit
    e.preventDefault();
    setReloadImages(true);
  } 
  const handlePreviousPage = (e) => { // Function to navigate to the previous page 
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = (e) => { // Function to navigate to the next page 
    if(currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handleResolution = (e) => { //Set the resolution value for the api call
    const resolution = e.target.textContent.split(" ")[0].toLowerCase(); 
    setResolution(resolution);
    console.log("resolution app js", resolution)
  }

  useEffect(() => {
    const fetchImages = async () => {
      const allImages = await searchImage(searchInput, resolution);
      console.log("🚀 ~ file: App.js:24 ~ fetchImages ~ allImages:", allImages)
      let id = 1;
      const mappedImages = allImages.map(item => {
        id++;
        return { id: id - 1, src: item}
      })
      setImages(mappedImages);
    }
    setCurrentPage(1);
    fetchImages();
    setReloadImages(false);
  }, [reloadImages, resolution])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setImagesPerPage(2);
      } else {
        setImagesPerPage(4);
      }
    };
  
    // Call the handleResize function initially to set the correct imagesPerPage value on component mounts
    // though this is not required in our case because we have set it to correct value upon the state variable initialization
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      // Cleanup function to remove the event listener when the component unmounts because the event listener is attached to window object
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  // Calculate the index range for images in the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  return (
    <div className={styles.app}>
      <Sidebar handleResolution={handleResolution}/>
      <div className={styles.mainContent}>
        <SearchBar searchInput={searchInput} handleSearchInput={handleSearchInput} handleReloadImages={handleReloadImages}/>
        <div className={styles.imageBoxContainer}>
          {images && images.slice(startIndex, endIndex).map((item) => {
            return <ImageBox key={item.id} src={item.src}/>
          })}
        </div>
        <ChangePage currentPage={currentPage} totalPage={totalPage} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage}/>
      </div>
    </div>
  );
}

export default App;
