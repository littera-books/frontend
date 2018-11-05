import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';

// Components
import Helmet from '../../helmet/Helmet';
import BasicFormField from '../../../form/FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './Survey.styled';

const onSubmit = (history) => {
  history.push('/add-info');
};

const Accept = ({ handleSubmit, getErrors, history }) => (
  <Wrapper.FlexWrapper>
    <Helmet pageTitle="Accept" />
    <Styled.InfoWrapper>
      <form onSubmit={handleSubmit(onSubmit.bind(null, history))}>
        <h1>
          <strong>리테라 서비스 이용약관</strong>
        </h1>
        <Styled.AlignRightRadioGroup>
          <Field
            id="terms-accept"
            label="동의"
            name="terms"
            type="radio"
            value="accept"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="terms-denied"
            label="미동의"
            name="terms"
            type="radio"
            value="denied"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
        </Styled.AlignRightRadioGroup>
        {getErrors.terms && (
          <div style={{ textAlign: 'right' }}>
            <Element.BasicSmall>{getErrors.terms}</Element.BasicSmall>
          </div>
        )}
        <h1>
          <strong>리테라 개인정보 이용방침</strong>
        </h1>
        <Styled.AlignRightRadioGroup>
          <Field
            id="privacy-accept"
            label="동의"
            name="privacy"
            type="radio"
            value="accept"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="privacy-denied"
            label="미동의"
            name="privacy"
            type="radio"
            value="denied"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
        </Styled.AlignRightRadioGroup>
        {getErrors.privacy && (
          <div style={{ textAlign: 'right' }}>
            <Element.BasicSmall>{getErrors.privacy}</Element.BasicSmall>
          </div>
        )}
        <Styled.AlignRightButton type="submit">Submit</Styled.AlignRightButton>
      </form>
    </Styled.InfoWrapper>
  </Wrapper.FlexWrapper>
);

Accept.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getErrors: PropTypes.objectOf(PropTypes.string).isRequired,
};

const validate = (values) => {
  const errors = {};
  if (values.terms === 'denied') {
    errors.terms = 'Please accept Terms of Use.';
  }
  if (values.privacy === 'denied') {
    errors.privacy = 'Please accept Privacy Policy.';
  }
  return errors;
};

const mapStateToProps = state => ({
  getErrors: getFormSyncErrors('AcceptForm')(state),
});

export default reduxForm({
  form: 'AcceptForm',
  validate,
})(connect(mapStateToProps)(Accept));
