// import components
import BasicButton from "../../components/Buttons/BasicButton/BasicButton";

//import styled components
import { ButtonsContainer, SectionHeader } from "./styles";

const Buttons: React.FC = () => {
  return (
    <ButtonsContainer>
      <SectionHeader>Buttons</SectionHeader>
      <BasicButton />
    </ButtonsContainer>
  );
};

export default Buttons;
