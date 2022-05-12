import ChRadio from './ChRadio.vue'

export default {
  title: 'Radio',
  component: ChRadio,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    onClick: {}
  }
}

const Template = args => ({
  components: { ChRadio },
  setup() {
    return { args }
  },
  template: '<ch-radio v-bind="args" />'
})

export const Empty = Template.bind({})
Empty.args = {
  name: 'radio1',
  label: ''
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'radio2',
  disabled: true,
  checked: true,
  label: 'Radio'
}

export const Checked = Template.bind({})
Checked.args = {
  name: 'radio3',
  checked: true,
  label: 'Radio'
}
