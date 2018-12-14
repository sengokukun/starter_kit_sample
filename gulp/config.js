const docroot = './public';
const assets = docroot + '/assets';
const src = './src';

module.exports = {

  // Document root
  docroot: docroot,

  // Assets
  assets: assets,

  // Develop directories
  src: src,

  // Output bundles
  destDirs: {
    js: assets + "/js",
    css: assets + '/css',
    html: docroot,
    image: assets + '/images',
  },

  // Babel Config
  babel: {
    presets: ["es2015"]
  },

  // Compile entry files is
  entryFiles: {
    js: src + "/js/index.js",
    css: src + '/scss/**.scss',
    html: src + '/pug' + '/**.pug',
    image: src + '/images/**/*',
  }

}
