<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useBibliotecaStore } from '@/stores/biblioteca'
import type { Libro } from '@/models/libro';

const props = defineProps<{
    libros: Libro[]
}>()


const store = useBibliotecaStore();

onMounted(() => {
    if (store.isLoading) {
        store.fetchInitialData()
    }
})

const isLoading = computed(() => store.isLoading)

</script>

<template>
    <div class="flex flex-col space-y-4">
        <div v-if="isLoading" class="text-center py-6 text-zinc-400">
            Cargando libros...
        </div>

        <div v-else-if="props.libros.length === 0" class="text-center py-6 text-zinc-500 italic">
            No hay libros agregados aún.
        </div>

        <div v-else>
            <div
            class="bg-zinc-900 border rounded-lg p-4 shadow-lg mb-2"
            v-for="libro in props.libros" :key="libro.id"
            :class="{
                'border-emerald-500': libro.disponible,
                'border-red-600': !libro.disponible
            }"
            >
                <h1 class="text-3xl italic text-zinc-300 font-bold">{{ libro.titulo }}</h1>
                <div class="space-y-1 text-zinc-400">
                    <p><span class="font-medium text-zinc-300">Autor: </span>{{ libro.autor }}</p>
                    <p><span class="font-medium text-zinc-300">Paginas: </span>{{ libro.paginas }}</p>
                    <p>
                        <span class="font-medium text-zinc-300">Disponible: </span>
                        <span class="font-bold"
                        :class="{
                            'text-emerald-500': libro.disponible,
                            'text-red-600': !libro.disponible
                        }"
                        >{{ libro.disponible ? 'Si' : 'No' }}</span>
                    </p>
                </div>

                <button class="p-2 text-md rounded mt-2"
                :class="{
                    'bg-red-600/70 hover:bg-red-600': libro.disponible,
                    'bg-emerald-500/70 hover:bg-emerald-500': !libro.disponible
                }"
                @click="store.toggleDisponibilidad(libro)"
                >
                    {{ libro.disponible ? 'Prestar' : 'Devolver' }}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>