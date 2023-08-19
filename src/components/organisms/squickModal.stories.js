import SquickModal from '@/components/organisms/squickModal.vue';
import SquickButton from '@/components/atoms/squickButton.vue';

export default {
    title: 'Organisms/SquickModal',
    component: SquickModal
};

export const base = {
    render: (args, argTypes) => ({
        components: { SquickModal, SquickButton },
        setup() {
            const open = () => {
                args.modelValue = !args.modelValue
            };
            return { args, argTypes, open };
        },
        template: '<SquickButton @click="open()">Open modal</SquickButton><SquickModal v-bind="args"><template v-slot:modal-header><strong>My modal</strong></template><template v-slot:modal-body>Portez ce vieux whisky au juge blond qui fume.</template><template v-slot:modal-footer><div class="w-full flex justify-end"><SquickButton>Send</SquickButton></div></template></SquickModal>',
    }),
    argTypes: {
        TwdColor: {
            control: 'text',
        },
    },
};