

module.exports = {

  options: {

    transform: [

      ['babelify', {
        presets: ['stage-1']
        // presets: ['es2015', 'stage-1']
      }],

      ['brfs']
    ],

    watch: true,

    browserifyOptions: {
      debug: true
    }

  },

  dist: {
    src: ['src/javascripts/map_tt.js'],
    dest: '<%= site %>/script.js'
  }

};
