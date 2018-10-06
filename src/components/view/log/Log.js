import React from 'react';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import StyledBase from '../../../styled/Base';
import Styled from './Log.styled';

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    // const settings = {
    //   dots: true,
    //   arrows: false,
    //   infinite: true,
    //   lazyLoad: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };

    if (width > 414) {
      return (
        <StyledBase.FlexWrapper>
          <Helmet pageTitle="Log" />
          <Styled.SectionItem>My Info</Styled.SectionItem>
          <Styled.SectionItem>Letter Box</Styled.SectionItem>
          <Styled.SectionItem>Purchase</Styled.SectionItem>
          <Styled.SectionItem>SIGN OUT</Styled.SectionItem>
        </StyledBase.FlexWrapper>
      );
    }

    return <div>hi</div>;
  }
}
export default Log;
