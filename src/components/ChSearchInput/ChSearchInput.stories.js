import { ref } from 'vue'
import ChSearchInput from './ChSearchInput.vue'

export default {
  title: 'ChSearchInput',
  component: ChSearchInput,
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' }
  },
  parameters: {
    controls: {
      exclude: ['modelValue']
    }
  }
}

const Template = ({ slots = {}, value = '', ...args }) => ({
  components: { ChSearchInput },
  setup() {
    value = ref(value)

    function onCancel() {
      value.value = ''
    }

    function onInput(e) {
      value.value = e
    }

    return { args, value, onInput, onCancel }
  },
  template: `
    <ch-search-input 
      v-bind="args" 
      :model-value="value" 
      style="--color-secondary-grey: white;--color-active: transparent;" 
      @onInput="onInput"
      @onCancel="onCancel"
    >
      <template v-if="${'prepend' in slots}" #prepend>${slots?.prepend}</template>
      <template v-if="${'append' in slots}" #append>${slots?.append}</template>
      <template v-if="${'clearButton' in slots}" #clearButton>${slots?.clearButton}</template>
    </ch-search-input>
  `
})

export const Empty = Template.bind({})
Empty.args = {
  value: 'empty'
}

export const Clearable = Template.bind({})
Clearable.args = {
  value: '',
  placeholder: 'Найти что-угодно',
  slots: {
    prepend: `<fa-icon :icon="['fas', 'search']" />`,
    clearButton: `<fa-icon :icon="['fas', 'xmark']" />`
  }
}

export const AllSlots = Template.bind({})
AllSlots.args = {
  value: '',
  placeholder: 'Найти что-угодно',
  slots: {
    prepend: `<fa-icon :icon="['fas', 'search']" />`,
    clearButton: `<fa-icon :icon="['fas', 'xmark']" />`,
    append: `<fa-icon :icon="['fas', 'location']" />`
  }
}
