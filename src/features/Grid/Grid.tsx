import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import styles from "./Grid.module.scss";

const GRID_CODE = "iddqd"; // Hello, Doom fans :D

export function Grid() {
  const [code, setCode] = useState("");

  const keyLogger = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setCode("");
      return;
    }

    if (e.key.match(/^[a-z]$/)) {
      setCode((prevState) => prevState.concat(e.key));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyLogger);

    return () => {
      document.removeEventListener("keydown", keyLogger);
    };
  }, [keyLogger]);

  if (!code.includes(GRID_CODE)) {
    return null;
  }

  return createPortal(<div id={"grid"} className={styles.grid}></div>, document.body);
}
