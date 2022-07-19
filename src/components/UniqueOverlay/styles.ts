import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: sticky;
  inset: 0;
`;

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 2rem 0;
`;

export const Logo = styled.div`
  img {
    width: 150px;
  }
`;

export const Menu = styled.div``;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 0 30px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
    }

    & + li {
      margin: 10px 0 0;
    }

    a {
      text-decoration: none;
      color: #393c41;

      &:hover {
        color: #000;
      }
    }
  }

  @media (min-width: 600px) {
    margin: 0 0 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
