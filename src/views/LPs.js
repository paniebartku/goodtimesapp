import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewTemplate from 'templates/ViewTemplate';
import Item from 'components/molecules/Item/Item';

const LPs = ({ lps }) => (
  <ViewTemplate pageType="lps">
    {lps.map(({ albumDescription, albumName, aritstName, albumImage, id }) => (
      <Item
        id={id}
        itemType="lps"
        key={id}
        albumImage={albumImage}
        aritstName={aritstName}
        albumName={albumName}
        albumDescription={albumDescription}
      />
    ))}
  </ViewTemplate>
);

LPs.propTypes = {
  lps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

LPs.defaultProps = {
  lps: [],
};

const mapStateToProps = state => {
  const { lps } = state;
  return { lps };
};

export default connect(mapStateToProps)(LPs);
