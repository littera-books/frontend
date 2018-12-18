import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  VisibilityFilters,
  setVisibilityFilter,
} from '../../../reducers/reducer.controlTitle';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

// data
import dataConfig from '../../../dataConfig';

export class Intro extends React.Component {
  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
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
  filter: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Intro);
