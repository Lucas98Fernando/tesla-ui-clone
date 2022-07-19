import { useTransform } from "framer-motion";
import useWrapperScroll from "../Model/hooks/useWrapperScroll";
import { Container, Header, Logo, Menu, Footer } from "./styles";
import TeslaLogo from "/images/tesla-logo.svg";

export default function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo>
          <img src={TeslaLogo} alt="Logo" />
        </Logo>
        <Menu>
          <span>Menu</span>
        </Menu>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}
