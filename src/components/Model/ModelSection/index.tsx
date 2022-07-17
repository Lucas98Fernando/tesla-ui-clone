import React, { ReactNode, useEffect, useRef } from "react";
import useModel from "../hooks/useModel";
import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}

export default function ModelSection({
  modelName,
  overlayNode,
  children,
  ...props
}: Props) {
  const { registerModel } = useModel(modelName);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [modelName, overlayNode, registerModel]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
}
