import SquickOverlay from '@/components/atoms/squickOverlay.vue';
import SquickButton from '@/components/atoms/squickButton.vue';

export default {
    title: 'Atoms/SquickOverlay',
    component: SquickOverlay
};

export const base = {
    render: (args) => ({
        components: { SquickOverlay, SquickButton },
        setup() {
            const open = () => {
                args.show = !args.show
            };
            return { args, open };
        },
        template: '<SquickOverlay v-bind="args"><div class="p-4 w-52 flex justify-center items-center bg-white rounded shadow-sm">Amet sadipscing praesent. Sit lorem lobortis rebum vel erat et diam velit dolor dolor euismod dolore takimata.</div></SquickOverlay><br /><br /><SquickButton @click="open()">Toggle overlay</SquickButton>',
    }),
};

export const button = {
    render: (args) => ({
        components: { SquickOverlay, SquickButton },
        setup() {
            const open = () => {
                args.show = !args.show
            };
            return { args, open };
        },
        template: '<SquickOverlay v-bind="args"><SquickButton @click="open()">Show overlay</SquickButton></SquickOverlay>',
    }),
};