import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Component
import Helmet from '../../helmet/Helmet';

// Stylec
import Wrapper from '../../../styled_base/Wrapper';
import BasicFormField from '../../../styled_base/FormField';
import Styled from './Survey.styled';
import FormField from './FormField';

class AddInfo extends React.Component {
  componentDidMount() {
    const { result } = this.props;
    console.log(result);
  }

  async onSubmit(payload) {
    console.log(payload);
    console.log(this.props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Add Info" />
        <Wrapper.ColumnWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Wrapper.BetweenWrapper>
              <Field
                type="text"
                name="firstName"
                placeholder="first name"
                component={BasicFormField.PlaceholderFormField}
              />
              <Field
                type="text"
                name="lastName"
                placeholder="last name"
                component={BasicFormField.PlaceholderFormField}
              />
            </Wrapper.BetweenWrapper>
            <Field
              type="email"
              name="email"
              placeholder="E-mail address (your identification)"
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="tel"
              name="phone"
              placeholder="Contact No."
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="text"
              name="address"
              placeholder="Contact Address (Where your books arrive)"
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="password"
              name="password1"
              placeholder="Password (With 8 characters or more)"
              component={FormField.LongPlaceholderFormField}
            />
            <Field
              type="password"
              name="password2"
              placeholder="Confirm password"
              component={FormField.LongPlaceholderFormField}
            />
            <Styled.AlignRightButton type="submit">
              Register
            </Styled.AlignRightButton>
          </form>
        </Wrapper.ColumnWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

AddInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  result: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  result: state.question.result,
});

export default reduxForm({
  form: 'AddInfoForm',
})(connect(mapStateToProps)(AddInfo));
