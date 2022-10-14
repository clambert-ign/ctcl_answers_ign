const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};
// Overrides for css-loader plugin
function cssLoaderOptions(modules) {
  const { getLocalIdent, ...others } = modules; // Need to delete getLocalIdent else localIdentName doesn't work
  return {
    ...others,
    localIdentName: "[hash:base64:6]",
    exportLocalsConvention: "camelCaseOnly",
    mode: "local",
  };
}
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-gb', 'en-ie', 'es-es', 'fr-fr', 'de-de', 'de-dk', 'fi-fi', 'sv-se', 'no-no', 'it-it', 'nl-nl'],
    defaultLocale: 'en-gb'
  },
  cssModules: true
};
// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Filter out default Next.js CSS rules:
//     config.module.rules = config.module.rules.filter(r => !r.oneOf);

//     // Add your own rules

//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
//     })
//     return config
//   },
//   reactStrictMode: true,
//   i18n: {
//     locales: ['en-gb', 'en-ie', 'es-es', 'fr-fr', 'de-de', 'de-dk', 'fi-fi', 'sv-se', 'no-no', 'it-it', 'nl-nl'],
//     defaultLocale: 'en-gb'
//   },
//   cssModules: false
// }
