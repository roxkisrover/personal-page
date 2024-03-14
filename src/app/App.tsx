import { Hero } from "@/widgets";
import { Grid } from "@/features";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Hero />
      <Grid />
    </div>
  );
}

export default App;
