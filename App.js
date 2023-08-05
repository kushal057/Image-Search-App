import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
