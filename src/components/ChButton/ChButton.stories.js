import ChButton from './ChButton.vue'

export default {
  title: 'Button',
  component: ChButton,
  argTypes: {
    shape: {
      description: 'Форма кнопки',
      control: 'select',
      options: ['flexible', 'circle']
    },
    size: {
      description: 'Размер кнопки',
      control: { type: 'select' },
      options: ['sm', 'md', 'xs']
    },
    light: { control: 'boolean', defaultValue: false },
    simple: { control: 'boolean', defaultValue: false },
    bordered: { control: 'boolean', defaultValue: false },
    disabled: { control: 'boolean', defaultValue: false },
    onClick: {}
  }
}

const Template = args => ({
  components: { ChButton },
  setup() {
    return { args }
  },
  template: '<ch-button v-bind="args">{{ args.text }}</ch-button>'
})

export const Circle = Template.bind({})
Circle.args = {
  shape: 'circle',
  text: 'x'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  text: 'Button'
}

export const Light = Template.bind({})
Light.args = {
  light: true,
  text: 'Button'
}

export const Simple = Template.bind({})
Simple.args = {
  simple: true,
  text: 'Button'
}

export const Bordered = Template.bind({})
Bordered.args = {
  bordered: true,
  text: 'Button'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  text: 'Button'
}
