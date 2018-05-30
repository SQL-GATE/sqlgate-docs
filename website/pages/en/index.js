/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const translate = require('../../server/translate.js').translate;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className={'mainContainer'}>
        <div className={'container'}>
          <div className={'wrapper'} style={{maxWidth: '960px'}}>
            <h1 style={{paddingBottom: '5px'}}>Getting started</h1>

            <p>
              <translate>
                Use SQLGate to see a more detailed guide to maximize your
                productivity.
              </translate>
              <br />
              <br />
            </p>

            <div className={'flex-row'}>
              <div>
                <ul>
                  <li>
                    <a href={docUrl('0101-install-uninstall.html', language)}>
                      <translate>Quick Start Guide</translate>
                    </a>
                  </li>
                  <li>
                    <a href={docUrl('0102-run-query.html', language)}>
                      <translate>Run Queries</translate>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <a
                      href={docUrl(
                        '0203-using-editor-advanced.html',
                        language
                      )}>
                      <translate>Using the Advanced SQL Editor</translate>
                    </a>
                  </li>
                  <li>
                    <a
                      href={docUrl(
                        '0204-run-sql-execution-plan.html',
                        language
                      )}>
                      <translate>Run SQL Execution Plan</translate>
                    </a>
                  </li>
                  <li>
                    <a href={docUrl('0205-procedure-compile.html', language)}>
                      <translate>Run and Compile Procedures</translate>
                    </a>
                  </li>
                  <li>
                    <a
                      href={docUrl(
                        '0209-work-on-object-explorer.html',
                        language
                      )}>
                      <translate>Work on Object Explorer</translate>
                    </a>
                  </li>
                  <li>
                    <a href={docUrl('0211-create-report.html', language)}>
                      <translate>Create a Report</translate>
                    </a>
                  </li>
                  <li>
                    <a href={docUrl('9901-set-options.html', language)}>
                      <translate>Set Options</translate>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <a href={docUrl('0212-use-er-design.html', language)}>
                      <translate>Use ER Design</translate>
                    </a>
                  </li>
                  <li>
                    <a
                      href={docUrl(
                        '0213-functions-of-administrators.html',
                        language
                      )}>
                      <translate>Functions of Administrators</translate>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Index.defaultProps = {
  language: 'en',
};

module.exports = Index;
