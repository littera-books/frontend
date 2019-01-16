import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Quill from 'quill';
import { signOut } from '../../../reducers/reducer.auth';
import { createResignSurvey } from '../../../reducers/reducer.resignSurvey';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';

class ResignSurvey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quill: '',
      required: '',
    };

    this.clearError = this.clearError.bind(this);
  }

  componentDidMount() {
    const { logOut } = this.props;
    logOut();

    this.setState({
      quill: new Quill('#editor', {
        placeholder: dataConfig.placeholderText,
        theme: 'bubble',
      }),
    });
    window.addEventListener('keydown', this.clearError);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clearError);
  }

  static getDerivedStateFromProps(prevState, nextProps) {
    if (nextProps.quill !== '') {
      nextProps.quill.focus();
      return null;
    }
    return null;
  }

  async onSubmit() {
    const { quill } = this.state;

    if (quill.getLength() === 1) {
      this.setState({ required: '반드시 내용을 입력하세요' });
    } else {
      const { create } = this.props;
      const content = JSON.stringify(quill.getContents());
      const formData = new FormData();

      formData.append('content', content);
      await create(formData);

      const { error, history } = this.props;
      if (!error) {
        history.replace(domainConfig.resignComplete.path);
      }
    }
  }

  clearError() {
    this.setState({ required: '' });
  }

  render() {
    const { required } = this.state;
    const { handleSubmit, error, match } = this.props;
    return (
      <Wrapper.BasicBlockWrapper>
        <Helmet pageTitle={domainConfig.resignSurvey.title} path={match.url} />
        <Element.BasicTitle size="0.75rem">
          {dataConfig.resignSurveyText}
        </Element.BasicTitle>
        <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Wrapper.QuillEditor id="editor" />
          <div>
            <Element.BasicSmall>{required}</Element.BasicSmall>
            <Element.BasicSmall>{error}</Element.BasicSmall>
          </div>
          <Element.SubmitButton type="submit">Send</Element.SubmitButton>
        </form>
      </Wrapper.BasicBlockWrapper>
    );
  }
}

ResignSurvey.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.resignSurvey.error,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
  create: formData => dispatch(createResignSurvey(formData)),
});

export default reduxForm({
  form: 'ResignSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ResignSurvey),
);
