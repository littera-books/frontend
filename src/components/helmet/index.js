import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import dataConfig from '../../config/dataConfig';
import domainConfig from '../../config/domainConfig';

const HelmetComponent = React.memo(({ pageTitle, path }) => {
  const lastCharOfPath = _.parseInt(path.slice(-1), 10);
  const canonicalPath = _.isInteger(lastCharOfPath)
    ? domainConfig.bonVoyage.path
    : path;
  return (
    <Helmet>
      <title>
        {dataConfig.siteTitle} {pageTitle === '' ? '' : '|'} {pageTitle}
      </title>
      <link rel="canonical" href={dataConfig.siteUrl + canonicalPath} />
      <meta
        property="og:title"
        content={`${dataConfig.siteTitle} ${
          pageTitle === '' ? '' : '|'
        } ${pageTitle}`}
      />
      <meta property="og:url" content={dataConfig.siteUrl + canonicalPath} />
    </Helmet>
  );
});

HelmetComponent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default HelmetComponent;
