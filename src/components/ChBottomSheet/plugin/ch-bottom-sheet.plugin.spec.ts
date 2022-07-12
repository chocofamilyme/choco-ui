import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ChBottomSheetPlugin } from './index'

const controllerInjectionKey = 'test-ch-bottom-sheet-plugin'

const getWrapper = (options?: { controllerInjectionKey: string }) =>
  mount(
    { template: '<span>Test</span>' },
    {
      global: {
        plugins: [[ChBottomSheetPlugin, options]]
      }
    }
  )

describe('ChBottomSheetPlugin', () => {
  it('should provide instance of ModalBottomSheetController when plugin is installed', () => {
    const wrapper = getWrapper({ controllerInjectionKey })
    expect(wrapper.vm.$.appContext.provides[controllerInjectionKey]).toBeTruthy()
  })

  it('should throw error if controllerInjectionKey is not provided or is not string', () => {
    expect(() => getWrapper()).toThrowError()
  })
})
