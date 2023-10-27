<template>
    <button :id="uniqueId" ref="uniqueId" :name="name" :title="title" :type="mode" :class="containerClass"
        :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";

const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: 'MyButton'
    },
    title: {
        type: String,
        default: 'MyButton'
    },
    mode: {
        type: String,
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    containerClass: {
        type: String,
        default: 'flex justify-center items-center px-2.5 py-1.5 text-sm shadow-sm outline-none border border-gray-300 bg-white bg-gradient-to-b from-white to-gray-100 hover:bg-none hover:bg-gray-100 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 active:ring-2 disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-gray-100 rounded w-auto transition',
    },
})

const instance = getCurrentInstance();
const uniqueId = ref(null);

// générer un ID unique par défaut
uniqueId.value = props.id
    ? props.id
    : "squick-button-" + instance.uid;
</script>