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
  return (
    <div>
      <div className={styles.wrapper}>
        <ul className={styles.ticker}>
          {TECHNOLOGIES.concat(TECHNOLOGIES).map((item, index) => (
            <li key={`${index}-${item}`} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
