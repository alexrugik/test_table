const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const gutil = require('gulp-util');
const gulpSequence = require('gulp-sequence');

const ENV = require('./config.const').ENV;
const BUILD = require('./config.const').BUILD;

gulp.task('default', function (callback) {
    gulpSequence('build:vendor:dev', 'build:buyer:dev', 'build:buyer:dev', callback);
});

gulp.task('webpack:build', function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err)
            throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build] Completed\n' + stats.toString({
            assets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            timings: false,
            version: false
        }));
        callback();
    });
});

// vendor build
gulp.task('build:vendor:dev', ['set-dev-env', 'set-vendor-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

gulp.task('build:vendor:prod', ['set-prod-env', 'set-vendor-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

gulp.task('build:vendor:test', ['set-test-env', 'set-vendor-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

// buyer build
gulp.task('build:buyer:dev', ['set-dev-env', 'set-buyer-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

gulp.task('build:vendor:prod', ['set-prod-env', 'set-buyer-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

gulp.task('build:vendor:test', ['set-test-env', 'set-buyer-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

// admin build
gulp.task('build:buyer:dev', ['set-dev-env', 'set-admin-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

gulp.task('build:vendor:prod', ['set-prod-env', 'set-admin-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

gulp.task('build:vendor:test', ['set-test-env', 'set-admin-build', 'webpack:build'], (callback) => {
    console.log('done next: build:vendor:dev');
});

//set env
gulp.task('set-dev-env', function () {
    return process.env.NODE_ENV = ENV.development;
});

gulp.task('set-production-env', function () {
    return process.env.NODE_ENV = ENV.production;
});

gulp.task('set-test-env', function () {
    return process.env.NODE_ENV = ENV.test;
});

gulp.task('set-vendor-build', function () {
    return process.env.NODE_BUILD = BUILD.vendor;
});

gulp.task('set-buyer-build', function () {
    return process.env.NODE_BUILD = BUILD.buyer;
});


gulp.task('set-admin-build', function () {
    return process.env.NODE_BUILD = BUILD.admin;
});

