import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { readToken } from '../../../reducers/reducer.user';
import { listBook } from '../../../reducers/reducer.book';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Component
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './styled';

const RenderItems = React.memo(({ items }) => _.map(items, (item, index) => (
    <Styled.BookLi key={index}>
      <Styled.BookDate>
        <span>{`${item.order}|${item.months}`}</span>
        <span>{moment.unix(item.created_at).format('YYYY. M.')}</span>
      </Styled.BookDate>
      <span style={{ wordBreak: 'break-all' }}>{item.name}</span>
    </Styled.BookLi>
)));

class Order extends React.Component {
  async componentDidMount() {
    const { read } = this.props;
    await read();
    const { getList, userId } = this.props;
    await getList(userId, 1);
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

  renderPagination() {
    const { length } = this.props;
    const maxPage = Math.ceil(length / 6);

    if (maxPage <= 1) {
      return (
        <Element.BasicButton type="button" size="0.75rem" disabled>
          1
        </Element.BasicButton>
      );
    }

    const pageArray = _.map([...Array(maxPage).keys()], i => i + 1);
    return _.map(pageArray, i => (
      <Element.BasicButton
        key={i}
        type="button"
        size="0.75rem"
        margin="0 0.5rem"
        onClick={e => this.handleClick(i, e)}
      >
        {i}
      </Element.BasicButton>
    ));
  }

  render() {
    const { items, match } = this.props;

    if (items.length === 0) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle={domainConfig.myOrder.title} path={match.url} />
          <p>{dataConfig.emptyOrderText}</p>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Styled.OrderWrapper>
        <Helmet pageTitle={domainConfig.myOrder.title} path={match.url} />
        <ul>
          <RenderItems items={items} />
        </ul>
        <Styled.PaginationWrapper>
          {this.renderPagination()}
        </Styled.PaginationWrapper>
      </Styled.OrderWrapper>
    );
  }
}

Order.propTypes = {
  length: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.userId,
  length: state.book.length,
  months: state.book.months,
  items: state.book.items,
});

const mapDispatchToProps = dispatch => ({
  read: () => dispatch(readToken()),
  getList: (userId, pageNum) => dispatch(listBook(userId, pageNum)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
