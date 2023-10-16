<template>
    <div
        :class="`select-none absolute ${posX}-${space} ${posY}-${space} text-white opacity-90 text-center ${TwdRounded} shadow shadow-black`">
        <div :class="`bg-amber-600 w-10 pb-1 sm:hidden flex justify-center items-center ${TwdRounded}`">
            xs
        </div>
        <div :class="`bg-lime-600 w-10 pb-1 hidden sm:flex md:hidden sm:justify-center sm:items-center ${TwdRounded}`">
            sm
        </div>
        <div :class="`bg-emerald-600 w-10 pb-1 hidden md:flex lg:hidden md:justify-center md:items-center ${TwdRounded}`">
            md
        </div>
        <div :class="`bg-cyan-600 w-10 pb-1 hidden lg:flex xl:hidden lg:justify-center lg:items-center ${TwdRounded}`">
            lg
        </div>
        <div :class="`bg-blue-600 w-10 pb-1 hidden xl:flex 2xl:hidden xl:justify-center xl:items-center ${TwdRounded}`">
            xl
        </div>
        <div :class="`bg-violet-600 w-10 pb-1 hidden 2xl:flex 2xl:justify-center 2xl:items-center ${TwdRounded}`">
            2xl
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    space: {
        type: Number,
        default: 4,
    },
    posX: {
        type: String,
        default: "right",
        validator: (value) => {
            return ['left', 'right'].includes(value)
        }
    },
    posY: {
        type: String,
        default: "bottom",
        validator: (value) => {
            return ['top', 'bottom'].includes(value)
        }
    },
    TwdRounded: {
        type: String,
        default: 'rounded'
    },
})
</script>