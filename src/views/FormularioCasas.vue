<template>
    <span>Formulario</span>

    <h2>¿Qué casa sos?</h2>
    <p>Completar el formulario para sumar al ranking de casas</p>

    <div>
        <form @submit.prevent="handleSubmit">
            <label for="casa">Seleccione su casa de Hogwarts</label>

            <select v-model="casa" required>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    </div>

    <h2>Ranking de casas</h2>

    <div>
        <p>Gryffindor: {{ gryffindor }}</p>
        <p>Hufflepuff: {{ hufflepuff }}</p>
        <p>Ravenclaw: {{ ravenclaw }}</p>
        <p>Slytherin: {{ slytherin }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const casa = ref('')

const gryffindor = ref(0)
const hufflepuff = ref(0)
const ravenclaw = ref(0)
const slytherin = ref(0)

const handleSubmit = () => {

    document.cookie = `casa=${casa.value}; max-age=2592000`

    if (casa.value === 'Gryffindor') {
        gryffindor.value++
    }

    if (casa.value === 'Hufflepuff') {
        hufflepuff.value++
    }

    if (casa.value === 'Ravenclaw') {
        ravenclaw.value++
    }

    if (casa.value === 'Slytherin') {
        slytherin.value++
    }

    alert('Gracias por completar el formulario!')
}
</script>