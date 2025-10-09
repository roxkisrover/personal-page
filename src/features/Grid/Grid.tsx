import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import * as styles from "./styles";

const GRID_CODES = ["iddqd", "шввйв"] as const; // Hello, Doom fans :D
const MAX_CODE_LENGTH = Math.max(...GRID_CODES.map((code) => code.length));

export const Grid = () => {
  const [inputCode, setInputCode] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setInputCode("");
        return;
      }

      if (event.key.match(/^[a-zа-я]$/)) {
        setInputCode((prevState) => {
          const newCode = prevState + event.key;
          return newCode.length > MAX_CODE_LENGTH ? newCode.slice(-MAX_CODE_LENGTH) : newCode;
        });
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  if (!GRID_CODES.some((code) => inputCode.endsWith(code))) {
    return null;
  }

  return createPortal(<styles.Lines id={"grid"} />, document.body);
};
