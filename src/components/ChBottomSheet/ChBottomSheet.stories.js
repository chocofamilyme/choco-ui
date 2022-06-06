import { useModalBottomSheetController } from '@/composable/use-modal-bottom-sheet-controller'
import ChBottomSheet from './ChBottonSheet.vue'

const exampleBottomSheetName = 'example-bottom-sheet-name'
const modalBottomSheetController = useModalBottomSheetController()

export default {
  title: 'ChBottomSheet',
  component: ChBottomSheet,
  args: {
    name: exampleBottomSheetName,
    onClose: {}
  }
}

const Template = (args, { parameters }) => ({
  components: { ChBottomSheet },
  provide: {
    modalBottomSheetController
  },
  setup() {
    return { args, parameters }
  },
  methods: {
    showBottomSheet() {
      modalBottomSheetController.show(exampleBottomSheetName, parameters.params)
    }
  },
  template: `
    <div>
      <button @click="showBottomSheet">
        Open ChBottomSheet
      </button>
      <ChBottomSheet v-bind="args">
        <template v-if="parameters.withHeader" #header="{ hide }">
          <header style="margin-bottom: 30px; display: flex; justify-content: space-between;">
            <h3>This is header</h3>
            <button @click="hide">Hide bottom sheet</button>
          </header> 
        </template>
        <template v-slot="{ params }">
          <p class="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore asperiores illum ab accusamus quas distinctio fuga,
            quis vero aut, incidunt nesciunt unde ea provident officiis
            facilis id consectetur neque iste.
          </p>
          <div v-if="parameters.withParams">
            <h3 style="margin-top: 30px">
              Modal params
            </h3>
            <p>{{ params.someParams }}</p>
            <p>{{ params.number }}</p>
            <p>{{ params.object.foo }}</p>
        </div>
        </template>
      </ChBottomSheet>
    </div>
  `
})

export const Default = Template.bind({})

export const WithParams = Template.bind({})
WithParams.parameters = {
  withParams: true,
  params: {
    someParams: 'These are some params',
    number: 123,
    object: { foo: 'bar' }
  }
}

export const WithHeader = Template.bind({})
WithHeader.parameters = {
  withHeader: true
}
