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
        posY: 'top'
    }
};