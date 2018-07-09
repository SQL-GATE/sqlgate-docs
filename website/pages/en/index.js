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
  constructor() {
    super();

    this.features = [
      {
        title: ' Using the Advanced SQL Editor',
        desc: 'AutoComplete, Convert SQL, View Table Schema, Bookmark Shortcut',
        icon: 'icon-01',
        doc: '0203-using-editor-advanced',
      },
      {
        title: 'Run and Compile Procedures',
        desc:
          'This section explains how to find error in procedure and compile.',
        icon: 'icon-02',
        doc: '0205-procedure-compile',
      },
      {
        title: 'Work on Object Explorer',
        desc: 'Using Object Explorer and Object Panel',
        icon: 'icon-03',
        doc: '0209-work-on-object-explorer',
      },
      {
        title: 'Create a Report',
        desc: 'This section explains how to design Object Reports.',
        icon: 'icon-04',
        doc: '0211-create-report',
      },
      {
        title: 'Set Options',
        desc: 'Explain SQLGate options',
        icon: 'icon-05',
        doc: '9901-set-options',
      },
      {
        title: 'Use ER Design',
        desc: 'This section explains how to view table objects.',
        icon: 'icon-06',
        doc: '0212-use-er-design',
      },
    ];
  }

  render() {
    let language = this.props.language || 'en';

    const getFeatures = (f, idx) => {
      return (
        <div className={'col s12 m6'} key={idx}>
          <a
            className={'feature-card ' + f.icon}
            href={docUrl(f.doc + '.html', language)}>
            <span className={'card-title'}>{f.title}</span>
            <span className={'card-desc'}>{f.desc}</span>
            <span className={'card-more'}>View documents &gt;</span>
          </a>
        </div>
      );
    };

    return (
      <div className={'mainContainer'}>
        <div className={'main-visual-container'}>
          <div className={'wrapper'}>
            <div className={'row'}>
              <div className={'col m12 s12'} style={{maxWidth: 500}}>
                <article>
                  <h1>SQLGate Docs</h1>
                  <p>
                    <translate>
                      Use SQLGate to see a more detailed guide to maximize your
                      productivity.
                    </translate>
                  </p>

                  <div className={'row feature-card-row'}>
                    <div className={'col s12 m6'}>
                      <a
                        className={'feature-card icon-01'}
                        href={docUrl('0101-install-uninstall.html', language)}>
                        <span
                          className={'card-title'}
                          style={{whiteSpace: 'nowrap'}}>
                          QUICK START
                        </span>
                        <span className={'card-more'} />
                      </a>
                    </div>
                    <div className={'col s12 m6'}>
                      <a
                        className={'feature-card icon-02'}
                        href={docUrl('0102-run-query.html', language)}>
                        <span
                          className={'card-title'}
                          style={{whiteSpace: 'nowrap'}}>
                          Run Queries
                        </span>
                        <span className={'card-more'} />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className={'features-container'}>
          <div className={'wrapper'}>
            <div className={'row'}>
              <div className={'col s12'}>
                <h2>Explore Features</h2>
                <div style={{height: 20}} />
              </div>
            </div>

            <div className={'row'}>
              {this.features.splice(0, 2).map(getFeatures)}
            </div>

            <div className={'row'}>
              {this.features.splice(0, 2).map(getFeatures)}
            </div>

            <div className={'row'}>
              {this.features.splice(0, 2).map(getFeatures)}
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
