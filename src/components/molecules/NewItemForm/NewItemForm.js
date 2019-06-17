import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Header from 'components/atoms/Header/Header';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

const StyledInput = styled(Input)`
  margin-top: 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'pink')};
  width: 80%;
  @media (max-width: 600px) {
    width: 96%;
  }
`;
const StyledTextArea = styled(Input)`
  margin: 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'pink')};
  width: 80%;
  @media (max-width: 600px) {
    width: 96%;
  }
`;
const StyledWrapper = styled.div`
  padding: 70px;
  border: 1px solid black;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  margin: 0 auto;
  max-width: 800px;
  min-height: calc(80% - 3.5rem);
  background-color: white;
  transform: translate(0, 100px);
  animation-name: animatetop;
  animation-duration: 0.4s;
  transition: transform 1s ease-in-out;
  position: fixed;
`;

const StyledForm = styled(Form)`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const NewItemForm = ({ pageType, addItem, closeModalFn, isModalOpen }) => (
  <StyledWrapper activecolor={pageType} isModalOpen={isModalOpen}>
    <Header big>Create new {pageType}</Header>
    <Formik
      initialValues={{}}
      onSubmit={values => {
        addItem(pageType, values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            activeColor={pageType}
            type="text"
            name="aritstName"
            placeholder="aritstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.aritstName}
          />

          <StyledInput
            activeColor={pageType}
            type="text"
            name="albumName"
            placeholder="albumName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.albumName}
          />
          <StyledInput
            activeColor={pageType}
            type="text"
            name="albumImage"
            placeholder="albumImage (link!!!)"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.albumImage}
          />
          <StyledTextArea
            as="textarea"
            activeColor={pageType}
            type="text"
            name="albumDescription"
            placeholder="albumDescription"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.albumDescription}
          />

          <Button type="submit" activecolor={pageType}>
            Add Album
          </Button>
        </StyledForm>
      )}
    </Formik>
    <Button secondary type="button" onClick={closeModalFn}>
      Close
    </Button>
  </StyledWrapper>
);

NewItemForm.propTypes = {
  pageType: PropTypes.oneOf(['cds', 'lps', 'mcs']),
  addItem: PropTypes.func.isRequired,
  closeModalFn: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
};

NewItemForm.defaultProps = {
  pageType: 'cds',
  isModalOpen: false,
};
const mapDispatchToProps = dispatch => ({
  addItem: (itemElement, itemContent) => dispatch(addItemAction(itemElement, itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewItemForm);
