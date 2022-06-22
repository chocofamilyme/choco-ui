import ChHeader from './ChHeader.vue'
import ChHeaderBackButton from './ChHeaderBackButton.vue'
import ChHeaderCloseButton from './ChHeaderCloseButton.vue'

export default {
  title: 'ChHeader',
  component: ChHeader
}

const headerContent = `
  <h2 style="font-size: 18px; font-weight: bold; text-align: center">
    Header
  </h2>
`
const components = { ChHeader, ChHeaderBackButton, ChHeaderCloseButton }
const getWrapperTemplate = innerTemplate => `
  <div 
    style="
      width: 350px; 
      height: 600px; 
      padding: 8px;
      background-color: #f3f3f3; 
      border-radius: 12px;
    "
  >
    ${innerTemplate}
  </div>
`

const DefaultTemplate = () => ({
  components,
  template: getWrapperTemplate(`
    <ChHeader>
      <template #leftAction>
        <ChHeaderBackButton />
      </template>
      ${headerContent}
      <template #rightAction>
        <ChHeaderCloseButton />
      </template>
    </ChHeader>
  `)
})

const OnlyRightActionTemplate = () => ({
  components,
  template: getWrapperTemplate(`
    <ChHeader> 
      ${headerContent}
      <template #rightAction>
        <ChHeaderCloseButton />
      </template>
    </ChHeader>
  `)
})

const OnlyLeftActionTemplate = () => ({
  components,
  template: getWrapperTemplate(`
    <ChHeader>
      <template #leftAction>
        <ChHeaderBackButton />
      </template>
      ${headerContent}
    </ChHeader>
  `)
})

const WithoutActionsTemplate = () => ({
  components,
  template: getWrapperTemplate(`
    <ChHeader>
      ${headerContent}
    </ChHeader>
  `)
})

const WithCustomActionsTemplate = () => ({
  components,
  template: getWrapperTemplate(`
    <ChHeader>
      <template #leftAction>
        <button>Custom Button</button>
      </template>
        ${headerContent}
      <template #rightAction>
        <fa-icon :icon="['fas', 'location']" />
      </template>
    </ChHeader>
  `)
})

export const Default = DefaultTemplate.bind({})
export const OnlyLeftAction = OnlyLeftActionTemplate.bind({})
export const OnlyRightAction = OnlyRightActionTemplate.bind({})
export const WithoutActions = WithoutActionsTemplate.bind({})
export const WithCustomActions = WithCustomActionsTemplate.bind({})
