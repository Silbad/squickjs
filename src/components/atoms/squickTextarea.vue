<template>
    <div :class="containerClass">
        <textarea :id="uniqueId" :name="name" :title="title" :class="textareaClass" :disabled="disabled"
            :required="required" :readonly="readonly" :placeholder="placeholder" v-model.trim="modelValue">
        </textarea>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, watch } from "vue";

const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: 'MyTextarea'
    },
    title: {
        type: String,
        default: 'MyTextarea'
    },
    placeholder: {
        type: String,
        default: 'Write something...'
    },
    readonly: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    containerClass: {
        type: String,
        default: 'w-full relative inline-flex w-auto'
    },
    textareaClass: {
        type: String,
        default: 'w-full block px-2.5 py-1.5 min-h-[96px] max-h-96 text-sm shadow-sm border border-gray-300 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 read-only:cursor-not-allowed read-only:opacity-75 disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-gray-100 placeholder:text-gray-300 rounded transition'
    },
})

const modelValue = defineModel('modelValue', { local: true });

const instance = getCurrentInstance();
const uniqueId = ref(null);

// générer un ID unique par défaut
uniqueId.value = props.id
    ? props.id
    : "squick-textarea-" + instance.uid;
</script>