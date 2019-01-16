import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../../reducers/reducer.controlTitle';
import dataConfig from '../../../config/dataConfig';
import domainConfig from '../../../config/domainConfig';

// Components
import Helmet from '../../helmet';

// Styled
import Wrapper from '../../../styled_base/Wrapper';

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
    const { match } = this.props;
    return (
      <Wrapper.FlexWrapper>
        <Helmet pageTitle={domainConfig.about.title} path={match.url} />
        <p>{dataConfig.aboutText}</p>
      </Wrapper.FlexWrapper>
    );
  }
}

About.propTypes = {
  filter: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export const mapDispatchToProps = dispatch => ({
  filter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(About);
