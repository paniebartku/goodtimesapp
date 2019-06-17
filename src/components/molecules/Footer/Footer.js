import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'pink')};
  width: 100%;
  padding: 15px 2rem;
  margin: 2rem 0 auto;
`;

const Footer = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <Paragraph>This is React.js and app for my music library.</Paragraph>
  </StyledWrapper>
);

Footer.propTypes = {
  pageType: PropTypes.oneOf(['cds', 'mcs', 'lps']),
};

Footer.defaultProps = {
  pageType: 'cds',
};

export default Footer;
