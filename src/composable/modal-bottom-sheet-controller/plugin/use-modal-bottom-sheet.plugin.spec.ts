import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { getPlugin } from './index'

const controllerInjectionKey = 'test-ch-bottom-sheet-plugin'
const plugin = getPlugin('injection-key')

const getWrapper = (options?: { controllerInjectionKey: string }) =>
  mount(
    { template: '<span>Test</span>' },
    {
      global: {
        plugins: [[plugin, options]]
      }
    }
  )

describe('useModalBottomSheet plugin', () => {
  it('should provide instance of ModalBottomSheetController when plugin is installed', () => {
    const wrapper = getWrapper({ controllerInjectionKey })
    expect(wrapper.vm.$.appContext.provides[controllerInjectionKey]).toBeTruthy()
  })

  it('should throw error if controllerInjectionKey is not provided or is not string', () => {
    expect(() => getWrapper()).toThrowError()
  })
})
