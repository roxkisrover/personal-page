import { animated, useSpring } from "@react-spring/web";

import { Divider, Ticker } from "@/features";
import logo from "@/shared/assets/images/x5-tech-logo.svg";

import * as styles from "./styles";

const START_DELAY = 150;

export const Hero = () => {
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
    <styles.Hero>
      <styles.Title>
        <animated.img className={styles.logo} src={logo} alt={"X5 Tech"} draggable={false} style={logoSprings} />
        <Divider />
        <animated.h1 className={styles.name} style={nameSprings}>
          Anton Nikolaenko
        </animated.h1>
      </styles.Title>
      <Ticker />
    </styles.Hero>
  );
};
