const fs = require('fs')
const path = require('path')
const { src, watch, series, dest, task } = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const csscomb = require('gulp-csscomb')
const postcss = require('gulp-postcss')
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer')

const PATH_SEP = path.sep

const watchFilesPath = ['**/*.{scss,sass}', '!node_modules/**']

function transformSassToCss() {
  return src(watchFilesPath)
    .pipe(sass())
    .pipe(csscomb())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename((filePath) => {
      const filePathArr = filePath.dirname.split(PATH_SEP)
      const fileDirRealName = filePathArr[filePathArr.length - 1]
      // 如果当前所在文件夹名字为scss或sass,自动移动至上一级的css目录下
      if (['scss', 'sass'].includes(fileDirRealName)) {
        filePath.dirname = filePath.dirname.replace(fileDirRealName, 'css')
      }
    }))
    .pipe(dest('./'))
}

function watchSpace() {
  watch(watchFilesPath, series([transformSassToCss]))
}

task('dev', series([transformSassToCss, watchSpace]))


function defaultTask(cb) {
  console.log('wellcome my_encyclopaedia!')
  cb();
}
exports.default = defaultTask