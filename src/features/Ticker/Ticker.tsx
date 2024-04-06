import { useMemo } from "react";

import * as styles from "./styles";

const TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Preact",
  "Redux",
  "SWR",
  "CSS Modules/Sass/Less",
  "CSS-in-JS",
  "Next.js",
  "Webpack",
  "Vite",
  "Express.js",
  "Jest",
  "Git",
  "ESLint",
  "Stylelint",
  "SonarLint",
  "Docker",
] as const;

export function Ticker() {
  const list = useMemo(() => Array(10).fill(TECHNOLOGIES).flat(), []);

  return (
    <styles.Container>
      <styles.ListWrapper>
        <styles.List>
          {list.map((tech, index) => (
            <styles.ListItem key={`${index}-${tech}`}>{tech}</styles.ListItem>
          ))}
        </styles.List>
      </styles.ListWrapper>
    </styles.Container>
  );
}
