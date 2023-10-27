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
};