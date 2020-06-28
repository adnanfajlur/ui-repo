/* eslint-disable @typescript-eslint/no-var-requires */

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],

  // Include any special characters you're using in this regular expression
  // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss,
  ]
}