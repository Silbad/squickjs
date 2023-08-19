import SquickInput from '@/components/atoms/squickInput.vue';

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

export const password = {
    render: (args, argTypes) => ({
        components: { SquickInput },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickInput v-bind="args" />',
    }),
    args: {
        password: true,
        showPassword: true
    },
    argTypes: {
        TwdColor: {
            control: 'text',
        },
    },
};