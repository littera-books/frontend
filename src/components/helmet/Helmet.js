import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Data
import dataConfig from '../../dataConfig';

const HelmetComponent = ({ pageTitle }) => (
  <Helmet>
    <title>{`${pageTitle} | ${dataConfig.siteTitle}`}</title>
  </Helmet>
);

HelmetComponent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default HelmetComponent;
