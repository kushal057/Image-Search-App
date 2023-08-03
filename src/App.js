import styles from './App.module.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
    </div>
  );
}

export default App;
