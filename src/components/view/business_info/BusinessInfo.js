import _ from 'lodash';
import React from 'react';
import dataConfig from '../../../dataConfig';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './BusinessInfo.styled';

const RenderInfo = ({ infoArray }) => _.map(infoArray, (item, index) => <p key={index}>{item}</p>);

const BusinessInfo = () => (
  <Wrapper.FlexWrapper noBottom>
    <Helmet pageTitle="INFO" />
    <Styled.WidthWrapper>
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>리테라 주식회사</Styled.TitleWrapper>
        <Styled.ContentWrapper>
          <Wrapper.BasicBlockWrapper>
            <RenderInfo infoArray={dataConfig.businessInfo.ko} />
          </Wrapper.BasicBlockWrapper>
        </Styled.ContentWrapper>
      </Styled.InfoWrapper>
      <Styled.InfoWrapper noBottom>
        <Styled.TitleWrapper>LITTERA CO., LTD.</Styled.TitleWrapper>
        <Styled.ContentWrapper>
          <Wrapper.BasicBlockWrapper>
            <RenderInfo infoArray={dataConfig.businessInfo.en} />
          </Wrapper.BasicBlockWrapper>
        </Styled.ContentWrapper>
      </Styled.InfoWrapper>
    </Styled.WidthWrapper>
  </Wrapper.FlexWrapper>
);

export default BusinessInfo;
