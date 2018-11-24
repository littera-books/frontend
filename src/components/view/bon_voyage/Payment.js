import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import Helmet from '../../helmet/Helmet';
import BasicFormField from '../../../form/FormField';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './BonVoyage.styled';

const Payment = () => (
  <Wrapper.FlexWrapper>
    <Helmet pageTitle="Payment" />
    <Styled.InfoWrapper>
      <form action="">
        <h1>Delivery Address</h1>
        <Wrapper.BetweenWrapper>
          <Field
            id="address-contact"
            label="Contact Address"
            name="address"
            type="radio"
            value="contact"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="address-recent"
            label="Recent"
            name="address"
            type="radio"
            value="recent"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="address-new"
            label="New"
            name="address"
            type="radio"
            value="new"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
        </Wrapper.BetweenWrapper>
        <h1>Payment Option</h1>
        <Wrapper.BasicBlockWrapper>
          <Field
            id="address-contact"
            label="Contact Address"
            name="address"
            type="radio"
            value="contact"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="address-recent"
            label="Recent"
            name="address"
            type="radio"
            value="recent"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="address-new"
            label="New"
            name="address"
            type="radio"
            value="new"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="address-contact"
            label="Contact Address"
            name="address"
            type="radio"
            value="contact"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
          <Field
            id="address-recent"
            label="Recent"
            name="address"
            type="radio"
            value="recent"
            component={BasicFormField.AcceptProvisionFormField}
            required
          />
        </Wrapper.BasicBlockWrapper>
      </form>
    </Styled.InfoWrapper>
  </Wrapper.FlexWrapper>
);

export default reduxForm({
  form: 'PaymentForm',
})(Payment);
