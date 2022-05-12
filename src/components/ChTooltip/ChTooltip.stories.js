import ChTooltip from './ChTooltip.vue'

export default {
  title: 'Tooltip',
  component: ChTooltip,
  argTypes: {
    behaviour: {
      options: ['hover', 'click'],
      control: 'select'
    },
    position: {
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left'
      ],
      control: 'select'
    },
    duration: { conrtol: 'number' }
  }
}

const Template = args => ({
  components: { ChTooltip },
  setup() {
    return { args }
  },
  template: `
    <span style="display: inline-block; padding: 50px">
      <ch-tooltip v-bind="args">
        <button>button</button>  
      </ch-tooltip>
    </span>
  `
})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'long tooltip text'
}

export const PosTopLeft = Template.bind({})
PosTopLeft.args = {
  label: 'long tooltip text',
  position: 'top-left'
}

export const PosTopRight = Template.bind({})
PosTopRight.args = {
  label: 'long tooltip text',
  position: 'top-right'
}

export const PosBottomLeft = Template.bind({})
PosBottomLeft.args = {
  label: 'long tooltip text',
  position: 'bottom-left'
}

export const PosBottomRight = Template.bind({})
PosBottomRight.args = {
  label: 'long tooltip text',
  position: 'bottom-right'
}

export const PosTop = Template.bind({})
PosTop.args = {
  label: 'long tooltip text',
  position: 'top'
}

export const PosBottom = Template.bind({})
PosBottom.args = {
  label: 'long tooltip text',
  position: 'bottom'
}

export const PosLeft = Template.bind({})
PosLeft.args = {
  label: 'long tooltip text',
  position: 'left'
}

export const PosRight = Template.bind({})
PosRight.args = {
  label: 'long tooltip text',
  position: 'right'
}
