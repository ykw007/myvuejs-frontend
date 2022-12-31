module.exports = {
  devServer: {
    overlay: false,
    port: 80,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      },
      '/rt/*': {
        target: 'http://localhost:3000'
      },
      '/local-file/*': {
        target: 'http://localhost:3000'
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      style: [
        'bootstrap/dist/css/bootstrap.min.css',
        'blueimp-file-upload/css/jquery.fileupload.css',
        'noty/lib/noty.css',
        'noty/lib/themes/relax.css'
      ]
    }
  }
}
