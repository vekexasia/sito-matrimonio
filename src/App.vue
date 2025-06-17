<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <h1 class="title">Andrea & Silvia</h1>
        <p class="subtitle">Ci Sposiamo!</p>
        
        <nav class="nav">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/rsvp" class="nav-link">RSVP</RouterLink>
          <RouterLink to="/venue" class="nav-link">Location e Indicazioni</RouterLink>
          <RouterLink to="/gifts" class="nav-link">Lista Regali</RouterLink>
          <RouterLink to="/details" class="nav-link">Dettagli</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Matrimonio Andrea & Silvia</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-image: url('/header-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 2rem 0;
  text-align: center;
  position: relative;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.container {
  max-width: 100%;
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 300;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.2rem;
  margin: 0 0 2rem 0;
  opacity: 0.9;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.1rem;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.main {
  flex: 1;
  padding: 0;
  width: 100%;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .nav {
    gap: 1rem;
  }
  
  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
  }
}
</style>
