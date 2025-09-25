const shared = {
  ignore: ['src/**/*.spec.js']
}

export default {
  env: {
    esmUnbundled: shared,
    esmBundled: {
      ...shared,
      presets: [['@babel/env', {
        targets: "> 0.25%, not dead"
      }]],
    },
    cjs: {
      ...shared,
      presets: [['@babel/env', {
        modules: 'commonjs'
      }]],
    },
    test: {
      presets: ['@babel/env']
    },
  }
}