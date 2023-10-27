<template>
    <div :id="uniqueId" ref="uniqueId" class="relative inline-flex h-full" tabindex="0">
        <slot></slot>
        <div :class="`${overlayClass} ${blur ? 'backdrop-blur-sm' : ''}`" v-if="show">
            <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, watch } from "vue";

const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    show: {
        type: Boolean,
        default: false
    },
    blur: {
        type: Boolean,
        default: false
    },
    overlayClass: {
        type: String,
        default: 'absolute w-full h-full bg-neutral-100/80 border border-transparent flex items-center justify-center left-0 top-0 rounded z-40',
    },
    svgClass: {
        type: String,
        default: 'z-50 animate-spin h-5 w-5 text-neutral-500',
    },
})

const instance = getCurrentInstance();
const uniqueId = ref(null);

watch(() => props.show, (newState, oldState) => {
    if (newState === true) {
        uniqueId.value.focus()
    }
})

// générer un ID unique par défaut
uniqueId.value = props.id
    ? props.id
    : "squick-overlay-" + instance.uid;
</script>