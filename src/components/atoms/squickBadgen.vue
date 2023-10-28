<template>
    <div :class="containerClass">
        <div
            :class="leftContainerClass">
            <span class="flex justify-center items-center drop-shadow-[1px_1px_rgba(0,0,0,0.3)]">
                <slot name="label-left"></slot>
            </span>
        </div>
        <div
            :class="rightContainerClass">
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
    containerClass: {
        type: String,
        default: 'badgen transition inline-flex flex-nowrap shadow-sm rounded',
    },
    leftContainerClass: {
        type: String,
        default: 'px-1.5 py-0.5 select-none bg-gradient-to-b from-gray-500 to-gray-700 text-white text-xs rounded-l',
    },
    rightContainerClass: {
        type: String,
        default: 'px-1.5 py-0.5 select-none bg-gradient-to-b from-lime-300 to-lime-500 text-white text-xs rounded-r',
    }
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