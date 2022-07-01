import ChCheckbox from './ChCheckbox.vue'

export default {
  title: 'Checkbox',
  component: ChCheckbox,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    change: {}
  }
}

const Template = args => ({
  components: { ChCheckbox },
  setup() {
    return { args }
  },
  template: '<ch-checkbox v-bind="args" />'
})

export const Empty = Template.bind({})
Empty.args = {
  label: ''
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  checked: true,
  label: 'Checkbox'
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
  label: 'Checkbox'
}

export const Reversed = Template.bind({})
Reversed.args = {
  checked: true,
  reversed: true,
  label: 'Reversed checkbox'
}
