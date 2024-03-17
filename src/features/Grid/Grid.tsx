import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import * as styles from "./styles";

const GRID_CODES = ["iddqd", "шввйв"]; // Hello, Doom fans :D

export function Grid() {
  const [code, setCode] = useState("");

  const keyLogger = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setCode("");
      return;
    }

    if (e.key.match(/^[a-zа-я]$/)) {
      setCode((prevState) => prevState.concat(e.key));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyLogger);

    return () => {
      document.removeEventListener("keydown", keyLogger);
    };
  }, [keyLogger]);

  if (GRID_CODES.some((item) => code.includes(item))) {
    return null;
  }

  return createPortal(<styles.Lines id={"grid"}></styles.Lines>, document.body);
}
