import viteConfig from '../vite.config.ts'

export default {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: { builder: '@storybook/builder-vite' },
  viteFinal: (config, { configType }) => {
    config.resolve = {
      alias: [
        { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
        { find: '@', replacement: viteConfig.resolve.alias['@'] }
      ]
    }

    if (configType === 'PRODUCTION') {
      config.publicDir = '/choco-ui/';
      config.build.assetsDir = '/choco-ui/';
    }

    return config
  },
  webpackFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/choco-ui/';
    }

    return config;
  },
  managerWebpack: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/choco-ui/';
    }

    return config;
  },
}
