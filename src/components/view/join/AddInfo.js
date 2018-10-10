import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component
import Helmet from '../../helmet/Helmet';

// Stylec
import StyledBase from '../../../styled_base/Wrapper';

class AddInfo extends React.Component {
  componentDidMount() {
    const { result } = this.props;
    console.log(result);
  }

  render() {
    return (
      <StyledBase.FlexWrapper>
        <Helmet pageTitle="Add Info" />
        <h1>add info</h1>
      </StyledBase.FlexWrapper>
    );
  }
}

AddInfo.propTypes = {
  result: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  result: state.question.result,
});

export default connect(mapStateToProps)(AddInfo);
