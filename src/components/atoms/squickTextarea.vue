<template>
    <div :class="`relative inline-flex ${TwdWidth}`">
        <textarea :id="uniqueId" :name="name" :title="title" :class="`
            transition-all
            w-full
            block
            px-2.5
            py-1.5
            text-sm
            shadow-sm
            border
            border-gray-300
            focus:ring-4
            focus:ring-${TwdColor}-500/20
            focus:border-${TwdColor}-400
            read-only:cursor-not-allowed
            read-only:opacity-75
            disabled:cursor-not-allowed
            disabled:opacity-75
            disabled:bg-gray-100
            placeholder:text-gray-300
            ${TwdRounded}`" :disabled="disabled" :required="required"
            :readonly="readonly" :placeholder="placeholder" v-model.trim="modelValue"
        ></textarea>
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
        default: 'MyInput'
    },
    title: {
        type: String,
        default: 'MyInput'
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
    TwdColor: {
        type: String,
        default: 'indigo'
    },
    TwdRounded: {
        type: String,
        default: 'rounded'
    },
    TwdWidth: {
        type: String,
        default: 'w-auto'
    }
})

const modelValue = defineModel('modelValue', { local: true });

const instance = getCurrentInstance();
const uniqueId = ref(null);

// générer un ID unique par défaut
uniqueId.value = props.id
    ? props.id
    : "squick-input-" + instance.uid;
</script>