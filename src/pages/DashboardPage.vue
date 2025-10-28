<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, RouterView, RouterLink } from 'vue-router'

const route = useRoute()
/* const routeRef = ref(route) */

</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <header class="p-3 bg-emerald-600 dark:bg-emerald-800">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 class="text-5xl font-bold">Biblioteca Online</h1>
            </div>
            <div class="flex space-x-4">
                <RouterLink to="/libros">Ver libros</RouterLink>
                <RouterLink to="/libros/nuevo">Agregar un libro</RouterLink>
            </div>
        </header>
        <RouterView />
    </div>
</template>

<style scoped></style>