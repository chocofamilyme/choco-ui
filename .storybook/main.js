import viteConfig from '../vite.config.ts'

export default {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: { builder: '@storybook/builder-vite' },
  viteFinal: config => {
    config.resolve = {
      alias: [
        { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
        { find: '@', replacement: viteConfig.resolve.alias['@'] }
      ]
    }

    config.css = viteConfig.css
    return config
  }
}
