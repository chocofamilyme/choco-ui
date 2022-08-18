import { ref } from 'vue'

import ChToggleButtonGroup from './ChToggleButtonGroup.vue'
import ChToggleButton from '../ChToggleButton/index'

export default {
  title: 'ToggleButtonGroup',
  component: ChToggleButtonGroup
}

const Template = args => ({
  components: { ChToggleButtonGroup, ChToggleButton },
  setup() {
    const currentId = ref('1')
    return { args, currentId }
  },
  template: `
    <ch-toggle-button-group v-bind="args" v-bind:current-id="currentId">
      <ch-toggle-button name="toggle-button" id="1" @change="currentId = '1'">1</ch-toggle-button>
      <ch-toggle-button name="toggle-button" id="2" @change="currentId = '2'">2</ch-toggle-button>
      <ch-toggle-button name="toggle-button" id="3" @change="currentId = '3'">3</ch-toggle-button>
    </ch-toggle-button-group>
  `
})

export const WithSlot = Template.bind({})
