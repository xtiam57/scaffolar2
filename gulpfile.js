var gulp = require('gulp');
// Loading all the pluigins in package.json
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'browser-sync', 'wiredep', 'del']
});

// Settings
var settings = {
  env: 'dev',  // Environment type (dev | dist)
  port: 9090,  // Port's number
  get isDevelopment() { return this.env === 'dev'; },
  get isDistribution() { return this.env === 'dist'; },
};



// Connections
// Connection for development
gulp.task('connect:development', function() {
  var routes = {
    // Should be '/bower_components': '../bower_components'
    // Waiting for https://github.com/shakyShane/browser-sync/issues/308
    '/bower_components': 'bower_components'
  };

  plugins.browserSync({
    port: settings.port,
    server: {
      baseDir: ['src', 'dist'],
      routes: routes
    },
  });
});

// Connection for distribution
gulp.task('connect:build', function() {
  plugins.browserSync({
    port: settings.port,
    server: { baseDir: ['dist'] },
  });
});



// Compile and concat all js files
gulp.task('scripts', function() {
  return gulp.src('src/{app,components}/**/*.js')
    .pipe(plugins.plumber())
    // .pipe($.jshint())
    // .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(plugins.if(settings.isDevelopment, plugins.sourcemaps.init()))
    .pipe(plugins.concat('app.js', {newLine:'\n'}))
    .pipe(plugins.if(settings.isDistribution, plugins.babel()))
    .pipe(plugins.if(settings.isDistribution, plugins.ngAnnotate()))
    .pipe(plugins.if(settings.isDistribution, plugins.uglify({preserveComments:'some'})))
    .pipe(plugins.if(settings.isDevelopment, plugins.sourcemaps.write('../maps', {includeContent:false, sourceRoot:'/' })))
    .pipe(plugins.if(settings.isDistribution, plugins.rev()))
    .pipe(gulp.dest('dist/js'))
    .pipe(plugins.if(settings.isDistribution, plugins.rev.manifest('app.json')))
    .pipe(plugins.if(settings.isDistribution, gulp.dest('dist/revisions/')));
});


// Sass
// Inject all sass files into app.scss
gulp.task('inject:sass', function() {
  return gulp.src('src/app/app.scss')
    .pipe(plugins.plumber())
    .pipe(plugins.inject(gulp.src(['src/{app,components,styles}/**/*.scss', '!src/app/app.scss'], {read:false}), {
      addRootSlash: false,
      relative: true,
      transform: function(path) {
        return '@import \'' + path.replace(/.scss/, '') + '\';';
      },
    }))
    .pipe(gulp.dest('src/app'));
});

// Compile the main sass file
gulp.task('sass', function() {
  return gulp.src('src/app/app.scss')
    .pipe(plugins.plumber())
    .pipe(plugins.sass({precision:6, outputStyle:'nested', sourceComments:true}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.if(settings.isDistribution, plugins.csso()))
    .pipe(plugins.rename('styles.css'))
    .pipe(plugins.if(settings.isDistribution, plugins.replace('../../bower_components/bootstrap-sass/assets/fonts/bootstrap', '../fonts')))
    .pipe(plugins.if(settings.isDistribution, plugins.rev()))
    .pipe(gulp.dest('dist/css'))
    .pipe(plugins.if(settings.isDistribution, plugins.rev.manifest('styles.json')))
    .pipe(plugins.if(settings.isDistribution, gulp.dest('dist/revisions/')))
    .pipe(plugins.browserSync.stream());
});


// Compile and concat all custom vendors
gulp.task('vendors', function() {
  return gulp.src('src/vendors/**/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.concat('vendors.js', {newLine:'\n'}))
    .pipe(plugins.if(settings.isDistribution, plugins.babel()))
    .pipe(plugins.if(settings.isDistribution, plugins.uglify({preserveComments:'some'})))
    .pipe(plugins.if(settings.isDistribution, plugins.rev()))
    .pipe(gulp.dest('dist/js'))
    .pipe(plugins.if(settings.isDistribution, plugins.rev.manifest('vendors.json')))
    .pipe(plugins.if(settings.isDistribution, gulp.dest('dist/revisions/')));
});


// Partials
// Compile (tranform to JS) and concat all partials (html)
gulp.task('partials', function() {
  return gulp.src('src/{app,components}/**/*.html')
    .pipe(plugins.plumber())
    .pipe(plugins.htmlmin({removeComments:true, conservativeCollapse:true, collapseWhitespace:true}))
    .pipe(plugins.ngHtml2js({moduleName:'app'/*, prefix:'app/'*/}))
    .pipe(plugins.concat('partials.js', {newLine:'\n'}))
    .pipe(plugins.uglify({preserveComments:'some'}))
    .pipe(plugins.rev())
    .pipe(gulp.dest('dist/js'));
});

// Inject the partials file into index.html
gulp.task('inject:partials', ['partials'], function() {
  return gulp.src('dist/index.html')
    .pipe(plugins.plumber())
    .pipe(plugins.inject(gulp.src('dist/js/partials-**.js', {read: false}), {
      starttag: '<!-- inject:partials -->',
      addRootSlash: false,
      relative: true
    }))
    .pipe(gulp.dest('dist/'));
});



// Bower
// Install all bower's dependecies
gulp.task('bower-install', function() {
  return gulp.src('bower.json')
    .pipe(plugins.plumber())
    .pipe(plugins.install());
});

// Inject all bower's dependencies into index.html
gulp.task('inject:bower', function() {
  var wiredep = plugins.wiredep.stream;
  return gulp.src('src/index.html')
    .pipe(plugins.plumber())
    .pipe(wiredep({directory:'bower_components'}))
    .pipe(gulp.dest('src'));
});

// Move all fonts in bower's dependecies to fonts folder
gulp.task('bower-fonts', function() {
  return gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.plumber())
    .pipe(plugins.filter('**/*.{eot,svg,ttf,woff,woff2,otf}'))
    .pipe(plugins.flatten())
    .pipe(gulp.dest('dist/fonts'));
});



// Index.html
// Move and minify index.html
gulp.task('move-index', ['move-robots'], function() {
  return gulp.src('src/index.html')
    .pipe(plugins.plumber())
    // .pipe(plugins.htmlmin({removeComments:true, conservativeCollapse:true, collapseWhitespace:true}))
    .pipe(gulp.dest('dist/'));
});

// Move robots
gulp.task('move-robots', function() {
  return gulp.src('src/robots.txt')
    .pipe(plugins.plumber())
    .pipe(gulp.dest('dist/'));
});

// Inject all revisions into index.html
gulp.task('inject:revisions', function() {
  return gulp.src(['dist/revisions/*.json', 'dist/index.html'])
    .pipe(plugins.plumber())
    .pipe(plugins.revCollector())
    .pipe(gulp.dest('dist/'));
});

// Search for all bower dependencies, compile, concat, rev and inject into index.html
gulp.task('useref', function() {
  return gulp.src('dist/index.html')
      .pipe(plugins.plumber())
      .pipe(plugins.useref())
      .pipe(plugins.if('**/*.js', plugins.uglify({preserveComments:'some'})))
      .pipe(plugins.if('**/*.css', plugins.csso()))
      .pipe(plugins.if('**/*.+(js|css)', plugins.rev()))
      .pipe(plugins.revReplace())
      .pipe(gulp.dest('dist/'));
});




// Assets
// Move all assets into dist folder
gulp.task('assets', ['clean:assets'], function() {
  return gulp.src('src/assets/{images,fonts,icons,misc}/**/*')
    .pipe(plugins.plumber())
    .pipe(gulp.dest('dist/'));
});

// Remove all temp assets
gulp.task('clean:assets', function() {
  return plugins.del([ 'dist/{images,fonts,icons,misc}' ]);
});



// Watch
gulp.task('watch', function() {
  // Vendors
  plugins.watch(['src/vendors/**/*.js'], function() {
    gulp.start('vendors');
    plugins.browserSync.reload();
  });

  // Scripts
  plugins.watch(['src/{app,components}/**/*.js'], function() {
    gulp.start('scripts');
    plugins.browserSync.reload();
  });

  // Sass
  var injectSass = function() { gulp.start('inject:sass'); };

  plugins.watch(['src/{app,components,styles}/**/*.scss'])
    .on('change', function() { gulp.start('sass'); })
    .on('add', injectSass)
    .on('unlink', injectSass);

  // HTML
  plugins.watch(['src/{app,components}/**/*.html', 'src/index.html'], plugins.browserSync.reload);

  // Assets
  plugins.watch(['src/assets/**/*'], function() {
    gulp.start(['assets']);
    plugins.browserSync.reload();
  });

  // Gulp + Bower
  plugins.watch(['gulpfile.js', 'bower.json'], function() {
    plugins.runSequence('clean', 'bower-install', 'inject:sass', ['vendors', 'scripts', 'sass', 'assets', 'bower-fonts', 'inject:bower']);
  });
});


// Clean
gulp.task('clean', function() {
  return plugins.del([ 'dist/' ]);
});

// Clean revisions folder
gulp.task('clean:revisions', function() {
  return plugins.del([ 'dist/revisions/' ]);
});




// Main tasks
// Task for development
gulp.task('default', function() {
  settings.env = 'dev';
  plugins.runSequence('clean', 'bower-install', 'inject:sass', ['vendors', 'scripts', 'sass', 'assets', 'bower-fonts', 'inject:bower'], 'connect:development', 'watch');
});

// Run development mode
gulp.task('serve', ['default']);

// ---

// For distribution
gulp.task('build', function() {
  settings.env = 'dist';
  plugins.runSequence('clean', 'bower-install', 'inject:sass', 'vendors', 'scripts', 'sass', 'assets', 'bower-fonts', 'inject:bower', 'move-index', 'useref', 'inject:partials', 'inject:revisions', 'clean:revisions', function() { settings.env = 'dev'; });
});

// Run distribution mode
gulp.task('build:serve', function() {
  settings.env = 'dist';
  plugins.runSequence('clean', 'bower-install', 'inject:sass', 'vendors', 'scripts', 'sass', 'assets', 'bower-fonts', 'inject:bower', 'move-index', 'useref', 'inject:partials', 'inject:revisions', 'clean:revisions', 'connect:build', function() { settings.env = 'dev'; });
});