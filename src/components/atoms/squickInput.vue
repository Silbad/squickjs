<template>
    <div :class="`relative inline-flex ${TwdSize}`">
        <input :id="uniqueId" :name="name" :title="title" :type="mode" :class="`
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
            ${TwdRounded} ${showPassword && password ? 'pr-12' : ''}`" :disabled="disabled"
            :required="required" :readonly="readonly" :placeholder="placeholder" v-model.trim="fieldValue" />
        <div class="px-2.5 w-12 text-sm absolute inset-y-0 right-0 flex justify-center items-center"
            v-if="showPassword && password">
            <svg class="w-4 h-4 stroke-black hover:cursor-pointer" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" @click="tooglePassword()" v-if="mode === 'password'">
                <path d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path
                    d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <svg class="w-4 h-4 stroke-black hover:cursor-pointer" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg" @click="tooglePassword()" v-if="mode === 'text'">
                <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance, watch, useModel } from "vue";

const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: 'FirstInput'
    },
    title: {
        type: String,
        default: 'FirstInput'
    },
    placeholder: {
        type: String,
        default: 'Write something...'
    },
    password: {
        type: Boolean,
        default: false
    },
    showPassword: {
        type: Boolean,
        default: false
    },
    generatePassword: {
        type: Boolean,
        default: false
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
    TwdSize: {
        type: String,
        default: 'w-auto'
    },
    modelValue: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['update:modelValue']);

const fieldValue = useModel(props, 'modelValue')
const instance = getCurrentInstance();
const uniqueId = ref(null);
const mode = ref(props.password ? 'password' : 'text')

watch(() => props.password, (newMode, oldMode) => {
    mode.value = newMode ? 'password' : 'text';
})

const tooglePassword = () => {
    mode.value = (mode.value === 'password') ? 'text' : 'password';
}

uniqueId.value = props.id
    ? props.id
    : "squick-input-" + instance.uid;
</script>