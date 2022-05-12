import ChToggleButtonGroup from './ChToggleButtonGroup.vue'

export default {
  title: 'ToggleButtonGroup',
  component: ChToggleButtonGroup
}

const Template = args => ({
  components: { ChToggleButtonGroup },
  setup() {
    return { args }
  },
  template: '<ch-toggle-button-group v-bind="args" />'
})

export const WithLabel = Template.bind({})
WithLabel.args = {
  options: ['Label', { label: 'Label 2', icon: ['fas', 'location'], active: true }]
}
