import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.regular};
  line-height: 2.6rem;
`;

export default Paragraph;
