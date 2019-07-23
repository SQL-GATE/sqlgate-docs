var markdownpdf = require('markdown-pdf');
var mdDocs = ['dist/all.md'],
  bookPath = 'book.pdf';

process.env.FLAG = '0';
var options = {
  paperFormat: 'A4',
  cssPath: 'pdf.css',
  remarkable: {
    html: true,
    breaks: true,
    plugins: [require('remarkable-classy')],
    syntax: ['footnote', 'sup', 'sub', 'table'],
  },
};
markdownpdf(options)
  .concat.from(mdDocs)
  .to(bookPath, function() {
    console.log('Created', bookPath);
  });
