import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';
import { getCount, getLetter } from '../../../reducers/reducer.letter';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './LetterBox.styled';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';

class LetterBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { read } = this.props;
    await read();

    const { getC, getList, userId } = this.props;
    await getC(userId);
    await getList(userId, 1);

    const paginationWrapper = document.getElementById('pagination');
    const firstNode = paginationWrapper.childNodes[0];
    firstNode.setAttribute('style', 'font-weight: bold');
  }

  async handleClick(pageNum, e) {
    const clickedButton = e.target;
    const allButtons = clickedButton.parentNode.childNodes;
    _.forEach(allButtons, (button) => {
      button.setAttribute('style', 'font-weight: normal');
    });
    clickedButton.setAttribute('style', 'font-weight: bold');

    const { getList, userId } = this.props;
    await getList(userId, pageNum);
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

  renderPagination() {
    const { count } = this.props;
    const maxPage = Math.ceil(count / 5);

    if (maxPage <= 1) {
      return (
        <Styled.PaginationItem type="button" disabled>
          1
        </Styled.PaginationItem>
      );
    }

    const pageArray = _.map([...Array(maxPage).keys()], i => i + 1);
    return _.map(pageArray, i => (
      <Styled.PaginationItem
        key={i}
        type="button"
        onClick={e => this.handleClick(i, e)}
      >
        {i}
      </Styled.PaginationItem>
    ));
  }

  render() {
    const { count } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="Letter Box" />
        <Styled.InfoWrapper>
          {this.renderItems()}
          <Styled.PaginationWrapper id="pagination">
            {this.renderPagination()}
          </Styled.PaginationWrapper>
          <Styled.NavigationWrapper>
            <Link to="/all-ears/send">Send Letter</Link>
            <p>{`You have ${count} letters.`}</p>
          </Styled.NavigationWrapper>
        </Styled.InfoWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

LetterBox.propTypes = {
  userId: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number.isRequired,
  read: PropTypes.func.isRequired,
  getC: PropTypes.func.isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  items: state.letter.items,
  count: state.letter.count,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  getC: userId => dispatch(getCount(userId)),
  getList: (userId, pageNum) => dispatch(getLetter(userId, pageNum)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LetterBox);
