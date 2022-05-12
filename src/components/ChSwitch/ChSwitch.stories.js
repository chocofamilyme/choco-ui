import ChSwitch from './ChSwitch.vue'

export default {
  title: 'Switch',
  component: ChSwitch,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    onClick: {}
  }
}

const Template = args => ({
  components: { ChSwitch },
  setup() {
    return { args }
  },
  template: '<ch-switch v-bind="args" />'
})

export const Empty = Template.bind({})
Empty.args = {
  label: ''
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  checked: true,
  label: 'Switch'
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
  label: 'Switch'
}
