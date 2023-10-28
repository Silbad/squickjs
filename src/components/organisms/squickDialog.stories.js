import SquickDialog from '@/components/organisms/squickDialog.vue';
import SquickButton from '@/components/atoms/squickButton.vue';

export default {
    title: 'Organisms/SquickDialog',
    component: SquickDialog
};

export const alert = {
    render: (args) => ({
        components: { SquickDialog, SquickButton },
        setup() {
            const open = () => {
                args.modelValue = !args.modelValue
            };
            return { args, open };
        },
        template: '<SquickButton @click="open()">Open alert</SquickButton><SquickDialog v-bind="args"><template v-slot:modal-body>Portez ce vieux whisky au juge blond qui fume.</template></SquickDialog>',
    }),
};