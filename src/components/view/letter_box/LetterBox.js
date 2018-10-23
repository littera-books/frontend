import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';
import { getLetter } from '../../../reducers/reducer.letter';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './LetterBox.styled';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';

class LetterBox extends React.Component {
  async componentDidMount() {
    const { read } = this.props;
    await read();
    const { getList, userId } = this.props;
    await getList(userId);
  }

  renderItems() {
    const { items } = this.props;
    return _.map(items, (item) => {
      const time = moment.unix(item.created_at).format('YYYY.M.D');

      const rawBody = JSON.parse(item.body);
      const firstLine = rawBody.ops[0].insert;
      const truncatedLine = firstLine.substr(0, 30);
      return (
        <Link to={`/letter-box/${item.id}`} key={item.id}>
          <span>{time}</span>
          <Styled.TitleSpan>{`${truncatedLine} ...`}</Styled.TitleSpan>
        </Link>
      );
    });
  }

  render() {
    const { length } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Letter Box" />
        <Styled.InfoWrapper>
          {this.renderItems()}
          <Styled.NavigationWrapper>
            <Link to="/all-ears/send">Send Letter</Link>
            <p>{`You have ${length} letters.`}</p>
          </Styled.NavigationWrapper>
        </Styled.InfoWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

LetterBox.propTypes = {
  userId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  length: PropTypes.number.isRequired,
  read: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  items: state.letter.items,
  length: state.letter.length,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  getList: userID => dispatch(getLetter(userID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LetterBox);
