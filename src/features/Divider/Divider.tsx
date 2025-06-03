import { useState } from "react";
import { cx } from "@linaria/core";

import * as styles from "./styles";

const EMOJI_LIST = ["🚀", "⭐", "😋", "🤘", "👍", "🫶", "😎", "🤖", "📡", "😉", "🦉"] as const;

type TEmojiList = (typeof EMOJI_LIST)[number];

export const Divider = () => {
  const [currentEmoji, setCurrentEmoji] = useState<TEmojiList | null>(null);

  const handleClick = () => {
    const availableEmojis = currentEmoji ? EMOJI_LIST.filter((emoji) => emoji !== currentEmoji) : EMOJI_LIST;
    /* eslint-disable-next-line sonarjs/pseudo-random */
    const randomIndex = Math.floor(Math.random() * availableEmojis.length);
    const nextEmoji = availableEmojis[randomIndex];

    setCurrentEmoji(nextEmoji);
  };

  return (
    <button className={cx(styles.btn, currentEmoji ? styles.emoji : styles.times)} onClick={handleClick}>
      {currentEmoji ?? <>&times;</>}
    </button>
  );
};
