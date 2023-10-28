import SquickInput from '@/components/atoms/squickInput.vue';

export default {
    title: 'Atoms/SquickInput',
    component: SquickInput
};

export const base = {
    render: (args) => ({
        components: { SquickInput },
        setup() {
            return { args };
        },
        template: '<SquickInput v-bind="args" />',
    }),
};

export const password = {
    render: (args) => ({
        components: { SquickInput },
        setup() {
            return { args };
        },
        template: '<SquickInput v-bind="args" />',
    }),
    args: {
        password: true,
        showPassword: true
    },
};