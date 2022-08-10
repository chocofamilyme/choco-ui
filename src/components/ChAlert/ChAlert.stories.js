import { ref } from 'vue'
import ChAlert from './ChAlert.vue'
import ChAlertIcon from './ChAlertIcon.vue'
import ChAlertButton from './ChAlertButton.vue'

export default {
  title: 'ChAlert',
  component: ChAlert
}

const Template = (args, { parameters }) => ({
  components: {
    ChAlert,
    ChAlertIcon,
    ChAlertButton
  },
  setup() {
    const alertRef = ref()
    return { args, parameters, alertRef }
  },
  methods: {
    showAlert() {
      this.alertRef.show()
    },
    hideAlert() {
      this.alertRef.hide()
    }
  },
  template: `
    <div>
      <button type="button" @click="showAlert">
        Show alert
      </button>
      <button 
        type="button" 
        style="margin-left: 10px;" 
        @click="hideAlert"
      >
        Hide alert
      </button>
      <div style="position: relative; margin-top: 20px;">
        <ChAlert 
          v-bind="args"
          ref="alertRef" 
          style="width: 300px"
        >
          {{ parameters.content || 'Hello, ChAlert!' }}
          <template #icon>
            <ChAlertIcon>
              <fa-icon :icon="['fas', 'user']" />
            </ChAlertIcon>
          </template>
          <template v-if="parameters.withFooter" #footer>
            <ChAlertButton>
              ChAlert button
            </ChAlertButton>
          </template>
        </ChAlert>
      </div>
    </div>
  `
})

export const Default = Template.bind({})

export const WithLongText = Template.bind({})
WithLongText.parameters = {
  content: `Ошибка связи. Проблема на нашей стороне и мы уже решаем ее`
}

export const WithSmallDuration = Template.bind({})
WithSmallDuration.args = {
  duration: 1000
}

export const Persistent = Template.bind({})
Persistent.args = {
  persistent: true
}

export const WithFooter = Template.bind({})
WithFooter.parameters = {
  withFooter: true
}
