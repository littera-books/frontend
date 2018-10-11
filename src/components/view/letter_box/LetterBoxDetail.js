import React from 'react';
import PropTypes from 'prop-types';
import Quill from 'quill';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';
import { getLetterDetail } from '../../../reducers/reducer.letter';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './LetterBox.styled';

class LetterBoxDetail extends React.Component {
  state = {
    quill: '',
  };

  async componentDidMount() {
    const { read } = this.props;
    await read();

    const { match, userId, getDetail } = this.props;
    const payload = {
      userId,
      messageId: match.params.id,
    };
    await getDetail(payload);

    await this.setState({ quill: new Quill('#editor') });
    const { item } = this.props;
    const body = await JSON.parse(item.body);
    const { quill } = this.state;
    await quill.setContents(body);
    document.getElementById('content').innerHTML = quill.root.innerHTML;
  }

  render() {
    const { item, history } = this.props;
    const time = moment.unix(item.created_at).format('YYYY.M.D');
    return (
      <Styled.LetterBoxFlexWrapper>
        <Helmet pageTitle={time} />
        <Styled.LetterBoxWrapper>
          <Styled.TimeParagraph>{time}</Styled.TimeParagraph>
          <Styled.Content id="content" />
          <div id="editor" style={{ display: 'none' }} />
          <Styled.NavigationWrapper>
            <Element.BasicButton type="button" onClick={history.goBack}>
              ←
            </Element.BasicButton>
            <Link to="/all-ears/send">reply</Link>
          </Styled.NavigationWrapper>
        </Styled.LetterBoxWrapper>
      </Styled.LetterBoxFlexWrapper>
    );
  }
}

LetterBoxDetail.propTypes = {
  userId: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  read: PropTypes.func.isRequired,
  getDetail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  item: state.letter.item,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  getDetail: payload => dispatch(getLetterDetail(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LetterBoxDetail);
