import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Quill from 'quill';
import { readToken } from '../../../reducers/reducer.user';
import { sendLetter } from '../../../reducers/reducer.letter';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './AllEars.styled';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';

class SendLetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quill: '',
      required: '',
    };

    this.clearError = this.clearError.bind(this);
  }

  componentDidMount() {
    const { read } = this.props;
    read();
    this.setState({
      quill: new Quill('#editor', {
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
      const { send, userId } = this.props;
      const content = JSON.stringify(quill.getContents());
      const formData = new FormData();

      formData.append('content', content);
      await send(userId, formData);

      const { error, history } = this.props;
      if (!error) {
        history.replace('/main');
      }
    }
  }

  clearError() {
    this.setState({ required: '' });
  }

  render() {
    const { required } = this.state;
    const { handleSubmit } = this.props;
    return (
      <Styled.LetterWrapper>
        <Helmet pageTitle="Send Letter" />
        <Styled.MarginForm
          action="post"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Wrapper.QuillEditor id="editor" />
          <div>
            <Element.BasicSmall>{required}</Element.BasicSmall>
          </div>
          <Styled.SendButton type="submit">Send</Styled.SendButton>
        </Styled.MarginForm>
      </Styled.LetterWrapper>
    );
  }
}

SendLetter.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  send: PropTypes.func.isRequired,
  read: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  error: state.letter.error,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  send: (userId, payload) => dispatch(sendLetter(userId, payload)),
});

export default reduxForm({
  form: 'SendLetterForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SendLetter),
);
