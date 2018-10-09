import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Quill from 'quill';
import { signOut } from '../../../reducers/reducer.auth';
import { createResignSurvey } from '../../../reducers/reducer.resignSurvey';
import { setPopupHeaderMessage } from '../../../reducers/reducer.popup';
import dataConfig from '../../../dataConfig';

// Components
import Loadable from '../../../loadable';
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './MyInfo.styled';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';

class ResignSurvey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popupFilter: false,
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
        placeholder: dataConfig.resignSurveyText,
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

      const { error, setPopup } = this.props;
      if (!error) {
        setPopup(dataConfig.popupMessage.resignSurvey);
        this.setState({ popupFilter: true });
      }
    }
  }

  clearError() {
    this.setState({ required: '' });
  }

  render() {
    const { required, popupFilter } = this.state;
    const { handleSubmit, history, error } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Resign Survey" />
        <Styled.InfoWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Styled.QuillEditor id="editor" />
            <div>
              <StyledBase.Small>{required}</StyledBase.Small>
              <StyledBase.Small>{error}</StyledBase.Small>
            </div>
            <Styled.AlignRightButton type="submit">
              Send
            </Styled.AlignRightButton>
          </form>
        </Styled.InfoWrapper>
        {popupFilter ? (
          <Loadable.SimplePopup replace={history.replace} destination="/main" />
        ) : null}
      </StyledBase.FlexWrapper>
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
  setPopup: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  error: state.resignSurvey.error,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
  create: formData => dispatch(createResignSurvey(formData)),
  setPopup: payload => dispatch(setPopupHeaderMessage(payload)),
});

export default reduxForm({
  form: 'ResignSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ResignSurvey),
);
