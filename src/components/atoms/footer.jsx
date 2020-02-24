import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div className="footer">
    Mietenwatch | Tilman Miraß | Lausitzer Straße 10, 10999 Berlin | 01523
    8702063 | <a href="mailto:info@mietenwatch.de">info@mietenwatch.de</a>{' '}
    <br />
    <Link to="/impressum">Impressum</Link> |{' '}
    <Link to="/datenschutz">Datenschutzerklärung</Link>
  </div>
);
