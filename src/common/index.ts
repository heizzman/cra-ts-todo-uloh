import styled from 'styled-components';


export const TodoForm = styled.div`
  background: #fafafa;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 5rem;
  padding: 20px;
  margin-left: 1px;
  border-radius: 5px;
  background: #845ec2;
  color: #fafafa;
  cursor: pointer;
  border: none;
  outline: none;
  &:disabled {
    background: #b0a8b9;
  }
`;

export const Input = styled.input`
  font-size: 1.1rem;
  width: 62rem;
  padding: 1rem;
  border: 1px solid #8869e2ba;
  border-radius: 5px;
`;

export const Edit = styled.input`
  font-size: 1.1rem;
  width: 40rem;
  padding: 1rem;
  border: 1px solid #8869e2ba;
  border-radius: 5px;
`;

export const Todos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  width: 60%;
  border-bottom: 2px solid #cecece;
  color: #333333;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  width: 2rem;
  &:focus {
    outline: 1;
  }
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  // align-items: stretch;
`;

export const EditButton = styled.button`
  margin-left: 10px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`;

export const Section = styled.section`
  color: white;
  padding: 10px;
  background: cornflowerblue;
`

export const Box = styled.div`
  background: mediumseagreen;
  border-left: 10px solid red;
`