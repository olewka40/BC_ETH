import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 5px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;
export const AddProductComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledTextField = styled(TextField)`
  margin: 5px !important;
`;
export const StyledButton = styled(Button)`
  margin: 5px !important;
`;
