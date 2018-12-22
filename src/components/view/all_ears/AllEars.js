import React from 'react';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';
import Accordian from './Accordian';

// Styled
import Styled from './AllEars.styled';

class AllEars extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Styled.FAQWrapper>
        <Helmet pageTitle="I'm all ears" />
        <Styled.FAQTitle>Frequently Asked Questions</Styled.FAQTitle>
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
      </Styled.FAQWrapper>
    );
  }
}

export default AllEars;
