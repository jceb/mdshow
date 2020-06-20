const gulp = require('gulp')
const path = require('path')
const connect = require('gulp-connect')
const yargs = require('yargs')

// Prevents warnings from opening too many test pages
process.setMaxListeners(20);

const root = yargs.argv.root || '.'
const port = yargs.argv.port || 8000


gulp.task('reload', () => gulp.src(['*.html', '*.md'])
    .pipe(connect.reload()));

gulp.task('serve', () => {

    connect.server({
        root: root,
        port: port,
        host: '127.0.0.1',
        livereload: true
    })

    gulp.watch([
      'index.html',
      'assets/**',
      'reveal.js/**',
    ].map(glob => path.join(root, glob)), gulp.series('reload'))

})
