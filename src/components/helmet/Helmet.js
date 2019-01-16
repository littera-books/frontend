import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Data
import dataConfig from '../../config/dataConfig';

const HelmetComponent = React.memo(({ pageTitle }) => (
  <Helmet>
    <title>
      {dataConfig.siteTitle}&nbsp;{pageTitle === '' ? '' : '|'}&nbsp;{pageTitle}
    </title>
  </Helmet>
));

HelmetComponent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default HelmetComponent;
