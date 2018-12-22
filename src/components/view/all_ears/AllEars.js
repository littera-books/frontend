import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataConfig from '../../../dataConfig';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

// Components
import Helmet from '../../helmet/Helmet';
import Accordian from './Accordian';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './AllEars.styled';

class AllEars extends React.Component {
  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
  }

  shouldComponentUpdate(nextProps) {
    const { filter } = this.props;
    return filter !== nextProps.filter;
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  render() {
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle="I'm all ears" />
        <Wrapper.BasicBlockWrapper>
          <Element.BasicTitle align="center">
            Frequently Asked Questions
          </Element.BasicTitle>
          <Styled.AccordianWrapper id="accordian">
            <Accordian
              identification={dataConfig.qnaMessage.meaning.id}
              question={dataConfig.qnaMessage.meaning.question}
              answer={dataConfig.qnaMessage.meaning.answer}
            />
            <Accordian
              identification={dataConfig.qnaMessage.what.id}
              question={dataConfig.qnaMessage.what.question}
              answer={dataConfig.qnaMessage.what.answer}
            />
            <Accordian
              identification={dataConfig.qnaMessage.recommandation.id}
              question={dataConfig.qnaMessage.recommandation.question}
              answer={dataConfig.qnaMessage.recommandation.answer}
            />
            <Accordian
              identification={dataConfig.qnaMessage.delivery.id}
              question={dataConfig.qnaMessage.delivery.question}
              answer={dataConfig.qnaMessage.delivery.answer}
            />
          </Styled.AccordianWrapper>
        </Wrapper.BasicBlockWrapper>
      </Wrapper.FlexWrapper>
    );
  }
}

AllEars.propTypes = {
  filter: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AllEars);
