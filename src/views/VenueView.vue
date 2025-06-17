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
        <h1>Venue & Directions</h1>
        <p>Join us at the beautiful Villa Braida in Mogliano Veneto</p>
      </section>

      <section class="venue-info">
        <div class="venue-details">
          <div class="venue-card">
            <h2>Villa Braida</h2>
            <div class="address">
              <h3>Address:</h3>
              <p>
                Villa Braida<br>
                Via Terraglio, 10<br>
                31021 Mogliano Veneto TV<br>
                Italy
              </p>
            </div>
            
            <div class="venue-image">
              <img src="https://images.unsplash.com/photo-1519167758481-83f29c8e8d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80" 
                   alt="Elegant villa with beautiful gardens and architecture" 
                   @error="handleImageError" />
            </div>
          </div>

          <div class="directions-card">
            <h2>Getting There</h2>
            
            <div class="transport-options">
              <div class="transport-option">
                <h3>🚗 By Car</h3>
                <p>Villa Braida is easily accessible by car via the A57 highway. Parking is available on-site.</p>
                <p><strong>From Venice:</strong> Take A57 towards Mestre, then follow signs to Mogliano Veneto (approximately 20 minutes)</p>
                <p><strong>From Treviso:</strong> Take SS13 towards Venice, exit at Mogliano Veneto (approximately 15 minutes)</p>
              </div>

              <div class="transport-option">
                <h3>🚆 By Train</h3>
                <p>Take the train to Mogliano Veneto station, then a short taxi ride (5 minutes) to the venue.</p>
                <p><strong>From Venice:</strong> Regional trains run frequently (20-25 minutes)</p>
                <p><strong>From Treviso:</strong> Regional trains available (10-15 minutes)</p>
              </div>

              <div class="transport-option">
                <h3>✈️ By Plane</h3>
                <p><strong>Venice Marco Polo Airport:</strong> 25 minutes by car or taxi</p>
                <p><strong>Treviso Airport:</strong> 20 minutes by car or taxi</p>
              </div>
            </div>
          </div>
        </div>

        <div class="map-section">
          <h2>Location Map</h2>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.8!2d12.2167!3d45.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzAwLjEiTiAxMsKwMTMnMDAuMSJF!5e0!3m2!1sen!2sit!4v1234567890"
              width="100%" 
              height="400" 
              style="border:0;" 
              allowfullscreen 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Villa Braida Location Map">
            </iframe>
          </div>
          <p class="map-note">
            <a href="https://goo.gl/maps/[ACTUAL_MAPS_LINK]" target="_blank" rel="noopener">
              Open in Google Maps
            </a>
          </p>
        </div>

        <div class="accommodation">
          <h2>Accommodation Suggestions</h2>
          <div class="hotels-grid">
            <div class="hotel-card">
              <h3>Hotel Villa Condulmer</h3>
              <p>Luxury hotel in a historic villa, 10 minutes from venue</p>
              <p><strong>Distance:</strong> 5 km from Villa Braida</p>
            </div>
            <div class="hotel-card">
              <h3>Hotel Villa Pace Park</h3>
              <p>Modern hotel with spa facilities</p>
              <p><strong>Distance:</strong> 8 km from Villa Braida</p>
            </div>
            <div class="hotel-card">
              <h3>Venice Hotels</h3>
              <p>Stay in Venice and enjoy the city before/after the wedding</p>
              <p><strong>Distance:</strong> 20-25 minutes by car/train</p>
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
}

.container {
  max-width: 1200px;
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
