import { css } from "@linaria/core";

export const btn = css`
  padding: 0 18px;
  border: none;
  border-radius: 0;
  font: inherit;
  text-align: inherit;
  color: inherit;
  background: none;
  box-shadow: none;
  appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media screen and (width >= 760px) {
    padding: 0 6px;
  }
`;

export const times = css`
  font-size: 36px;
  line-height: 1.28;
  color: var(--color-electric-ultramarine);

  @media screen and (width >= 760px) {
    font-size: 40px;
    line-height: 1.65;
  }
`;

export const emoji = css`
  font-size: 30px;
  line-height: 1.536;

  @media screen and (width >= 760px) {
    line-height: 2.2;
  }
`;
