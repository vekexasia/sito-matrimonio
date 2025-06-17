<script setup lang="ts">
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://placehold.co/600x400/png';
};
</script>

<template>
  <div class="venue">
    <div class="container">
      <section class="venue-header">
        <h1>Location e Indicazioni</h1>
        <p>Unitevi a noi nella splendida Villa Braida a Mogliano Veneto</p>
      </section>

      <section class="venue-info">
        <div class="venue-details">
          <div class="venue-card">
            <h2>Villa Braida</h2>
            <div class="address">
              <h3>Indirizzo:</h3>
              <p>
                Villa Braida<br>
                Via Bonisiolo, 16b<br>
                31021 Mogliano Veneto TV<br>
                Italia
              </p>
              <h3>Contatti:</h3>
              <p>
                <strong>Email:</strong> info@villabraida.it<br>
                <strong>Tel:</strong> +39 041 457 222
              </p>
            </div>
            
            <div class="venue-image">
              <img src="/villa-braida.jpg" 
                   alt="Villa Braida - Elegant wedding venue with beautiful gardens and architecture" 
                   @error="handleImageError" />
            </div>
          </div>

          <div class="directions-card">
            <h2>Come Arrivare</h2>
            
            <div class="transport-options">
              <div class="transport-option">
                <h3>🚗 In Auto</h3>
                <p>Villa Braida è facilmente raggiungibile in auto tramite l'autostrada A57. Parcheggio disponibile in loco.</p>
                <p><strong>Da Venezia:</strong> Prendere A57 verso Mestre, poi seguire le indicazioni per Mogliano Veneto (circa 20 minuti)</p>
                <p><strong>Da Treviso:</strong> Prendere SS13 verso Venezia, uscita Mogliano Veneto (circa 15 minuti)</p>
              </div>

              <div class="transport-option">
                <h3>🚆 In Treno</h3>
                <p>Prendere il treno per la stazione di Mogliano Veneto, poi un breve tragitto in taxi (5 minuti) fino alla location.</p>
                <p><strong>Da Venezia:</strong> Treni regionali frequenti (20-25 minuti)</p>
                <p><strong>Da Treviso:</strong> Treni regionali disponibili (10-15 minuti)</p>
              </div>

              <div class="transport-option">
                <h3>✈️ In Aereo</h3>
                <p><strong>Aeroporto Marco Polo di Venezia:</strong> 25 minuti in auto o taxi</p>
                <p><strong>Aeroporto di Treviso:</strong> 20 minuti in auto o taxi</p>
              </div>
            </div>
          </div>
        </div>

        <div class="map-section">
          <h2>Mappa della Location</h2>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d12.2167!3d45.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzAwLjEiTiAxMsKwMTMnMDAuMSJF!5e0!3m2!1sen!2sit!4v1234567890"
              width="100%" 
              height="400" 
              style="border:0;" 
              allowfullscreen 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Mappa Villa Braida">
            </iframe>
          </div>
          <p class="map-note">
            <a href="https://goo.gl/maps/[ACTUAL_MAPS_LINK]" target="_blank" rel="noopener">
              Apri in Google Maps
            </a>
          </p>
        </div>

        <div class="accommodation">
          <h2>Suggerimenti per l'Alloggio</h2>
          <div class="hotels-grid">
            <div class="hotel-card">
              <h3>Move Hotels Venezia Nord</h3>
              <p>Hotel moderno e confortevole, perfetto per gli ospiti del matrimonio</p>
              <p><strong>Posizione:</strong> Strategicamente posizionato per raggiungere facilmente Villa Braida</p>
              <p><strong>Servizi:</strong> Camere moderne, colazione inclusa, parcheggio disponibile</p>
              <p><strong>Sito web:</strong> <a href="https://www.movehotels.com/it" target="_blank" rel="noopener noreferrer">www.movehotels.com/it</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.venue {
  padding: 2rem 0;
  width: 100%;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.venue-header {
  text-align: center;
  margin-bottom: 3rem;
}

.venue-header h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #333;
  font-weight: 300;
}

.venue-header p {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}

.venue-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.venue-card, .directions-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.venue-card h2, .directions-card h2 {
  color: #667eea;
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
}

.address h3 {
  color: #333;
  margin: 0 0 0.5rem 0;
}

.address p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.venue-image {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1rem;
}

.venue-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.transport-options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.transport-option h3 {
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.transport-option p {
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.5;
}

.map-section {
  margin: 3rem 0;
  text-align: center;
}

.map-section h2 {
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.map-container {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.map-note a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.map-note a:hover {
  text-decoration: underline;
}

.accommodation {
  margin-top: 3rem;
}

.accommodation h2 {
  text-align: center;
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.hotels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.hotel-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.hotel-card h3 {
  color: #667eea;
  margin: 0 0 1rem 0;
}

.hotel-card p {
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .venue-header h1 {
    font-size: 2rem;
  }
  
  .venue-details {
    grid-template-columns: 1fr;
  }
  
  .venue-card, .directions-card {
    padding: 1.5rem;
  }
  
  .hotels-grid {
    grid-template-columns: 1fr;
  }
}
</style>
