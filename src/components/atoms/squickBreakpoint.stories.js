import SquickBreakpoint from '@/components/atoms/squickBreakpoint.vue';

export default {
    title: 'Atoms/SquickBreakpoint',
    component: SquickBreakpoint
};

export const base = {
    render: (args) => ({
        components: { SquickBreakpoint },
        setup() {
            return { args };
        },
        template: '<SquickBreakpoint v-bind="args" />',
    }),
    args: {
        containerClass: 'select-none fixed right-4 top-4 opacity-90 text-center text-xs'
    }
};