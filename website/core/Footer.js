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
        <section className="sitemap">
          <div>
            <div className="col m6 s12">
              <div className="footer-logo">
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="190"
                  height="65"
                />
              </div>

              <p className={'copy-right'}>
                <b>CHEQUER</b> | Database Driven Innovation Company<br />
                Copyright © 2018 CHEQUER Inc. All rights reserved.
              </p>
            </div>
          </div>
          <div className={'company-info'}>
            <b className="label">ADDRESS</b>
            <p className="value">
              #1116 Queenspark10, 66, Magokjungang 6-ro, Gangsep-gu, Seoul,
              Republic of Korea (07803)
            </p>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
