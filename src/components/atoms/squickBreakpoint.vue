<template>
    <div :class="containerClass">
        <div
            :class="`border border-amber-500 bg-amber-100 text-amber-800 ring-2 ring-amber-100 w-10 py-1 sm:hidden flex justify-center items-center rounded`">
            xs
        </div>
        <div
            :class="`border border-lime-500 bg-lime-100 text-lime-800 ring-2 ring-lime-100 w-10 py-1 hidden sm:flex md:hidden sm:justify-center sm:items-center rounded`">
            sm
        </div>
        <div
            :class="`border border-emerald-500 bg-emerald-100 text-emerald-800 ring-2 ring-emerald-100 w-10 py-1 hidden md:flex lg:hidden md:justify-center md:items-center rounded`">
            md
        </div>
        <div
            :class="`border border-cyan-500 bg-cyan-100 text-cyan-800 ring-2 ring-cyan-100 w-10 py-1 hidden lg:flex xl:hidden lg:justify-center lg:items-center rounded`">
            lg
        </div>
        <div
            :class="`border border-blue-500 bg-blue-100 text-blue-800 ring-2 ring-blue-100 w-10 py-1 hidden xl:flex 2xl:hidden xl:justify-center xl:items-center rounded`">
            xl
        </div>
        <div
            :class="`border border-violet-500 bg-violet-100 text-violet-800 ring-2 ring-violet-100 w-10 py-1 hidden 2xl:flex 2xl:justify-center 2xl:items-center rounded`">
            2xl
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    containerClass: {
        type: String,
        default: 'select-none fixed right-4 bottom-4 opacity-90 text-center text-xs',
    }
})
</script>