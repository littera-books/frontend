import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './styled';

const RenderInfo = ({ infoArray }) => _.map(infoArray, (item, index) => <p key={index}>{item}</p>);

class BusinessInfo extends React.Component {
  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  render() {
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.businessInfo.title} />
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
  }
}

BusinessInfo.propTypes = {
  filter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BusinessInfo);
