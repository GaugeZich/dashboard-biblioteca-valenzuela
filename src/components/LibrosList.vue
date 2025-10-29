<script setup lang="ts">
import LibroCard from './LibroCard.vue';

</script>

<template>
    <div class="container">
        <h1 class="text-3xl">Lista de libros:</h1>
        <div class="flex flex-col mt-4">
            <label class="text-zinc-400 text-lg mb-1" for="ordenar">Ordenar por:</label>
            <select id="ordenar"
                class="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none pr-10">
                <option>Defecto</option>
                <option :value="true">Nombre</option>
                <option :value="false">Autor</option>
                <option>Páginas</option>
            </select>
        </div>
        <hr class="bg-zinc-900 mt-2 mb-2">
    </div>
    <div class="cards">
        <LibroCard></LibroCard>
    </div>
</template>

<style scoped></style>