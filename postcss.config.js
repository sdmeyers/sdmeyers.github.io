module.exports = {
  plugins: {
    "postcss-import": {},
    //'postcss-mixins': {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 2,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
        "custom-properties": false, // prevents creating duplicates, though may fail in older browsers.
      },
    },
    cssnano: { preset: "default" },
  },
};