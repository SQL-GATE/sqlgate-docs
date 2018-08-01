/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const https = require('https');
const React = require('react');

class Footer extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {footerHTML: ''};
  }

  componentWillMount() {
    this.getFooter();
  }

  setFooter(data) {
    this.setState({footerHTML: data});
  }

  getFooter() {
    const self = this;
    let store = '';
    https
      .get(
        `https://www.sqlgate.com/getFooter?langauge=${this.props.language}`,
        res => {
          res.on('data', d => {
            store += d;
            //process.stdout.write(d);
          });
          res.on('end', function() {
            self.setFooter(store);
            self.forceUpdate();
          });
        }
      )
      .on('error', e => {
        console.error(e);
      });
  }*/

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="wrapper">
          <div id="common-footer-wrapper" />
        </section>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-26882913-4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-26882913-4');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `

            var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.querySelector("#common-footer-wrapper").innerHTML  = this.responseText;
    }
  };
  xhttp.open("GET", "https://www.sqlgate.com/getFooter?language=${
    this.props.language
  }", true);
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "https://www.sqlgate.com");
  xhttp.send();
           `,
          }}
        />
      </footer>
    );
  }
}

module.exports = Footer;
