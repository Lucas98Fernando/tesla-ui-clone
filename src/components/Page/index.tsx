import DefaultOverlay from "../DefaultOverlay";
import { ModelSection, ModelsWrapper } from "../Model";
import { Container, Spacer } from "./styles";
import Models from "../Model/Models";
import UniqueOverlay from "../UniqueOverlay";

export default function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {Models.map((modelName, index) => (
            <ModelSection
              key={index}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlay
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}
