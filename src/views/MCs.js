import React from 'react';
import ViewTemplate from 'templates/ViewTemplate';
import Item from 'components/molecules/Item/Item';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const MCs = ({ mcs }) => (
  <ViewTemplate pageType="mcs">
    {mcs.map(({ albumDescription, albumName, aritstName, albumImage, id }) => (
      <Item
        id={id}
        itemType="mcs"
        key={id}
        albumImage={albumImage}
        aritstName={aritstName}
        albumName={albumName}
        albumDescription={albumDescription}
      />
    ))}
  </ViewTemplate>
);

MCs.propTypes = {
  mcs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

MCs.defaultProps = {
  mcs: [],
};

const mapStateToProps = state => {
  const { mcs } = state;
  return { mcs };
};

export default connect(mapStateToProps)(MCs);
