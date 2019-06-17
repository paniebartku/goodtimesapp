import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';
import LogoIcon from 'assets/icons/logo2.svg';
import CDIcon from 'assets/icons/cd.svg';
import LPIcon from 'assets/icons/lp.svg';
import MCIcon from 'assets/icons/mc.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  display: flex;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const StyledLogo = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1rem auto 0;
`;

const StyledIconsWrapper = styled.ul`
  list-style: none;
  display: inline-flex;
  margin-right: 3rem;
`;

const StyledLogoLink = styled(NavLink)``;

const Menu = () => (
  <StyledWrapper>
    <StyledLogoLink to="/">
      <StyledLogo src={LogoIcon} />
    </StyledLogoLink>

    <StyledIconsWrapper>
      <li>
        <MenuIcon as={NavLink} exact to="/" icon={CDIcon} activeclass="active">
          CDs
        </MenuIcon>
      </li>
      <li>
        <MenuIcon as={NavLink} to="/mcs" icon={MCIcon} activeclass="active">
          MCs
        </MenuIcon>
      </li>
      <li>
        <MenuIcon as={NavLink} to="/lps" icon={LPIcon} activeclass="active">
          LPs
        </MenuIcon>
      </li>
    </StyledIconsWrapper>
  </StyledWrapper>
);

export default Menu;
