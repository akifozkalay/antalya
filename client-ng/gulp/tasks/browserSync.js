'use strict';

import config      from '../config';
import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import proxy       from 'proxy-middleware';

gulp.task('browserSync', function() {

  const DEFAULT_FILE = 'index.html';
  const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

  // api server proxy
  var proxyOptions = url.parse('http://localhost:8080/api');
  proxyOptions.route = '/api';
  // requests to `/api/x/y/z` are proxied to `http://localhost:8080/api`


  browserSync.init({
    server: {
      baseDir: config.buildDir,
      middleware: [proxy(proxyOptions), function(req, res, next) {
        let fileHref = url.parse(req.url).href;

        if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) {
          req.url = '/' + DEFAULT_FILE;
        }

        return next();
      }]
    },
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
