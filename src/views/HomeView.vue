<script setup lang="ts">
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = 'https://placehold.co/800x400/png';
};
</script>

<template>
  <div class="home">
    <div class="container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Andrea & [Partner's Name]</h1>
          <p class="hero-date">Wedding Date: [Date to be confirmed]</p>
          <p class="hero-location">Villa Braida, Mogliano Veneto</p>
          <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                 alt="Beautiful wedding venue with flowers and decorations" 
                 @error="handleImageError" />
          </div>
        </div>
      </section>

      <section class="story">
        <h2>Our Story</h2>
        <p>
          We are excited to celebrate our special day with you! Join us as we begin this beautiful journey together 
          at the stunning Villa Braida in Mogliano Veneto. Your presence would make our day even more meaningful.
        </p>
      </section>

      <section class="quick-links">
        <h2>Quick Links</h2>
        <div class="links-grid">
          <router-link to="/rsvp" class="link-card">
            <h3>RSVP</h3>
            <p>Please let us know if you can join us</p>
          </router-link>
          <router-link to="/venue" class="link-card">
            <h3>Venue & Directions</h3>
            <p>Find your way to Villa Braida</p>
          </router-link>
          <router-link to="/gifts" class="link-card">
            <h3>Gift List</h3>
            <p>Help us start our new life together</p>
          </router-link>
          <router-link to="/details" class="link-card">
            <h3>Wedding Details</h3>
            <p>Timeline and important information</p>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>
