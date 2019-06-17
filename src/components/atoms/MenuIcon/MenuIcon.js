import styled from 'styled-components';

const MenuIcon = styled.a`
  display: block;
  padding: 1rem;
  min-width: 10rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center right;
  border: none;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  color: ${({ theme }) => theme.black};
  &.active,
  &:hover {
    color: black;
  }
  @media (max-width: 400px) {
    background-size: 30%;
    min-width: 7rem;
  }
`;

export default MenuIcon;
