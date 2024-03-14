import { useMemo } from "react";

import styles from "./Ticker.module.scss";

const TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Redux",
  "SWR",
  "Webpack",
  "Vite",
  "Express.js",
  "CSS/Sass/Less",
  "CSS-in-JS",
  "REST",
  "Git",
  "Jest",
  "ESLint",
  "Stylelint",
] as const;

export function Ticker() {
  const list = useMemo(() => new Array(10).fill(TECHNOLOGIES).flat(), []);

  return (
    <div>
      <div className={styles.wrapper}>
        <ul className={styles.ticker}>
          {list.map((item, index) => (
            <li key={`${index}-${item}`} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
