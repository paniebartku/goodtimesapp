import styled, { css } from 'styled-components';

const Header = styled.h2`
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-weight: ${({ theme }) => theme.bold};

  ${({ albumName }) =>
    albumName &&
    css`
      font-size: 2.6rem;
    `}
`;

export default Header;
