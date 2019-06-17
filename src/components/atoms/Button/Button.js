import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 2.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #29060c;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      margin-top: 1rem;
    `}
`;

export default Button;
