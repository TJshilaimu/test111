module.exports = {
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: 'vue-eslint-parser',
  /* 扩展配置，加一些插件 */
  extends: [
    'plugin:vue/recommended' /* eslint应用在vue的必须配置 */,
    'plugin:prettier/recommended' /* 使用Prettier */,
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser',
    /* 解析ts语法 */
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/np-explicit-any': ['off'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier:prettier': 'off',
    quotes: 0,
    semi: 0,
  },
  env: {
    browser: true,
    // es2019:true,
    node: true,
  },
};

// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
//   parserOptions: {
//     parser: 'vue-eslint-parser',
//     ecmaVersion: 2018,
//   },
//   //    'arrow-parens': ['error', 'as-needed'],
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'prettier/prettier': 'off',
//   },
// };
