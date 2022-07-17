import { PropsWithChildren } from "react";
import { Container } from "./styles";

export default function ModelOverlay({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
