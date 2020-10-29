module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // Here we can use the newer SCSS flavor of Sass.
        // Note that there *is* a semicolon at the end of the below line
        data: `@import "@/scss/main.scss";`
      }
    }
  }
}