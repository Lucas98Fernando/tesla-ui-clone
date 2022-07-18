import styled, { css } from "styled-components";

const defaultBackground = (url: string) => css`
  background-image: url(${url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  .colored:nth-child(1) {
    ${defaultBackground("images/tesla-wallpaper1.jpg")}
  }
  .colored:nth-child(2) {
    ${defaultBackground("images/tesla-wallpaper2.jpg")}
  }
  .colored:nth-child(3) {
    ${defaultBackground("images/tesla-wallpaper3.jpg")}
  }
  .colored:nth-child(4) {
    ${defaultBackground("images/tesla-wallpaper4.jpg")}
  }
  .colored:nth-child(5) {
    ${defaultBackground("images/tesla-wallpaper5.jpg")}
  }
  .colored:nth-child(6) {
    ${defaultBackground("images/tesla-wallpaper6.jpg")}
  }
  .colored:nth-child(7) {
    ${defaultBackground("images/tesla-wallpaper7.jpg")}
  }
`;
