import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import { findByTestId } from '@/__test__/utils'
import ChSearchInput from './ChSearchInput.vue'

let SearchInput: VueWrapper | null = null

describe('ChSearchInput', () => {
  beforeEach(async () => {
    SearchInput = mount(ChSearchInput, {
      props: {
        modelValue: 'Value',
        placeholder: 'Поиск',
        hasShadow: true
      },
      slots: {
        prepend: `<template #prepend>prepend</template>`,
        append: `<template #append>append</template>`,
        clearButton: `<template #clearButton>clearButton</template>`
      }
    }) as VueWrapper
  })

  it('should emit "onInput" event with right value, when change value in input', async () => {
    SearchInput?.find('input[type="text"]').setValue('my value')

    await SearchInput?.vm.$nextTick()
    expect(SearchInput?.emitted().onInput).toBeTruthy()
    expect(SearchInput?.emitted().onInput.length).toBe(1)
    expect(SearchInput?.emitted().onInput[0]).toEqual(['my value'])
  })

  it('should show cancel button, when focus on input', async () => {
    expect(findByTestId(SearchInput as VueWrapper, 'сancel-button').exists()).toBe(false)

    SearchInput?.find('input[type="text"]').trigger('focus')

    await SearchInput?.vm.$nextTick()
    expect(findByTestId(SearchInput as VueWrapper, 'сancel-button').exists()).toBe(true)
  })

  it('should emit "onCancel" event, when click to cancel button', async () => {
    SearchInput?.find('input[type="text"]').trigger('focus')

    await SearchInput?.vm.$nextTick()
    findByTestId(SearchInput as VueWrapper, 'сancel-button').trigger('click')

    await SearchInput?.vm.$nextTick()
    expect(SearchInput?.emitted().onCancel).toBeTruthy()
  })

  it('should hide cancel button, when click to cancel button', async () => {
    SearchInput?.find('input[type="text"]').trigger('focus')

    await SearchInput?.vm.$nextTick()
    expect(findByTestId(SearchInput as VueWrapper, 'сancel-button').exists()).toBe(true)
    findByTestId(SearchInput as VueWrapper, 'сancel-button').trigger('click')

    await SearchInput?.vm.$nextTick()
    expect(findByTestId(SearchInput as VueWrapper, 'сancel-button').exists()).toBe(false)
  })

  it('should render all slots', async () => {
    expect(SearchInput?.html()).toContain('prepend')
    expect(SearchInput?.html()).toContain('append')
    expect(SearchInput?.html()).toContain('clearButton')
  })
})
