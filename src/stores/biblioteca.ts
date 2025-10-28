import type { Libro } from "@/models/libro";
import { defineStore } from "pinia";

interface BibliotecaStore {
    isLoading: boolean,
    data: Libro[],
    error: string | null,
    nextId: number
}

export const useBibliotecaStore = defineStore('libros', {
    state: (): BibliotecaStore => ({
        isLoading: true,
        data: [],
        error: null,
        nextId: 1
    }),

    actions: {
        async fetchInitialData() {
            this.isLoading = true
            try {
                // Simulación de carga
                await new Promise((r) => setTimeout(r, 300))
                this.data = []
                this.error = null
            } catch (err) {
                this.error = 'Error al cargar los datos iniciales'
            } finally {
                this.isLoading = false
            }
        },

        addLibro(libro: Libro) {
            const nuevoLibro: Libro = {
                ...libro,
                id: this.nextId
            }
            this.data.push(nuevoLibro)

            this.nextId++

            this.error = null

            console.log(`✅ Libro agregado con exito. ID: ${libro.id}`)
        }
    },
    getters: {
        sortByName() {

        },
        sortByAuthor() {

        },
        sortByPages() {
            
        }
    }
})