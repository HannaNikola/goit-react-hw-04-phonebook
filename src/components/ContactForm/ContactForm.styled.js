import styled from 'styled-components';
import { Form, ErrorMessage, Field} from 'formik';



export const StyleForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  gap: ${p => p.theme.spacing(2)};
  margin: auto;
`;

export const InputStyle = styled(Field)`
  padding: 5px;
 
`;


export const Box = styled.div`
  border: 1px solid #1e88e5cf;
  width: 500px;
  padding: 50px;
`;

export const ButtonAdd = styled.button`
  font-size: 20px;
  color: white;
  padding: 5px 10px;
  background-color: #1e88e5cf;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 15px;

  &:hover {
    color: red;
  }
`;

export const StyleError = styled(ErrorMessage)`
color: red;
`;