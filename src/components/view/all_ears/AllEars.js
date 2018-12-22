import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Element from '../../../styled_base/Element';
import Styled from './AllEars.styled';

import ArrowDown from '../../../assets/images/down-arrow.svg';

const handleClick = (e, identification) => {
  const target = document.getElementById(identification);
  target.classList.toggle('active');
  const accordian = document.getElementById('accordian');
  _.forEach(accordian.childNodes, (item) => {
    if (item.lastChild !== target) {
      item.lastChild.classList.remove('active');
    }
  });
};

class Accordian extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  renderAnswer() {
    const { answer } = this.props;
    if (!_.includes(answer, '\n')) {
      return answer;
    }
    const sentenceArray = _.split(answer, '\n');
    return _.map(sentenceArray, (sentence, index) => (
      <p key={index}>{sentence}</p>
    ));
  }

  render() {
    const { identification, question } = this.props;
    return (
      <Styled.AccordianItem>
        <Styled.QuestionGroup
          align="center"
          onClick={e => handleClick(e, identification)}
        >
          <Element.BasicButton type="button">
            <span>{question}</span>
          </Element.BasicButton>
          <img src={ArrowDown} width="16px" height="16px" alt="arrow-down" />
        </Styled.QuestionGroup>
        <Styled.HiddenAnswer id={identification}>
          {this.renderAnswer()}
        </Styled.HiddenAnswer>
      </Styled.AccordianItem>
    );
  }
}

const AllEars = () => (
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

Accordian.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  identification: PropTypes.string.isRequired,
};

export default AllEars;
