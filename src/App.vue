<template>
    <h1 class="text-3xl font-bold underline">
        Hello sqUIck!
    </h1>
    <p>
        Landing page todo
    </p>
    <SquickInput password showPassword v-model="test" />
    <br />
    {{ test }}
</template>

<script setup>
import { ref } from "vue";
import SquickInput from '@/components/atoms/squickInput.vue';

const test = ref('testInput')
</script>