const path = require("path"); // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
const HtmlWebpackPlugin = require("html-webpack-plugin"); // index.html 파일을 dist 폴더에 index_bundle.js 파일과 함께 자동으로 생성, 우리는 그냥 시작만 하고싶지 귀찮게 index.html 파일까지 만들고 싶지 않다.!!

module.exports = {
  // moduel export (옛날 방식..)
  entry: "./src/index.js", // 리액트 파일이 시작하는 곳
  output: {
    // bundled compiled 파일
    path: path.join(__dirname, "/dist"), //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
    filename: "index_bundle.js",
  },
  module: {
    // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
    rules: [
      {
        test: /\.js$/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
        exclude: /node_module/, // node module 폴더는 babel 컴파일에서 제외
        use: {
          loader: "babel-loader", // babel loader가 파이프를 통해 js 코드를 불러옴
        },
      },
      {
        // 파일명이 .css로 끝나는 모든 파일에 적용
        test: /\.css$/,
        // 배열 마지막 요소부터 오른쪽에서 왼쪽 순으로 적용
        // 먼저 css-loader가 적용되고, styled-loader가 적용되어야 한다.
        // 순서 주의!
        use: ["style-loader", "css-loader"],
        // loader가 node_modules 안의 있는 내용도 처리하기 때문에
        // node_modules는 제외해야 합니다
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 생성한 템플릿 파일
    }),
  ],
};