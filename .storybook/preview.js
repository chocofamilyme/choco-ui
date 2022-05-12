import { app } from '@storybook/vue3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import '../src/assets/styles/main.sass'

library.add(fas, far)

app.component('fa-icon', FontAwesomeIcon)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
