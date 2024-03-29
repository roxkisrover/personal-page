import { useMemo } from "react";

import * as styles from "./styles";

const TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Redux",
  "SWR",
  "CSS Modules/Sass/Less",
  "CSS-in-JS",
  "Webpack",
  "Vite",
  "Express.js",
  "Jest",
  "REST",
  "Git",
  "ESLint",
  "Stylelint",
  "Docker",
] as const;

export function Ticker() {
  const list = useMemo(() => new Array(10).fill(TECHNOLOGIES).flat(), []);

  return (
    <styles.Container>
      <styles.ListWrapper>
        <styles.List>
          {list.map((item, index) => (
            <styles.ListItem key={`${index}-${item}`}>{item}</styles.ListItem>
          ))}
        </styles.List>
      </styles.ListWrapper>
    </styles.Container>
  );
}
