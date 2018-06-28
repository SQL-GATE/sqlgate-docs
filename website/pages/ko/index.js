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
        title: ' SQL편집기의 세부기능',
        desc: '자동완성, SQL 코드변환, 테이블 스키마 조회, 책갈피',
        icon: 'icon-01',
        doc: '0203-using-editor-advanced',
      },
      {
        title: '프로시저 실행 및 컴파일',
        desc: '프로시저의 오류를 디버깅 하거나 컴파일하는 방법',
        icon: 'icon-02',
        doc: '0205-procedure-compile',
      },
      {
        title: '개체 탐색기로 작업하기',
        desc: '개체 검색하기, 필드의 데이터 값을 변경하기..',
        icon: 'icon-03',
        doc: '0209-work-on-object-explorer',
      },
      {
        title: '보고서 작업하기',
        desc:
          '개체 보고서 디자인 하기, 개체 보고서 미리 보기, 개체 보고서 Excel로 출력하기...',
        icon: 'icon-04',
        doc: '0211-create-report',
      },
      {
        title: '옵션 설정하기',
        desc: 'SQLGate 옵션에 대해 설명합니다.',
        icon: 'icon-05',
        doc: '9901-set-options',
      },
      {
        title: 'ER 디자인 작업하기',
        desc:
          '테이블 개체 살펴 보기, 캔버스에서 원하는 테이블 개체 찾기, 테이블 간의 관계 보기...',
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
              <div className={'col s12'} style={{maxWidth: 500}}>
                <article>
                  <h1>SQLGate Docs</h1>
                  <p>
                    <translate>
                      Use SQLGate to see a more detailed guide to maximize your
                      productivity.
                    </translate>
                  </p>

                  <div className={'row feature-card-row'}>
                    <div className={'col s6'}>
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
                    <div className={'col s6'}>
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
