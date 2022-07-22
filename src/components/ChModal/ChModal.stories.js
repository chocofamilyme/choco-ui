import ChModal from './ChModal.vue'

const exampleModalName = 'example-modal-name'

export default {
  title: 'ChModal',
  component: ChModal,
  args: {
    name: exampleModalName,
    onClose: {}
  }
}

const Template = (args, { parameters }) => ({
  components: { ChModal },
  inject: { controller: 'modal-controller' },
  setup() {
    return { args, parameters }
  },
  methods: {
    showModal() {
      this.controller.show(exampleModalName, parameters.params)
    }
  },
  template: `
    <div>
      <button @click="showModal">
        Open ChModal
      </button>
      <ChModal v-bind="args" style="--choco-ui-modal-width: 375px;">
        <template v-if="parameters.withHeader" #header="{ hide }">
          <header style="margin-bottom: 15px; display: flex; justify-content: space-between;">
            <h3>This is header</h3>
            <button @click="hide">Hide modal</button>
          </header> 
        </template>
        <template v-slot="{ params }">
          <p class="p-4" :style="parameters.isScrollable ? 'height: 1000px' : ''">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore asperiores illum ab accusamus quas distinctio fuga,
            quis vero aut, incidunt nesciunt unde ea provident officiis
            facilis id consectetur neque iste.
          </p>
          <div v-if="parameters.withParams">
            <h3 style="margin-top: 20px">
              Modal params
            </h3>
            <p>{{ params.someParams }}</p>
            <p>{{ params.number }}</p>
            <p>{{ params.object.foo }}</p>
        </div>
        </template>
      </ChModal>
    </div>
  `
})

export const Default = Template.bind({})

export const WithHeader = Template.bind({})
WithHeader.parameters = {
  withHeader: true
}

export const WithParams = Template.bind({})
WithParams.parameters = {
  withParams: true,
  params: {
    someParams: 'These are some params',
    number: 123,
    object: { foo: 'bar' }
  }
}

export const Scrollable = Template.bind({})
Scrollable.parameters = {
  withHeader: true,
  isScrollable: true
}

export const Persistent = Template.bind({})
Persistent.args = {
  persistent: true
}
Persistent.parameters = {
  withHeader: true
}
