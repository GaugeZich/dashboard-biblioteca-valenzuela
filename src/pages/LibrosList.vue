<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBibliotecaStore } from '@/stores/biblioteca'

const store = useBibliotecaStore()

onMounted(() => {
    if (store.isLoading) {
        store.fetchInitialData()
    }
})


</script>

<template>
    <div class="card" v-for="libro in store.data" :key="libro.id">
        <p>ID: {{ libro.id }}</p>
        <p>Titulo: {{ libro.titulo }}</p>
        <p>Autor: {{ libro.autor }}</p>
        <p>Paginas: {{ libro.paginas }}</p>
        <p>Disponible: {{ libro.disponible }}</p>
    </div>
</template>

<style scoped></style>