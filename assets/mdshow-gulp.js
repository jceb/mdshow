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
const slides = yargs.argv.slides || "slides.md";

function reload(cb) {
  gulp
    .src(["index*.html", "assets/**", "reveal.js/**/*.css"])
    .pipe(connect.reload());
  cb();
}

function rebuild(cb) {
  const build = spawn(mdshow, ["build", `SLIDES=${slides}`], {
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

exports.default = function() {
  connect.server({
    name: "mdshow",
    root: root,
    port: port,
    host: "127.0.0.1",
    livereload: true
  });

  gulp.watch(
    ["index*.html", "assets/**", "reveal.js/**/*.css"].map(glob =>
      path.join(root, glob)
    ),
    reload
  );

  // WARNING: gulp watch requires an asterisk (*) in the filename otherwise it
  // will not work!
  gulp.watch(
    [`../*${slides}`, "assets/**", ".mdshow/**/*.html", ".mdshow/**/*.scss"].map(glob =>
      path.join(root, glob)
    ),
    rebuild
  );
};
