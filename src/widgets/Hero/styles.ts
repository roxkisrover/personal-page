import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 100%;
  background-color: var(--color-white-smoke);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
  user-select: none;

  @media screen and (width >= 760px) {
    flex-direction: row;
  }
`;

export const logo = css`
  display: block;
  height: 66px;
  width: auto;
  transition: all 200ms ease-out;
`;

export const name = css`
  display: block;
  margin: 0;
  font-size: 50px;
  line-height: 1;
  text-align: center;
  color: transparent;
  background-image: linear-gradient(
    90deg,
    var(--color-electric-ultramarine),
    var(--color-flaming-hot-flamingoes)
  );
  background-clip: text;
  transition: all 200ms ease-out;
  cursor: default;

  @media screen and (width >= 760px) {
    line-height: 1.32;
    text-align: left;
  }
`;
