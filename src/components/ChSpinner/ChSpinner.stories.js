import ChSpinner from './ChSpinner.vue'

export default {
  title: 'Spinner',
  component: ChSpinner,
  argTypes: {
    size: {
      description: 'Размер спиннера',
      control: { type: 'select' },
      options: ['lg', 'md', 'base', 'sm']
    }
  }
}

const Template = args => ({
  components: { ChSpinner },
  setup: () => ({ args }),
  template: '<ch-spinner v-bind="args"></ch-spinner>'
})

export const Base = Template.bind({})
Base.args = { size: 'base', box: false }

export const Box = Template.bind({})
Box.args = { size: 'base', box: true }
