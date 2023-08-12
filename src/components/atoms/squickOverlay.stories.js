import SquickOverlay from './squickOverlay.vue';
import SquickButton from './squickButton.vue';

export default {
    title: 'Atoms/SquickOverlay',
    component: SquickOverlay
};

export const base = {
    render: (args, argTypes) => ({
        components: { SquickOverlay },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickOverlay v-bind="args"><div class="p-4 w-52 flex justify-center items-center bg-white rounded shadow-sm">Amet sadipscing praesent. Sit lorem lobortis rebum vel erat et diam velit dolor dolor euismod dolore takimata.</div></SquickOverlay>',
    }),
    args: {
        show: true
    },
    argTypes: {
        TwdColor: {
            control: 'text',
        },
    },
};

export const button = {
    render: (args, argTypes) => ({
        components: { SquickOverlay, SquickButton },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickOverlay v-bind="args"><SquickButton>Envoyer</SquickButton></SquickOverlay>',
    }),
    args: {
        show: true
    },
    argTypes: {
        TwdColor: {
            control: 'text',
        },
    },
};