import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewTemplate from 'templates/ViewTemplate';
import Item from 'components/molecules/Item/Item';

const CDs = ({ cds }) => (
  <ViewTemplate pageType="cds">
    {cds.map(({ albumDescription, albumName, aritstName, albumImage, id }) => (
      <Item
        id={id}
        itemType="cds"
        key={id}
        albumImage={albumImage}
        aritstName={aritstName}
        albumName={albumName}
        albumDescription={albumDescription}
      />
    ))}
  </ViewTemplate>
);

CDs.propTypes = {
  cds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

CDs.defaultProps = {
  cds: [],
};

const mapStateToProps = state => {
  const { cds } = state;
  return { cds };
};

export default connect(mapStateToProps)(CDs);
