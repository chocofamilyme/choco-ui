import type { InjectionKey, Ref } from 'vue'
import type Glide from '@glidejs/glide'

const gliderInjectionKey = Symbol('ch-slider:glider') as InjectionKey<Ref<Glide.Properties>>
const numberOfSlidesInjectionKey = Symbol('ch-slider:number-of-slides') as InjectionKey<Ref<number>>

export const carouselConfig = { gliderInjectionKey, numberOfSlidesInjectionKey }
