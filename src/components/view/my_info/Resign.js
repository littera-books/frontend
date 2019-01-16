import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { destroyUser, clearError } from '../../../reducers/reducer.user';
import domainConfig from '../../../config/domainConfig';

// Components
import BasicFormField from '../../../form/BasicFormField';
import Validation from '../../../form/Validation';
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './MyInfo.styled';

class Resign extends React.Component {
  componentDidMount() {
    const { initialize, userId } = this.props;

    initialize({
      userId,
    });
  }

  async onDestroy(payload) {
    const { destroy, history } = this.props;
    await destroy(payload);

    const { error } = this.props;
    if (!error) {
      history.replace(domainConfig.resignSurvey.path);
    }
  }

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.resign.title} />
        <Styled.LineHeightForm
          action="post"
          onSubmit={handleSubmit(this.onDestroy.bind(this))}
        >
          <Field
            type="password"
            name="password"
            placeholder="Write your password..."
            border="1px solid black"
            width="20rem"
            component={BasicFormField}
            validate={Validation.required}
          />
          <div>
            <Element.BasicSmall>{error}</Element.BasicSmall>
          </div>
          <Element.SubmitButton type="submit">Resign</Element.SubmitButton>
        </Styled.LineHeightForm>
      </Wrapper.FlexWrapper>
    );
  }
}

Resign.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  initialize: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  destroy: payload => dispatch(destroyUser(payload)),
  clear: () => dispatch(clearError()),
});

export default reduxForm({
  form: 'ResignForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Resign),
);
