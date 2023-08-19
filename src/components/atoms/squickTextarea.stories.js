import SquickTextarea from '@/components/atoms/squickTextarea.vue';

export default {
    title: 'Atoms/SquickTextarea',
    component: SquickTextarea
};

export const base = {
    render: (args, argTypes) => ({
        components: { SquickTextarea },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickTextarea v-bind="args" />',
    }),
    argTypes: {
        TwdColor: {
            control: 'text',
        },
    },
};
