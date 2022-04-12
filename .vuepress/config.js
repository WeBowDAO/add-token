const vars = require("./.env.json");

module.exports = {
  description: "Agrega WBW a tu billetera",
  base: "/watch-token/",
  plugins: [],
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://webowdao.github.io/watch-token",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://webowdao.github.io/watch-token/assets/images/watch-token.png",
      },
    ], // eslint-disable-line max-len
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        property: "twitter:image",
        content:
          "https://webowdao.github.io/watch-token/assets/images/watch-token.png",
      },
    ], // eslint-disable-line max-len
    [
      "meta",
      {
        property: "twitter:title",
        content: "WeBow Token",
      },
    ],
    ["script", { src: "/assets/js/web3.min.js" }],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1", // eslint-disable-line max-len
        defer: true,
      },
    ],
  ],
  defaultNetwork: vars.defaultNetwork,
  infuraProjectId: vars.infuraProjectId,
  bitlyAccessToken: vars.bitlyAccessToken,
};
