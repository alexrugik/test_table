const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');
const gulpSequence = require('gulp-sequence');
const path = require('path');
const clean = require('gulp-clean');

const ENV = require('./config.const').ENV;
const BUILD = require('./config.const').BUILD;

const getWebpackConfig = require('./webpack.config');
const devServer = require('webpack-dev-server');

const browserSync = require('browser-sync').create();

const apps = [BUILD.admin, BUILD.buyer, BUILD.vendor];

//build for all modules with development mode
gulp.task('default', callback => {
    gulpSequence('clean-folder', 'build:vendor:dev', 'build:buyer:dev', 'build:admin:dev', callback);
});

gulp.task('webpack:build:prod', callback => {
    gulpSequence('clean-folder', 'build:vendor:prod', 'build:buyer:prod', 'build:admin:prod', callback);
});


gulp.task('webpack:server:vendor', callback => {
    gulpSequence('set-dev-env', 'set-vendor-build', 'webpack:server', callback);
});

gulp.task('webpack:server', callback => {
    const webpackConfig = Object.create(getWebpackConfig(process.env.NODE_BUILD, process.env.NODE_ENV));
    const compiler = webpack(webpackConfig);
    /**
     *  init browse sync that lister webpack-dev-server that starter on this port
     *  if  you change port in webpack.config for webpack-dev-server you have to  change it too
     */
    browserSync.init({
        port: 3030,
        proxy: 'http://localhost:8090',
        open: true
    });

    /**
     * listen webpack compile event
     * when it's done we have to reload browser
     */
    compiler.plugin('done', () => {
        browserSync.reload();
    });

    /**
     * run webpack dev server with own settings
     */
    const wds = new devServer(compiler, webpackConfig.devServer);
    wds.listen(webpackConfig.devServer.port, 'localhost', err => {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log(`'${gutil.colors.cyan('dev:server')}' http://localhost:8080/webpack-dev-server/index.html`);
    });
});

gulp.task('webpack:build', callback => {
    const webpackConfig = Object.create(getWebpackConfig(process.env.NODE_BUILD, process.env.NODE_ENV));
    webpack(webpackConfig, (err, stats) => {
        if (err)
            throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build] Completed\n' + stats.toString({
            assets: true,
            chunks: true,
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
gulp.task('build:vendor:dev', callback => {
    console.log('done next: build:vendor:dev');
    gulpSequence('set-dev-env', 'set-vendor-build', 'webpack:build', callback);
});

gulp.task('build:vendor:prod', callback => {
    console.log('done next: build:vendor:prod');
    gulpSequence('set-prod-env', 'set-vendor-build', 'webpack:build', callback);
});

gulp.task('build:vendor:test', callback => {
    console.log('done next: build:vendor:prod');
    gulpSequence('set-test-env', 'set-vendor-build', 'webpack:build', callback);
});

// buyer build
gulp.task('build:buyer:dev', callback => {
    console.log('done next: build:buyer:dev');
    gulpSequence('set-dev-env', 'set-buyer-build', 'webpack:build', callback);
});

gulp.task('build:buyer:prod', callback => {
    console.log('done next: build:buyer:prod');
    gulpSequence('set-prod-env', 'set-buyer-build', 'webpack:build', callback);
});

gulp.task('build:buyer:test', callback => {
    console.log('done next: build:buyer:test');
    gulpSequence('set-test-env', 'set-buyer-build', 'webpack:build', callback);
});

// admin build
gulp.task('build:admin:dev', callback => {
    console.log('done next: build:admin:dev');
    gulpSequence('set-dev-env', 'set-admin-build', 'webpack:build', callback);
});

gulp.task('build:admin:prod', callback => {
    console.log('done next: build:admin:prod');
    gulpSequence('set-prod-env', 'set-admin-build', 'webpack:build', callback);
});

gulp.task('build:admin:test', callback => {
    console.log('done next: build:admin:test');
    gulpSequence('set-test-env', 'set-admin-build', 'webpack:build', callback);
});

//set env
gulp.task('set-dev-env', () => {
    return process.env.NODE_ENV = ENV.development;
});

gulp.task('set-prod-env', () => {
    return process.env.NODE_ENV = ENV.production;
});

gulp.task('set-test-env', () => {
    return process.env.NODE_ENV = ENV.test;
});

gulp.task('set-vendor-build', () => {
    return process.env.NODE_BUILD = BUILD.vendor;
});

gulp.task('set-buyer-build', () => {
    return process.env.NODE_BUILD = BUILD.buyer;
});


gulp.task('set-admin-build', () => {
    return process.env.NODE_BUILD = BUILD.admin;
});

gulp.task('clean-folder', callback => {
    return gulp.src('public/', {read: false})
        .pipe(clean());
});

gulp.task('tomcat:clean', calllback => {
    const promises = apps.map(appName => {
        return new Promise(
            (resolve, reject) => {
                const sourceFiles = [`./public/${appName}/.*`, `./public/${appName}/*.*`];
                const destinationTomcatPath = `${process.env.CATALINA_HOME.replace(/\\/g, '/')}/webapps/${appName}/home`;
                gulp
                    .src(destinationTomcatPath, {read: false})
                    .pipe(clean({force: true}))
                    .on('error', reject)
                    .on('finish', resolve);
            });
    });
    Promise.all(promises)
        .then(results => {
            console.log('result =', results);
            calllback();
        });
});

gulp.task('tomcat:copy', ['tomcat:clean'], calllback => {
    const promises = apps.map(appName => {
        return new Promise(
            (resolve, reject) => {
                const sourceFiles = [`./public/${appName}/.*`, `./public/${appName}/*.*`];
                const destinationTomcatPath = `${process.env.CATALINA_HOME.replace(/\\/g, '/')}/webapps/${appName}/home`;
                console.log(sourceFiles);
                console.log(destinationTomcatPath);
                gulp
                    .src(sourceFiles)
                    .pipe(gulp.dest(destinationTomcatPath))
                    .on('error', reject)
                    .on('end', resolve)
            });
    });
    Promise.all(promises)
        .then(result => {
            calllback();
        });
});

gulp.task('project:clean', calllback => {
    const promises = apps.map(appName => {
        return new Promise((resolve, reject) => {
            const sourceFiles = [`./public/${appName}/.*`, `./public/${appName}/*.*`];
            const destinationProjectPath = `../kyv-webapp-${appName}/src/main/webapp/home`;
            gulp
                .src(destinationProjectPath, {read: false})
                .pipe(clean({force: true}))
                .on('error', reject)
                .on('finish', resolve);
        });
    });

    Promise.all(promises)
        .then(results => {
            calllback();
        });
});

gulp.task('project:copy', ['project:clean'], calllback => {
    const promises = apps.map(appName => {
        return new Promise((resolve, reject) => {
            const sourceFiles = [`./public/${appName}/.*`, `./public/${appName}/*.*`];
            const destinationProjectPath = `../kyv-webapp-${appName}/src/main/webapp/home`;
            gulp
                .src(sourceFiles)
                .pipe(gulp.dest(destinationProjectPath));
        });
    });

    Promise.all(promises)
        .then(results => {
            calllback();
        });
});