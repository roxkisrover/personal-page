import { styled } from "@linaria/react";

const LIST_GAP = "1rem";

export const Container = styled.div`
  margin-top: 26px;
  width: 100%;

  @media screen and (width >= 550px) {
    width: auto;
  }

  @media screen and (width >= 760px) {
    margin-top: 18px;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  gap: ${LIST_GAP};
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  color: var(--color-umbral-umber);
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: -1px;
    width: 24px;
    height: 100%;
    background-image: linear-gradient(90deg, var(--color-white-smoke), transparent);
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: -1px;
    width: 24px;
    height: 100%;
    background-image: linear-gradient(90deg, transparent, var(--color-white-smoke));
    z-index: 1;
  }

  ::selection {
    color: var(--color-white);
    background-color: var(--color-grass);
  }

  @media screen and (width >= 760px) {
    max-width: 600px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: ${LIST_GAP};
  margin: 0;
  padding: 0 0 0 100%;
  min-width: 100%;
  list-style: none;
  animation: 22s linear 1s infinite normal none running sliding;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes sliding {
    to {
      transform: translateX(-100%);
    }
  }
`;
