/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap wrapper">
          <div>
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width="89"
            />
            CHEQUER | Database Driven Innovation Company Copyright © 2018
            CHEQUER Inc. All rights reserved.
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
