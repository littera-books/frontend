import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet/Helmet';
import Accordion from './Accordion';

// Styled
import Styled from './AllEars.styled';

const RenderAccordions = () => _.map(dataConfig.qnaMessage, (items, index) => (
    <Accordion
      key={index}
      identification={items.id}
      question={items.question}
      answer={items.answer}
    />
));

class AllEars extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Styled.FAQWrapper>
        <Helmet pageTitle={domainConfig.allEars.title} />
        <Styled.FAQTitle>Frequently Asked Questions</Styled.FAQTitle>
        <Styled.AccordionWrapper id="accordion">
          <RenderAccordions />
        </Styled.AccordionWrapper>
        <Link to={domainConfig.contact.path}>
          <Styled.EmailTitle>Further Questions?</Styled.EmailTitle>
        </Link>
      </Styled.FAQWrapper>
    );
  }
}

export default AllEars;
