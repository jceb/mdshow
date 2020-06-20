const gulp = require("gulp");
const path = require("path");
const connect = require("gulp-connect");
const yargs = require("yargs");
const { spawn } = require("child_process");

// Prevents warnings from opening too many test pages
process.setMaxListeners(20);

const root = yargs.argv.root || ".";
const port = yargs.argv.port || 8000;
const mdshow = yargs.argv.mdshow || "mdshow";

function reload() {
  return gulp.src(["*.html", "*.md"]).pipe(connect.reload());
}

function rebuild(cb) {
  const build = spawn(mdshow, ["html"], {
    shell: true,
    cwd: path.join(root, "..")
  });
  build.stdout.on("data", d => console.log(`${d}`));
  build.stderr.on("data", d => console.log(`${d}`));
  build.on("exit", code => {
    if (code === 0) {
      cb();
    }
    cb(code);
  });
}

function serve() {
  connect.server({
    root: root,
    port: port,
    host: "127.0.0.1",
    livereload: true
  });

  gulp.watch(
    ["index.html", "assets/**", "reveal.js/**"].map(glob =>
      path.join(root, glob)
    ),
    gulp.series(reload)
  );

  gulp.watch(
    ["../slides.md"].map(glob => path.join(root, glob)),
    gulp.series(rebuild)
  );
}

exports.serve = serve;
exports.default = serve;
