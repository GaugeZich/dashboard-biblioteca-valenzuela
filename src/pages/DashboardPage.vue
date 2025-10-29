<script setup lang="ts">
import Libros from '@/components/Libros.vue';
import { ref } from 'vue';



</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <header class="p-3 bg-emerald-600 dark:bg-emerald-800">
            <div class="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 class="text-5xl font-bold">Biblioteca Online</h1>
            </div>
            <div class="flex space-x-4">
            </div>
        </header>

        <Libros></Libros>
    </div>
</template>

<style scoped></style>