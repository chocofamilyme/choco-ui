import ChHoverButtonGroup from './ChHoverButtonGroup.vue'
import ChHoverButton from './ChHoverButton.vue'

export default {
  title: 'HoverButtonGroup',
  component: ChHoverButtonGroup,
  parameters: {
    amount: 1
  }
}

const Template = (_, { parameters }) => ({
  components: { ChHoverButtonGroup, ChHoverButton },
  setup() {
    return { parameters }
  },
  template: `
    <div style="width: 375px; height: 600px; padding: 20px; background-color: #f3f3f3;">
      <ChHoverButtonGroup>
        <ChHoverButton 
          v-for="i in parameters.amount"
          :key="i"
          style="font-size: 16px;"
        >
          <span style="width: 10px; height: 10px; margin-right: 10px; background: #000; transform: rotate(45deg)"></span>
          Button {{ i }}
        </ChHoverButton>
      </ChHoverButtonGroup>
    </div>
  `
})

export const Default = Template.bind({})

export const With2Buttons = Template.bind({})
With2Buttons.parameters = {
  amount: 2
}

export const With3Buttons = Template.bind({})
With3Buttons.parameters = {
  amount: 3
}
