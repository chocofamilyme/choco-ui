import ChLabel from './ChLabel.vue'

export default {
  title: 'Label',
  component: ChLabel,
  args: {
    variant: 'regular'
  },
  parameters: {
    text: 'Label',
    styles: 'background-color: #e3e3e3;'
  }
}

const Template = (args, { parameters }) => ({
  components: { ChLabel },
  setup() {
    return { args, parameters }
  },
  template: `
    <ChLabel v-bind="args" :style="parameters.styles">
      <template v-if="parameters.template">
        <span v-html="parameters.template" />
      </template>
      <template v-else>
        {{ parameters.text }}
      </template>
    </ChLabel>
  `
})

export const Default = Template.bind({})

export const LongText = Template.bind({})
LongText.parameters = {
  text: 'This is very very very long text'
}

export const LargeText = Template.bind({})
LargeText.parameters = {
  styles: 'font-size: 30px; background-color: #e3e3e3;'
}

export const Wide = Template.bind({})
Wide.args = {
  variant: 'wide'
}

export const Customized = Template.bind({})
Customized.parameters = {
  styles: 'background-color: #46C01B; color: #fff; font-weight: bold'
}

export const WithTemplate = Template.bind({})
WithTemplate.parameters = {
  template: `
    <span style="font-weight: bold">Highlighted Text</span>
    <span style="text-decoration: line-through">Old Price</span>
  `
}
