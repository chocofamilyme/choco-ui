import ChTabbar from './ChTabbar.vue'
import ChTabbarItem from './ChTabbarItem.vue'

export default {
  title: 'ChTabbar',
  component: ChTabbar,
  args: {
    numberOfItems: 3
  }
}

const Template = (args, { parameters }) => ({
  components: { ChTabbar, ChTabbarItem },
  setup: () => ({ args, parameters }),
  template: `
    <div style="display: flex; flex-direction: column; height: 480px; width: 375px; background: #F1F2F7; padding: 16px;">
      <div style="flex-grow: 1;">Content</div>
      <ChTabbar style="position: sticky; bottom: 16px; width: 100%;">
        <ChTabbarItem 
          v-for="i in args.numberOfItems"
          :is-active="i === 1"
          :badge-amount="i === 3 ? 3 : 0"
          alt="tab"
        >
          <fa-icon :icon="['fas', 'user']" />
        </ChTabbarItem>
      </ChTabbar>
    </div>
  `
})

export const Default = Template.bind({})
