import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { destroyUser, clearError } from '../../../reducers/reducer.user';
import domainConfig from '../../../config/domainConfig';

// Components
import FormField from '../../../form/FormField';
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';

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
    const { handleSubmit, error, match } = this.props;

    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.resign.title} path={match.url} />
        <form action="post" onSubmit={handleSubmit(this.onDestroy.bind(this))}>
          <FormField.ResignField error={error} />
          <Element.SubmitButton type="submit">Resign</Element.SubmitButton>
        </form>
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
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
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
