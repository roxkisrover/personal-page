import { useState } from "react";
import clsx from "clsx";

import styles from "./Divider.module.scss";

const EMOJI_LIST = ["🚀", "⭐", "😋", "✨", "🤘", "🫶", "😎", "🤖", "📡", "😉", "🦉"] as const;

type TEmojiList = (typeof EMOJI_LIST)[number];

export function Divider() {
  const [emoji, setEmoji] = useState<TEmojiList | null>(null);

  const handleClick = () => {
    const nextList = emoji ? EMOJI_LIST.filter((item) => item !== emoji) : EMOJI_LIST;
    const nextIndex = Math.floor(Math.random() * nextList.length);
    const nextEmoji = nextList[nextIndex];

    setEmoji(nextEmoji);
  };

  return (
    <button
      className={clsx(styles.divider, emoji ? styles.emoji : styles.times)}
      onClick={handleClick}
    >
      {emoji ?? <>&times;</>}
    </button>
  );
}
