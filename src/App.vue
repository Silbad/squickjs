<template>
    <h1 class="text-3xl font-bold underline">
        Hello sqUIck!
    </h1>
    <p>
        Page pour tester les composants
    </p>
    <p>
        <SquickButton @click="open()">Open modal</SquickButton>
        <SquickModal v-model="openModal" posX="end" posY="end"><template v-slot:modal-header><strong>My modal</strong></template><template
                v-slot:modal-body>Portez ce vieux whisky au juge blond qui fume.</template><template v-slot:modal-footer>
                <div class="w-full flex justify-end">
                    <SquickButton>Send</SquickButton>
                </div>
            </template></SquickModal>
    </p>
</template>

<script setup>
import { ref } from 'vue';
import SquickModal from '@/components/organisms/squickModal.vue';
import SquickButton from '@/components/atoms/squickButton.vue';
const openModal = ref(false)
const open = () => {
    openModal.value = true
};
</script>