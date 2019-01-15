import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';

// Components
import Helmet from '../../helmet/Helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

// Data
import dataConfig from '../../../config/dataConfig';

export class About extends React.Component {
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
        <Helmet pageTitle="About" />
        <p>{dataConfig.aboutText}</p>
      </Wrapper.FlexWrapper>
    );
  }
}

About.propTypes = {
  filter: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(About);
