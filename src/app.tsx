import styles from "./App.module.scss";
import logo from "./assets/images/x5-tech-logo.svg";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <img className={styles.logo} src={logo} alt={"X5 Tech"} />
          <div className={styles.times}>&times;</div>
          <h1 className={styles.name}>Anton Nikolaenko</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
