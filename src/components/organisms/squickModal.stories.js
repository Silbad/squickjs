import SquickModal from '@/components/organisms/squickModal.vue';
import SquickButton from '@/components/atoms/squickButton.vue';

export default {
    title: 'Organisms/SquickModal',
    component: SquickModal
};

export const base = {
    render: (args) => ({
        components: { SquickModal, SquickButton },
        setup() {
            const open = () => {
                args.modelValue = !args.modelValue
            };
            return { args, open };
        },
        template: '<SquickButton @click="open()">Open modal</SquickButton><SquickModal v-bind="args"><template v-slot:modal-header><strong>My modal</strong></template><template v-slot:modal-body>Portez ce vieux whisky au juge blond qui fume.</template><template v-slot:modal-footer><div class="w-full flex justify-end"><SquickButton>Send</SquickButton></div></template></SquickModal>',
    }),
};

export const panel = {
    render: (args) => ({
        components: { SquickModal, SquickButton },
        setup() {
            const open = () => {
                args.modelValue = !args.modelValue
            };
            return { args, open };
        },
        template: '<SquickButton @click="open()">Open modal</SquickButton><SquickModal v-bind="args"><template v-slot:modal-header><strong>My modal</strong></template><template v-slot:modal-body>Portez ce vieux whisky au juge blond qui fume.</template><template v-slot:modal-footer><div class="w-full flex justify-end"></div></template></SquickModal>',
    }),
    args: {
        posY: 'end',
        posX: 'end',
        transitionContent: 'slide-right',
        contentClass: 'flex flex-col w-full md:w-1/2 max-w-full shadow-sm bg-white border-l border-gray-400 dark:bg-gray-900 dark:border-gray-700 relative'
    },
};