import type { App } from 'vue'
import { useModalBottomSheetController } from '@/composable/modal-bottom-sheet-controller'
import { injectionKey } from './injection-key.config'

export const ChBottomSheetPlugin = {
  controller: useModalBottomSheetController(),
  install(app: App, { controllerInjectionKey = '' } = {}) {
    if (controllerInjectionKey && typeof controllerInjectionKey === 'string') {
      app.provide(injectionKey, controllerInjectionKey)
      app.provide(controllerInjectionKey, this.controller)
    } else {
      throw new Error('Invalid injection key. controllerInjectionKey must be string')
    }
  }
}
