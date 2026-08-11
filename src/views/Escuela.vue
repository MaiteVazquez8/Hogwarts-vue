<script>
import '../assets/escuela.css'
</script>

<template>
  <section class="page page-escuela">
    <div class="hero hero-escuela">
      <p class="eyebrow eyebrow-escuela">Escuela de magia</p>
      <h1>Hogwarts, el castillo y la escuela</h1>
      <p>Hogwarts es una de las escuelas de magia y hechicería más conocidas del mundo. Sus torres, salones, pasillos secretos y aulas hacen que cada rincón tenga una historia.</p>
      <div class="hero-actions hero-actions-escuela">
        <router-link to="/" class="btn btn-escuela">Volver al inicio</router-link>
      </div>
    </div>

    <div class="cards cards-escuela">
      <article class="card card-escuela">
        <h2>El castillo</h2>
        <p>El castillo de Hogwarts se alza entre montañas y lagos, con torres imponentes, terrenos encantados y zonas que parecen guardar secretos desde hace siglos.</p>
      </article>

      <article class="card card-escuela">
        <h2>La escuela</h2>
        <p>En sus aulas se enseñan hechizos, artes, defensa contra las fuerzas oscuras y otras disciplinas mágicas que forman a los jóvenes magos.</p>
      </article>

      <article class="card card-escuela">
        <h2>Un lugar lleno de tradición</h2>
        <p>Desde sus salones hasta sus jardines, Hogwarts combina historia, misterio y aprendizaje, convirtiéndola en un símbolo de la magia.</p>
      </article>
    </div>
  </section>
</template>
