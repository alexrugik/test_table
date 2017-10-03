const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
gutil = require('gulp-util');

gulp.task('default', function () {
    console.log('default task');

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

