import SquickButton from '@/components/atoms/squickButton.vue';

export default {
    title: 'Atoms/SquickButton',
    component: SquickButton
};

export const base = {
    render: (args, argTypes) => ({
        components: { SquickButton },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickButton v-bind="args">Envoyer</SquickButton>',
    }),
};

export const icon = {
    render: (args, argTypes) => ({
        components: { SquickButton },
        setup() {
            return { args, argTypes };
        },
        template: '<SquickButton v-bind="args"><svg class="w-5 h-5 stroke-gray-400 hover:cursor-pointer" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></SquickButton>',
    }),
};