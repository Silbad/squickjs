<template>
    <div :class="`badgen transition inline-flex flex-nowrap shadow-sm ${TwdRoundedLeft} ${TwdRoundedRight}`">
        <div
            :class="`px-1.5 py-0.5 select-none bg-gradient-to-b from-gray-500 to-gray-700 text-white text-xs ${TwdRoundedLeft}`">
            <span class="flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]">
                <slot name="label-left"></slot>
            </span>
        </div>
        <div
            :class="`px-1.5 py-0.5 select-none bg-gradient-to-b from-${TwdColor}-300 to-${TwdColor}-500 text-white text-xs ${TwdRoundedRight}`">
            <span class="flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]">
                <slot name="label-right"></slot>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";

const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    TwdColor: {
        type: String,
        default: 'lime'
    },
    TwdRoundedLeft: {
        type: String,
        default: 'rounded-l'
    },
    TwdRoundedRight: {
        type: String,
        default: 'rounded-r'
    },
})

const instance = getCurrentInstance();
const uniqueId = ref(null);

// générer un ID unique par défaut
uniqueId.value = props.id
    ? props.id
    : "squick-badgen-" + instance.uid;
</script>

<style>
.badgen svg {
    @apply w-4 h-4 inline
}
</style>