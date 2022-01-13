const SOURCE_PATH = 'source/';
const BUILD_PATH = 'build/';

const PATHS = {

  fonts: {
    src: `${SOURCE_PATH}fonts/**/*.{woff,woff2}`,
    output: `${BUILD_PATH}fonts/`,
  },

  images: {
    src: `${SOURCE_PATH}assets/img/**/*.{png,jpg,webp,svg}`,
    spriteSrc: `${SOURCE_PATH}assets/icons/icon-*.svg`,
    webpSrc: `${SOURCE_PATH}assets/img/**/*.jpg`,
    webpDest: `${SOURCE_PATH}assets/img`,

    dest: `${BUILD_PATH}assets/img`,
    spriteDest: `${SOURCE_PATH}assets/img`,
    spriteFileName: `svg-sprite.svg`,
  },

  html: {
    src: `${SOURCE_PATH}pug/*.pug`,
    srcWatch: `${SOURCE_PATH}pug/**/**/**/*.pug`,
    dest: BUILD_PATH,
  },

  styles: {
    src: `${SOURCE_PATH}styles/**/**/*.scss`,
    dest: `${BUILD_PATH}css/`,
    inputFileName: `${SOURCE_PATH}styles/style.scss`,
    outputFileName: 'styles.min.css',
  },

  scripts: {
    srcWatch: `${SOURCE_PATH}scripts/**/**/*.js`,
    inputFileName: `${SOURCE_PATH}scripts/index.js`,
    dest: `${BUILD_PATH}`,
  },

  vue: {
    srcWatch: `${SOURCE_PATH}scripts/**/**/*.vue`
  }
};

module.exports = { PATHS, BUILD_PATH }