import styled from 'styled-components';

export const List = styled.ul`
  width: 700px;
`;

export const ListItem = styled.li`
  font-family: -apple-system;
  font-weight: 400;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  :hover {
    color: blue;
  }
`;

export const ButtonDelete = styled.button`
  font-size: 20px;
  color: white;
  padding: 5px 10px;
  background-color: #1e88e5cf;
  border: 1px solid transparent;
  border-radius: 10px;
  width: 130px;
  
`;