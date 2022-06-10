import ChTextBlock from './ChTextBlock.vue'

export default {
  title: 'TextBlock',
  component: ChTextBlock,
  argTypes: {
    description: { control: 'text' },
    label: { control: 'text' },
    caption: { control: 'text' },
    additional: { control: 'text' }
  }
}

const Template = args => ({
  components: { ChTextBlock },
  setup() {
    return { args }
  },
  template: '<ch-text-block v-bind="args" />'
})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label'
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  description: 'Description',
  label: 'Label'
}

export const Full = Template.bind({})
Full.args = {
  description: 'Description',
  label: 'Label',
  caption: 'Caption',
  additional: 'additional'
}
