import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;

  @media screen and (width >= 550px) {
    width: auto;
  }

  @media screen and (width >= 760px) {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  padding-left: 100%;
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
    width: 20px;
    height: 100%;
    background-image: linear-gradient(90deg, var(--color-white-smoke), transparent);
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: -1px;
    width: 20px;
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
  display: inline-block;
  margin: 0;
  padding: 0 100% 0 0;
  list-style-type: none;
  white-space: nowrap;
  animation: 180s linear 1s infinite normal none running sliding;

  @keyframes sliding {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
`;
