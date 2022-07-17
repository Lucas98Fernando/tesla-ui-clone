import { PropsWithChildren, useCallback, useRef, useState } from "react";
import ModelsContext, { CarModel } from "../context/ModelsContext";
import { Container, OverlaysRoot } from "./styles";
import ModelOverlay from "../ModelOverlay";

export default function ModelsWrapper({ children }: PropsWithChildren) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((model) => model.modelName === modelName) || null
      );
    },
    [registeredModels]
  );

  return (
    // Context API
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName}>{item.overlayNode}</ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </ModelsContext.Provider>
  );
}
