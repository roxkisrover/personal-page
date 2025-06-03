import { Grid } from "@/features";
import { Hero } from "@/widgets";

import * as styles from "./styles";

const App = () => {
  return (
    <styles.Container>
      <Hero />
      <Grid />
    </styles.Container>
  );
};

export default App;
