import { styled } from "@linaria/react";

export const Lines = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgb(32 160 255 / 35%) 1px, transparent 1px);
  background-size: 100% 1.625rem;
  pointer-events: none;
  z-index: 1000;
`;
