import { useSpring, animated } from "@react-spring/web";

import styles from "./App.module.scss";
import logo from "./assets/images/x5-tech-logo.svg";

function App() {
  const logoSprings = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: -15, opacity: 1 },
    delay: 200,
  });
  const nameSprings = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 200,
  });

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <animated.img
            className={styles.logo}
            src={logo}
            alt={"X5 Tech"}
            draggable={false}
            style={logoSprings}
          />
          <div className={styles.times}>&times;</div>
          <animated.h1 className={styles.name} style={nameSprings}>
            Anton Nikolaenko
          </animated.h1>
        </div>
      </div>
    </div>
  );
}

export default App;
