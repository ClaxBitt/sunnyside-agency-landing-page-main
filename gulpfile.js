const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileScss(done) {
  src("./src/scss/app.scss").pipe(sass()).pipe(dest("./build/css"));

  done();
}

function dev(done) {
  watch("./src/scss/**/*.scss", compileScss);

  done();
}

exports.compileScss = compileScss;
exports.dev = dev;
