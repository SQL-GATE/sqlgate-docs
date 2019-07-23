'use strict';

// 필요한 모듈선언
const gulp = require('gulp');
const concat = require('gulp-concat');
const replace = require('gulp-replace');

/**
 * watch
 */
gulp.task('concat-md', function() {
  var mdDocs = [
    'website/translated_docs/ko/0101-install-uninstall.md',
    'website/translated_docs/ko/0102-run-query.md',
    'website/translated_docs/ko/0103-create-query.md',
    'website/translated_docs/ko/0104-edit-data.md',
    'website/translated_docs/ko/0105-wizard.md',
    'website/translated_docs/ko/0201-manage-new-connections.md',
    'website/translated_docs/ko/0202-using-editor.md',
    'website/translated_docs/ko/0203-using-editor-advanced.md',
    'website/translated_docs/ko/0204-dbms-output.md',
    'website/translated_docs/ko/0204-run-sql-execution-plan.md',
    'website/translated_docs/ko/0205-procedure-compile.md',
    'website/translated_docs/ko/0206-export-import-data.md',
    'website/translated_docs/ko/0207-using-query-builder.md',
    'website/translated_docs/ko/0208-work-on-data-grid.md',
    'website/translated_docs/ko/0209-work-on-object-explorer.md',
    'website/translated_docs/ko/0210-functions-of-create.md',
    'website/translated_docs/ko/0211-create-report.md',
    'website/translated_docs/ko/0212-use-er-design.md',
    'website/translated_docs/ko/0213-functions-of-administrators.md',
    'website/translated_docs/ko/9901-set-options.md',
    'website/translated_docs/ko/9902-shortcut-keys.md',
  ];
  gulp
    .src(mdDocs)
    .pipe(replace(/^---.+---/ms, ''))
    .pipe(concat('all.md'))
    .pipe(gulp.dest('./dist/'));
});

// 걸프 기본 타스크
gulp.task('default', ['concat-md'], function() {
  return true;
});
