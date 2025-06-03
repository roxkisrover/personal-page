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

export const Ticker = () => {
  return (
    <styles.Container>
      <styles.ListWrapper>
        <styles.List>
          {TECHNOLOGIES.map((tech, index) => (
            <li key={`${index}-${tech}`}>{tech}</li>
          ))}
        </styles.List>
      </styles.ListWrapper>
    </styles.Container>
  );
};
