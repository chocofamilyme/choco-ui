# choco-ui

This template should help get you started developing with Vue 3 in Vite.

## Istallation

```
npm i choco-ui
```

## Правила разработки

[Описаны здесь](./CONTRIBUTING.md)

## Preview Storybook 
Создав PR, в комментариях вы получите уникальный preview storybook url от github бота, в качестве префикс возьмется название вашей ветки. 

Этот URL можете расшейрить своим тестировщикам, дизайнерам. 

Под капотом netlify-cli + github actions.

Storybook для ветки main - https://choco-ui.netlify.app/

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Usage

```html
<script>
import { ChButton, ChInput } from 'choco-ui'; // Import needed components
import 'choco-ui/styles'; // Import styles for components
</script>
```

Styles can be imported separately in `.css` files and then imported to entry file

```css
/* css/main.css */
@import 'choco-ui/styles';

:root {
    /* Custom styles */
    ...
}
```

```js
// index.js, main.js or any other app entry file
import { createApp, h, resolveComponent  } from 'vue';
import '@css/main.css';

const App = {
  name: 'App',
  render: () => h('h1', 'Hello, vue app')
};

const app = createApp(App);

app.mount("#app");

```