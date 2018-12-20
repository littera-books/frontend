import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setClose, CloseFilters } from '../../../reducers/reducer.controlClose';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

// data
import dataConfig from '../../../dataConfig';

export class Intro extends React.Component {
  componentDidMount() {
    const { close } = this.props;
    close(CloseFilters.HIDE_CLOSE);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const { close } = this.props;
    close(CloseFilters.SHOW_CLOSE);
  }

  render() {
    return (
      <Wrapper.FlexWrapper>
        <Link to="/main">
          <h1>{dataConfig.introText}</h1>
        </Link>
      </Wrapper.FlexWrapper>
    );
  }
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  close: filter => dispatch(setClose(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Intro);
