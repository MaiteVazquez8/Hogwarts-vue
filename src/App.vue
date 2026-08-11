<script setup></script>

<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/escuela">Escuela</router-link>
    <router-link to="/about">Acerca de</router-link>
    <router-link to="/formulario">Formulario</router-link>
  </nav>

  <main class="app-shell">
    <router-view></router-view>
  </main>
</template>

<style scoped>
nav {
  max-width: 1120px;
  margin: 0 auto 1.5rem;
  display: flex;
  gap: 0.75rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  border-radius: 999px;
  box-shadow: var(--shadow);
}

nav a {
  padding: 0.65rem 1rem;
  border-radius: 999px;
  color: var(--muted);
  font-weight: 600;
  transition: all 0.2s ease;
}

nav a:hover {
  color: var(--accent);
  background: rgba(92, 77, 125, 0.08);
}

nav a.router-link-active {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: white;
  box-shadow: 0 8px 22px rgba(92, 77, 125, 0.22);
}

.app-shell {
  max-width: 1120px;
  margin: 0 auto;
}
</style>
