<script setup lang="ts">
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Andrea & Silvia</h1>
        <p class="hero-date">20 Settembre 2025</p>
        <p class="hero-location">Villa Braida, Mogliano Veneto</p>
      </div>
    </section>

    <section class="story">
      <div class="container">
        <h2>La Nostra Storia</h2>
        <p>
          Siamo entusiasti di celebrare il nostro giorno speciale con voi! Unitevi a noi mentre iniziamo questo 
          bellissimo viaggio insieme nella splendida Villa Braida a Mogliano Veneto. La vostra presenza renderà 
          il nostro giorno ancora più significativo.
        </p>
      </div>
    </section>

    <section class="quick-links">
      <div class="container">
        <h2>Collegamenti Rapidi</h2>
        <div class="links-grid">
          <router-link to="/rsvp" class="link-card">
            <h3>RSVP</h3>
            <p>Fateci sapere se potete unirvi a noi</p>
          </router-link>
          <router-link to="/venue" class="link-card">
            <h3>Location e Indicazioni</h3>
            <p>Come raggiungere Villa Braida</p>
          </router-link>
          <router-link to="/gifts" class="link-card">
            <h3>Lista Regali</h3>
            <p>Aiutateci a iniziare la nostra nuova vita insieme</p>
          </router-link>
          <router-link to="/details" class="link-card">
            <h3>Dettagli Matrimonio</h3>
            <p>Programma e informazioni importanti</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  margin: 0;
  padding: 0;
}

.hero {
  background-image: url('/new-header-image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
  padding: 2rem;
}

.hero-title {
  font-size: 4rem;
  margin: 0 0 1rem 0;
  font-weight: 300;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-date {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.hero-location {
  font-size: 1.2rem;
  margin: 0;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.story {
  padding: 4rem 0;
  background: #f8f9fa;
  width: 100%;
}

.story h2 {
  text-align: center;
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.story p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.quick-links {
  padding: 4rem 0;
  background: white;
  width: 100%;
}

.quick-links h2 {
  text-align: center;
  color: #333;
  margin: 0 0 3rem 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.link-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.link-card h3 {
  color: #667eea;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  text-align: center;
}

.link-card p {
  color: #666;
  margin: 0;
  text-align: center;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-date {
    font-size: 1.2rem;
  }
  
  .hero-location {
    font-size: 1rem;
  }
  
  .story h2, .quick-links h2 {
    font-size: 2rem;
  }
  
  .story p {
    font-size: 1.1rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .link-card {
    padding: 1.5rem;
  }
}
</style>
