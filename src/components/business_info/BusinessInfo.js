import _ from 'lodash';
import React from 'react';
import dataConfig from '../../dataConfig';

// Styled
import Element from '../../styled_base/Element';
import Styled from './BusinessInfo.styled';

const callInfo = () => {
  const info = document.querySelector('#info');
  info.classList.toggle('is-open');
};

const InfoItem = ({ list }) => _.map(list, (item, idx) => <li key={idx}>{item}</li>);

const BusinessInfo = () => (
  <Styled.AbsoluteWrapper>
    <Element.BasicButton onClick={callInfo}>INFO</Element.BasicButton>
    <Styled.InfoWrapper>
      <ul>
        <li>리테라 주식회사</li>
        <li>LITTERA CO., Ltd.</li>
      </ul>
      <Styled.InfoUL>
        <InfoItem list={dataConfig.businessInfo.ko} />
      </Styled.InfoUL>
      <ul>
        <InfoItem list={dataConfig.businessInfo.en} />
      </ul>
    </Styled.InfoWrapper>
  </Styled.AbsoluteWrapper>
);

export default BusinessInfo;
