<script setup lang="ts">
import { useBibliotecaStore } from '@/stores/biblioteca';
import LibroCard from './LibroCard.vue';
import { ref, computed } from 'vue';

const store = useBibliotecaStore();

const sortKey = ref('default');

const sortedLibros = computed(() => {
    switch(sortKey.value){
        case 'nombre':
            return store.sortByName;
        case 'autor':
            return store.sortByAuthor;
        case 'paginas':
            return store.sortByPages;
        case 'default':
            default:
                return store.sortDefault;
    }
})
</script>

<template>
    <div class="container">
        <h1 class="text-3xl">Lista de libros:</h1>
        <div class="flex flex-col mt-4">
            <label class="text-zinc-400 text-lg mb-1" for="ordenar">Ordenar por:</label>
            <select id="ordenar"
                v-model="sortKey"
                class="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none pr-10">
                <option value="default" selected>Defecto</option>
                <option value="nombre">Nombre</option>
                <option value="autor">Autor</option>
                <option value="paginas">Páginas</option>
            </select>
        </div>
        <hr class="bg-zinc-900 mt-2 mb-2">
    </div>
    <div class="cards">
        <LibroCard :libros="sortedLibros"></LibroCard>
    </div>
</template>

<style scoped></style>