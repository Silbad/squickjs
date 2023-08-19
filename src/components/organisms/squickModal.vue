<template>
    <VueFinalModal :modalId="uniqueId" :class="`flex justify-center items-center`"
        :content-class="`flex flex-col w-64 max-w-xl mx-4 shadow-sm bg-white dark:bg-gray-900 border dark:border-gray-700 ${TwdRounded}`"
        :content-transition="`vfm-${transitionContent}`" :overlay-transition="`vfm-${transitionOverlay}`"
        v-model="modelValue" :clickToClose="false" :focusTrap="{
            allowOutsideClick: true,
            returnFocusOnDeactivate: false
        }">
        <div class="p-4 empty:hidden flex flex-nowrap justify-between border-b border-gray-200 space-x-4">
            <div class="grow">
                <slot name="modal-header"><strong>Hello!</strong></slot>
            </div>
            <button type="button" @click="closeModal">
                <svg class="transition inline stroke-black dark:stroke-white hover:stroke-red-500" width="24px"
                    height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
        <div class="p-4 empty:hidden">
            <slot name="modal-body"></slot>
        </div>
        <div class="p-4 empty:hidden">
            <slot name="modal-footer"></slot>
        </div>
    </VueFinalModal>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { VueFinalModal } from 'vue-final-modal';

const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    transitionOverlay: {
        type: String,
        default: "fade"
    },
    transitionContent: {
        type: String,
        default: "slide-up"
    },
    TwdColor: {
        type: String,
        default: "indigo"
    },
    TwdRounded: {
        type: String,
        default: "rounded"
    },
})

const modelValue = defineModel('modelValue', {
    required: true,
    default: false,
    local: true
});

const instance = getCurrentInstance();
const uniqueId = ref(null);

const closeModal = () => {
    modelValue.value = false;
}

// générer un ID unique par défaut
uniqueId.value = props.id
    ? props.id
    : "btn-" + instance.uid;
</script>

<style>
.vfm--fixed {
    position: fixed
}

.vfm--absolute {
    position: absolute
}

.vfm--inset {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.vfm--overlay {
    z-index: -1;
    background-color: #00000080
}

.vfm--prevent-none {
    pointer-events: none
}

.vfm--prevent-auto {
    pointer-events: auto
}

.vfm--outline-none:focus {
    outline: none
}

@keyframes fade-in {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fade-out {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.vfm-fade-enter-active {
    animation: fade-in .3s ease
}

.vfm-fade-leave-active {
    animation: fade-out .3s ease
}

.vfm-bounce-back {
    transition-property: transform;
    transition-duration: .3s
}

.vfm-slide-up-enter-active,
.vfm-slide-up-leave-active,
.vfm-slide-down-enter-active,
.vfm-slide-down-leave-active {
    transition: transform .3s ease
}

.vfm-slide-down-enter-from,
.vfm-slide-down-leave-to {
    transform: translateY(100vh) !important
}

.vfm-slide-up-enter-from,
.vfm-slide-up-leave-to {
    transform: translateY(-100vh) !important
}

.vfm-slide-right-enter-active,
.vfm-slide-right-leave-active,
.vfm-slide-left-enter-active,
.vfm-slide-left-leave-active {
    transition: transform .3s ease
}

.vfm-slide-right-enter-from,
.vfm-slide-right-leave-to {
    transform: translate(100vw) !important
}

.vfm-slide-left-enter-from,
.vfm-slide-left-leave-to {
    transform: translate(-100vw) !important
}

.vfm-swipe-banner-back,
.vfm-swipe-banner-forward {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 27px;
    z-index: 10
}

.vfm-swipe-banner-back {
    left: 0
}

.vfm-swipe-banner-forward {
    right: 0
}
</style>