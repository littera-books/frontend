import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';
import Styled from './Log.styled';

// CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

    if (width > 414) {
      return (
        <Wrapper.FlexWrapper>
          <Helmet pageTitle="Log" />
          <Styled.SectionWrapper>
            <Styled.SectionItem>
              <Link to="/my-info">My Info</Link>
            </Styled.SectionItem>
          </Styled.SectionWrapper>
          <Styled.SectionWrapper>
            <Styled.SectionItem>
              <Link to="/letter-box">Letter Box</Link>
            </Styled.SectionItem>
          </Styled.SectionWrapper>
          <Styled.SectionWrapper>
            <Styled.SectionItem>Purchase</Styled.SectionItem>
          </Styled.SectionWrapper>
          <Styled.SectionWrapper>
            <Styled.SectionItem>
              <Link to="/sign-out">SIGN OUT</Link>
            </Styled.SectionItem>
          </Styled.SectionWrapper>
        </Wrapper.FlexWrapper>
      );
    }

    return (
      <Wrapper.MobileColumnWrapper>
        <Helmet pageTitle="Log" />
        <Styled.SectionWrapper>
          <Styled.SectionItem>
            <Link to="/my-info">My Info</Link>
          </Styled.SectionItem>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionItem>
            <Link to="/letter-box">Letter Box</Link>
          </Styled.SectionItem>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionItem>Purchase</Styled.SectionItem>
        </Styled.SectionWrapper>
        <Styled.SectionWrapper>
          <Styled.SectionItem>
            <Link to="/sign-out">SIGN OUT</Link>
          </Styled.SectionItem>
        </Styled.SectionWrapper>
      </Wrapper.MobileColumnWrapper>
    );
  }
}

export default Log;
