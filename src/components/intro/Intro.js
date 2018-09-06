import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  VisibilityFilters,
  setVisibilityFilter,
} from '../../reducers/reducer.controlTitle';

// Styled
import Styled from '../../styled/Base';

export class Intro extends React.PureComponent {
  componentDidMount() {
    const { filter } = this.props;
    filter(VisibilityFilters.HIDE_TITLE);
  }

  componentWillUnmount() {
    const { filter } = this.props;
    filter(VisibilityFilters.SHOW_TITLE);
  }

  render() {
    return (
      <Styled.FlexWrapper>
        <Link to="/main">
          <h1>SCRIPTA MANENT VERBA VOLANT</h1>
        </Link>
      </Styled.FlexWrapper>
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
