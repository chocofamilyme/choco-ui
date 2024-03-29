import { ref } from 'vue'
import ChInput from './ChInput.vue'

export default {
  title: 'ChInput',
  component: ChInput,
  argTypes: {
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    modelValue: { control: 'text' },
    autofocus: { control: 'boolean' },
    label: { control: 'text' },
    component: {
      options: ['input', 'textarea'],
      control: 'select'
    },
    placeholder: { control: 'text' },
    outerLabel: { control: 'text' },
    afterText: [String, Array]
  },
  parameters: {
    controls: {
      exclude: ['modelValue']
    }
  }
}

const Template = ({ slots = {}, value = '', ...args }) => ({
  components: { ChInput },
  setup() {
    value = ref(value)
    return { args, value }
  },
  template: `
    <ch-input v-bind="args" v-model="value">
      <template v-if="${'prepend' in slots}" #prepend>${slots?.prepend}</template>
      <template v-if="${'append' in slots}" #append>${slots?.append}</template>
    </ch-input>
  `
})

export const Empty = Template.bind({})
Empty.args = {
  value: 'empty'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Input'
}

export const Clearable = Template.bind({})
Clearable.args = {
  checked: true,
  label: 'Input',
  clearable: true
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  label: 'Input'
}

export const WithOuterLabel = Template.bind({})
WithOuterLabel.args = {
  outerLabel: 'Outer label',
  label: 'Input'
}

export const WithAppendSlot = Template.bind({})
WithAppendSlot.args = {
  label: 'Input',
  slots: {
    append: `<fa-icon :icon="['fas', 'user']" />`
  }
}

export const ClearableWithAppendSlot = Template.bind({})
ClearableWithAppendSlot.args = {
  checked: true,
  label: 'Input',
  clearable: true,
  value: 'Value',
  slots: {
    append: `<fa-icon :icon="['fas', 'user']" />`
  }
}

export const WithPrependSlot = Template.bind({})
WithPrependSlot.args = {
  label: 'Input',
  slots: {
    prepend: `<fa-icon :icon="['fas', 'location']" />`
  }
}

export const WithAfterText = Template.bind({})
WithAfterText.args = {
  label: 'Input',
  afterText: 'text'
}

export const Textarea = Template.bind({})
Textarea.args = {
  label: 'Input',
  component: 'textarea'
}

export const WithTelKeyBoard = Template.bind({})
WithTelKeyBoard.args = {
  value: 'For mobile only',
  type: 'tel'
}
