import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const globals = css`
  :global() {
    :root {
      --color-electric-ultramarine: #3700ff;
      --color-flaming-hot-flamingoes: #ff0059;
      --color-grass: #5faf2d;
      --color-white: #fff;
      --color-white-smoke: #f5f5f5;
      --color-umbral-umber: rgb(80 0 0 / 50%);

      font-family: "X5 Sans", Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-style: normal;
      font-optical-sizing: auto;
      font-synthesis: none;
      line-height: 1.6;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    html {
      height: 100%;
      box-sizing: border-box;
    }

    body {
      margin: 0;
      height: 100%;
    }

    #root {
      height: 100%;
    }

    @font-face {
      font-family: "X5 Sans";
      src: url("/x5sans-regular.woff2") format("woff2");
      font-display: block;
      font-weight: normal;
      font-style: normal;
    }
  }
`;

export const Container = styled.div`
  padding: 60px 20px;
  height: 100%;
  background-color: var(--color-white);
`;
