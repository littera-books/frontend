import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';
import Accordion from './Accordion';

// Styled
import Styled from './styled';

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
    const { match } = this.props;
    return (
      <Styled.FAQWrapper>
        <Helmet pageTitle={domainConfig.allEars.title} path={match.url} />
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

AllEars.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllEars;
