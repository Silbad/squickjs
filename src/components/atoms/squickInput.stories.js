import SquickInput from './SquickInput.vue';

export default {
    title: 'Atoms/SquickInput',
    component: SquickInput
};

export const base = {
    render: (args, argTypes) => ({
        components: { SquickInput },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickInput v-bind="args" />',
    }),
    argTypes: {
        TwdColor: {
            control: 'text',
        },
    },
};