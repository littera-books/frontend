import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

// Styled
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

Accordian.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  identification: PropTypes.string.isRequired,
};

export default Accordian;
