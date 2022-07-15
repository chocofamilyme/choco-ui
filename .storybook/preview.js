import { app } from '@storybook/vue3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ChBottomSheetPlugin } from '@/index'

import '../src/assets/styles/main.sass'

library.add(fas, far)

app
  .component('fa-icon', FontAwesomeIcon)
  .use(ChBottomSheetPlugin, { controllerInjectionKey: 'bottom-sheet-controller' })

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
