import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import Element from '../../../styled_base/Element';
import Styled from './styled';

import ArrowDown from '../../../assets/images/icon_back.png';

const handleClick = (e, identification) => {
  const answers = document.getElementById('accordion').childNodes;
  const target = document.getElementById(identification);

  _.forEach(answers, (item) => {
    if (item !== target) {
      item.classList.remove('active');
    }
  });

  target.classList.toggle('active');
};

class Accordion extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  renderAnswer() {
    const { answer } = this.props;
    if (!_.includes(answer, '\n')) {
      return answer;
    }
    const sentenceArray = _.split(answer, '\n');
    return _.map(sentenceArray, (sentence, index) => (sentence.length !== 1 ? (
        <p key={index}>{sentence}</p>
    ) : (
        <p key={index} style={{ visibility: 'hidden' }}>
          {sentence}
        </p>
    )));
  }

  render() {
    const { identification, question } = this.props;
    return (
      <Styled.AccordionItem id={identification}>
        <Styled.QuestionGroup
          align="center"
          onClick={e => handleClick(e, identification)}
        >
          <Element.BasicButton type="button" size="0.75rem">
            <span>{question}</span>
          </Element.BasicButton>
          <img src={ArrowDown} width="12px" height="12px" alt="arrow-down" />
        </Styled.QuestionGroup>
        <Styled.HiddenAnswer>{this.renderAnswer()}</Styled.HiddenAnswer>
      </Styled.AccordionItem>
    );
  }
}

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  identification: PropTypes.string.isRequired,
};

export default Accordion;
