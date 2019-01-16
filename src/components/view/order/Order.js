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
import Styled from './Order.styled';

const RenderItems = React.memo(({ items }) => _.map(items, (item, index) => (
    <Styled.BookLi key={index}>
      <span>
        <span>{`${item.order}|${item.months}`}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>{moment.unix(item.created_at).format('YYYY.MM')}</span>
      </span>
      <span>{item.name}</span>
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
        <Element.BasicButton type="button" disabled>
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
    const { items } = this.props;

    if (items.length === 0) {
      return (
        <Wrapper.BasicBlockWrapper>
          <Helmet pageTitle={domainConfig.myOrder.title} />
          <p>{dataConfig.emptyOrderText}</p>
        </Wrapper.BasicBlockWrapper>
      );
    }

    return (
      <Wrapper.BasicBlockWrapper>
        <Helmet pageTitle={domainConfig.myOrder.title} />
        <ul>
          <RenderItems items={items} />
        </ul>
        <Styled.PaginationWrapper>
          {this.renderPagination()}
        </Styled.PaginationWrapper>
      </Wrapper.BasicBlockWrapper>
    );
  }
}

Order.propTypes = {
  length: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
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
