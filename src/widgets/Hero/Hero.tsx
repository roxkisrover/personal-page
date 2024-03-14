import { useSpring, animated } from "@react-spring/web";

import logo from "@/shared/assets/images/x5-tech-logo.svg";
import { Divider, Ticker } from "@/features";

import styles from "./Hero.module.scss";

const START_DELAY = 150;

export function Hero() {
  const logoSprings = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: -15, opacity: 1 },
    delay: START_DELAY,
  });

  const nameSprings = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: START_DELAY,
  });

  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <animated.img
          className={styles.logo}
          src={logo}
          alt={"X5 Tech"}
          draggable={false}
          style={logoSprings}
        />
        <Divider />
        <animated.h1 className={styles.name} style={nameSprings}>
          Anton Nikolaenko
        </animated.h1>
      </div>
      <Ticker />
    </div>
  );
}
