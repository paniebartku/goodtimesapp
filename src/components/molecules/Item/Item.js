import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Header from 'components/atoms/Header/Header';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

import CDIcon from 'assets/icons/cd.svg';
import LPIcon from 'assets/icons/lp.svg';
import MCIcon from 'assets/icons/mc.svg';

const StyledAlbumImage = styled.img`
  max-height: 200px;
  max-width: 100%;
  border-radius: 50%;
`;

const StyledItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 77%;
  padding: 4.5rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 2rem;
    padding: 0;
    margin-top: 2rem;
  }
`;

const StyledItemInfo = styled.div`
  display: block;
  margin-left: 2rem;
  @media (max-width: 991px) {
    margin-right: 3rem;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const StyledIcon = styled.img`
  position: absolute;
  right: 2rem;
  top: 2rem;
  height: 20px;
  width: 20px;
`;

const StyledHeaderWrapper = styled.div`
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'pink')};
  border-radius: 5px;
  padding: 2rem;
  position: relative;
`;

const Item = ({
  id,
  itemType,
  removeItem,
  albumDescription,
  albumImage,
  aritstName,
  albumName,
}) => (
  <StyledItemWrapper activeColor={itemType}>
    <StyledAlbumImage src={albumImage} alt="" />
    <StyledItemInfo>
      <StyledHeaderWrapper activeColor={itemType}>
        <Header aritstName>{aritstName}</Header>
        <Header albumName>{albumName}</Header>
        {itemType === 'cds' && <StyledIcon src={CDIcon} />}
        {itemType === 'lps' && <StyledIcon src={LPIcon} />}
        {itemType === 'mcs' && <StyledIcon src={MCIcon} />}
      </StyledHeaderWrapper>
      <Paragraph>{albumDescription}</Paragraph>
      <Button onClick={() => removeItem(itemType, id)} secondary>
        REMOVE
      </Button>
    </StyledItemInfo>
  </StyledItemWrapper>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  albumDescription: PropTypes.string,
  itemType: PropTypes.oneOf(['cds', 'lps', 'mcs']),
  albumImage: PropTypes.string,
  aritstName: PropTypes.string,
  albumName: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
};

Item.defaultProps = {
  itemType: 'cds',
  albumDescription: 'Another great album',
  aritstName: 'Just5',
  albumName: 'Zaczarowany Świat',
  albumImage:
    'https://img.discogs.com/sFUdBWCqxwPplO3EYRPwKH7q4xE=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2981760-1310296607.jpeg.jpg',
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemElement, id) => dispatch(removeItemAction(itemElement, id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Item);
