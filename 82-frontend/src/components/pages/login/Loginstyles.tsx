import styled from 'styled-components';

export const FormGroup = styled.div`
    color: red; 
    display: block;
    border:  60px solid #2C3539;
    width: 300px;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #2C3539;
    box-shadow: 0px     0px 30px gold;
`;

export const Label = styled.label`
    margin-bottom: 0.5em;
    color: white;
    display: block;
`;

export const Input = styled.input`
    padding: 0.5em;
	color: black;
	background: papayawhip;
	border: none;
	border-radius: 30px;
	width: 100%;
	margin-bottom: 0.5em;
    font-size: 20px;
`;

export const Message = styled.label`
    margin-bottom: 0.5em;
    color: red;   
    display: block;
`;

export const Button = styled.button`
  padding: 5px 20px;
  color: black;
  font-size: 19px;
  font-weight: 700;
  border: 0px;
  border-radius: 30px;
  appearance: none;
  cursor: pointer;

    &:hover {
      background-color: #FF6600;
    }
`;