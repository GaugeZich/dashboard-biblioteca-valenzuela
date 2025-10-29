<script setup lang="ts">
import LibrosForm from './LibrosForm.vue';
import LibrosList from './LibrosList.vue';

</script>

<template>
    <div class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 w-full p-4 items-start"> 
        <div class="flex-1 w-full bg-zinc-950 border border-zinc-700/60 rounded-2xl p-4 italic">
            <LibrosForm></LibrosForm>
        </div>
        <div class="flex-1 w-full bg-zinc-950 border border-zinc-700/60 rounded-2xl p-4">
            <LibrosList></LibrosList>
        </div>
    </div>
</template>

<style scoped></style>