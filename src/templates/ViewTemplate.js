import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from 'components/molecules/Menu/Menu';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PropTypes from 'prop-types';

import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';
import NewItemForm from 'components/molecules/NewItemForm/NewItemForm';
import Footer from 'components/molecules/Footer/Footer';

import CDIcon from 'assets/icons/cd.svg';
import LPIcon from 'assets/icons/lp.svg';
import MCIcon from 'assets/icons/mc.svg';

const SyledListWrapper = styled.div`
  position: relative;
  padding-top: 200px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background: ${({ isModalOpen }) => (isModalOpen ? 'red' : 'white')};

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderMain = styled.div``;

const StyledMenuIcon = styled(MenuIcon)`
  height: 4rem;
  padding: 1rem;
  align-items: center;
  cursor: pointer;
`;

const StyledPageType = styled(Header)`
  text-transform: uppercase;
`;

class ViewTemplate extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { children, pageType } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <Menu pageType={pageType} />
        <SyledListWrapper pageType={pageType}>
          <StyledHeader>
            <StyledHeaderMain>
              <StyledPageType>{pageType}</StyledPageType>
              <Paragraph>Amazing collection of {pageType}</Paragraph>
            </StyledHeaderMain>
            {pageType === 'cds' && (
              <StyledMenuIcon onClick={this.openModal} icon={CDIcon}>
                Add
              </StyledMenuIcon>
            )}
            {pageType === 'mcs' && (
              <StyledMenuIcon onClick={this.openModal} icon={MCIcon}>
                Add
              </StyledMenuIcon>
            )}
            {pageType === 'lps' && (
              <StyledMenuIcon onClick={this.openModal} icon={LPIcon}>
                Add
              </StyledMenuIcon>
            )}
          </StyledHeader>
          <StyledList>{children}</StyledList>
          {isModalOpen && (
            <NewItemForm
              pageType={pageType}
              isModalOpen={isModalOpen}
              closeModalFn={this.closeModal}
            />
          )}
        </SyledListWrapper>
        <Footer pageType={pageType} />
      </>
    );
  }
}

ViewTemplate.propTypes = {
  pageType: PropTypes.oneOf(['cds', 'mcs', 'lps']),
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ViewTemplate.defaultProps = {
  pageType: 'cds',
};
export default ViewTemplate;
