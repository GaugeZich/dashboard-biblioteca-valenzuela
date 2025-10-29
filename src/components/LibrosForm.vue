<script setup lang="ts">
import { ref } from 'vue';
import { useBibliotecaStore } from '@/stores/biblioteca'
import type { Libro } from '@/models/libro';

const store = useBibliotecaStore()

const form = ref<Libro>({
    id: 0,
    titulo: '',
    autor: '',
    paginas: 0,
    disponible: true
});

const resetForm = () => {
    form.value = {
        id: 0,
        titulo: '',
        autor: '',
        paginas: 0,
        disponible: true
    }
}

const handleSubmit = () => {
    store.addLibro({ ...form.value })
    if (!store.error) {
        resetForm()
    }
}

</script>

<template>
    <div class="">
        <h1 class="text-3xl">Agregar un nuevo libro</h1>
        <div class="">
            <form @submit.prevent="handleSubmit">
                <div class="flex flex-col">
                    <label class="text-zinc-400 text-lg mb-1" for="nombre">Titulo</label>
                    <input v-model="form.titulo" id="nombre" type="text"
                        class="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required />
                </div>
                <div class="flex flex-col">
                    <label class="text-zinc-400 text-lg mb-1" for="autor">Autor</label>
                    <input v-model="form.autor" id="autor" type="text"
                        class="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required />
                </div>
                <div class="flex flex-col">
                    <label class="text-zinc-400 text-lg mb-1" for="paginas">Numero de páginas</label>
                    <input v-model="form.paginas" id="paginas" type="number" min="1"
                        class="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required />
                </div>
                <div class="flex flex-col mt-4">
                    <label class="text-zinc-400 text-lg mb-1" for="disponibilidad">Disponibilidad</label>
                    <select v-model="form.disponible" id="disponibilidad"
                        class="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none pr-10">
                        <option :value="true" class="text-green-400">Disponible</option>
                        <option :value="false" class="text-red-400">No disponible</option>
                    </select>
                </div>


                <button type="submit"
                    class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-lg transition-all mt-6">
                    Agregar Libro
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped></style>