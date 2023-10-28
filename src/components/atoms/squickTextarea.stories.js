import SquickTextarea from '@/components/atoms/squickTextarea.vue';

export default {
    title: 'Atoms/SquickTextarea',
    component: SquickTextarea
};

export const base = {
    render: (args) => ({
        components: { SquickTextarea },
        setup() {
            return { args };
        },
        template: '<SquickTextarea v-bind="args" />',
    }),
};
