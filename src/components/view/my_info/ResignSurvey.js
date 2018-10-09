import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Quill from 'quill';
import { signOut } from '../../../reducers/reducer.auth';
import dataConfig from '../../../dataConfig';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './MyInfo.styled';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';

class ResignSurvey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quill: '',
      error: '',
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

  onSubmit() {
    const { quill } = this.state;

    if (quill.getLength() === 1) {
      this.setState({ error: '반드시 내용을 입력하세요' });
    } else {
      const content = JSON.stringify(quill.getContents());
      console.log(content);
    }
  }

  clearError() {
    this.setState({ error: '' });
  }

  render() {
    const { error } = this.state;
    const { handleSubmit } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <Styled.InfoWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Styled.QuillEditor id="editor" />
            <div>
              <StyledBase.Small>{error}</StyledBase.Small>
            </div>
            <Styled.AlignRightButton type="submit">
              Send
            </Styled.AlignRightButton>
          </form>
        </Styled.InfoWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

ResignSurvey.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(signOut()),
});

export default reduxForm({
  form: 'ResignSurveyForm',
})(
  connect(
    null,
    mapDispatchToProps,
  )(ResignSurvey),
);
