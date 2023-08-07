import {useState, react} from 'react'
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import SearchBar from "./components/SearchBar";
import ImageBox from "./components/ImageBox";
import searchImage from './services/unsplash';
import homepage_goalpost from './assets/images/homepage_goalpost.jpg'

const allImages = await searchImage("nature");


function App() {
  const [images, setImages] = useState([]);
  
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <SearchBar/>
        <div className={styles.imageBoxContainer}>
          <ImageBox text="Nature" src={homepage_goalpost}/>
          <ImageBox text="Nature" src={homepage_goalpost}/>
          <ImageBox text="Nature" src={homepage_goalpost}/>
          <ImageBox text="Nature" src={homepage_goalpost}/>
        </div>
      </div>
    </div>
  );
}

export default App;
