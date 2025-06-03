import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import * as styles from "./styles";

const GRID_CODES = ["iddqd", "шввйв"] as const; // Hello, Doom fans :D

export const Grid = () => {
  const [inputCode, setInputCode] = useState("");

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setInputCode("");
      return;
    }

    if (event.key.match(/^[a-zа-я]$/)) {
      setInputCode((prevState) => prevState + event.key);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!GRID_CODES.some((code) => inputCode.includes(code))) {
    return null;
  }

  return createPortal(<styles.Lines id={"grid"} />, document.body);
};
