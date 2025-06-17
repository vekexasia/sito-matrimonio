<script setup lang="ts">
</script>

<template>
  <div class="details">
    <div class="container">
      <section class="details-header">
        <h1>Wedding Details</h1>
        <p>Everything you need to know about our special day</p>
      </section>

      <section class="timeline">
        <h2>Wedding Day Timeline</h2>
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="time">2:00 PM</div>
            <div class="event">
              <h3>Guest Arrival</h3>
              <p>Please arrive at Villa Braida. Welcome drinks will be served in the garden.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time">2:30 PM</div>
            <div class="event">
              <h3>Wedding Ceremony</h3>
              <p>The ceremony will take place in the villa's beautiful garden pavilion.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time">3:30 PM</div>
            <div class="event">
              <h3>Cocktail Hour</h3>
              <p>Celebrate with us! Aperitivo and canapés will be served on the terrace.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time">5:00 PM</div>
            <div class="event">
              <h3>Wedding Reception</h3>
              <p>Dinner will be served in the villa's elegant dining hall.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time">9:00 PM</div>
            <div class="event">
              <h3>Dancing & Celebration</h3>
              <p>Let's dance the night away! The party continues until late.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="time">12:00 AM</div>
            <div class="event">
              <h3>End of Reception</h3>
              <p>Thank you for celebrating with us! Safe travels home.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="important-info">
        <h2>Important Information</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>👗 Dress Code</h3>
            <p><strong>Formal/Cocktail Attire</strong></p>
            <p>We suggest elegant attire. Ladies: cocktail dresses or formal wear. Gentlemen: suits or dress shirts with dress pants.</p>
            <p><em>Please avoid white, ivory, or cream colors (reserved for the bride).</em></p>
          </div>

          <div class="info-card">
            <h3>🌤️ Weather & Season</h3>
            <p>The wedding will be held in <strong>[Season]</strong>. Expected temperature: <strong>[Temperature range]</strong></p>
            <p>The ceremony will be outdoors, so please dress accordingly. We'll have indoor backup plans if needed.</p>
          </div>

          <div class="info-card">
            <h3>📱 Unplugged Ceremony</h3>
            <p>We kindly ask that you keep phones and cameras away during the ceremony.</p>
            <p>Our professional photographer will capture every moment. Please be present and enjoy the experience with us!</p>
          </div>

          <div class="info-card">
            <h3>🍽️ Dietary Requirements</h3>
            <p>Please let us know about any dietary restrictions or allergies when you RSVP.</p>
            <p>We'll work with our caterers to accommodate vegetarian, vegan, gluten-free, and other dietary needs.</p>
          </div>

          <div class="info-card">
            <h3>🚗 Parking</h3>
            <p>Free parking is available on-site at Villa Braida.</p>
            <p>If you're staying nearby, consider walking or taking a taxi to enjoy the evening fully!</p>
          </div>

          <div class="info-card">
            <h3>🎁 Gift Table</h3>
            <p>There will be a designated gift table at the reception entrance.</p>
            <p>Cards and small gifts can be placed there. For larger items, please see our <router-link to="/gifts">Gift List page</router-link>.</p>
          </div>
        </div>
      </section>

      <section class="contact-emergency">
        <h2>Contact Information</h2>
        <div class="contact-grid">
          <div class="contact-card">
            <h3>Wedding Couple</h3>
            <p><strong>Andrea:</strong> <a href="mailto:vekexasia@gmail.com">vekexasia@gmail.com</a></p>
            <p><strong>Phone:</strong> [Phone number to be provided]</p>
          </div>

          <div class="contact-card">
            <h3>Wedding Day Emergency</h3>
            <p><strong>Wedding Coordinator:</strong> [Name to be provided]</p>
            <p><strong>Phone:</strong> [Emergency contact to be provided]</p>
          </div>

          <div class="contact-card">
            <h3>Villa Braida</h3>
            <p><strong>Address:</strong> Via Terraglio, 10, 31021 Mogliano Veneto TV</p>
            <p><strong>Phone:</strong> [Venue contact to be provided]</p>
          </div>
        </div>
      </section>

      <section class="special-notes">
        <h2>Special Notes</h2>
        <div class="notes-container">
          <div class="note-item">
            <h3>🎵 Music Requests</h3>
            <p>Have a song that always makes you think of us? Let us know! We'd love to include meaningful music in our celebration.</p>
          </div>

          <div class="note-item">
            <h3>📸 Photo Sharing</h3>
            <p>We'd love to see your photos from our special day! Please share them with us after the wedding.</p>
            <p>Use hashtag: <strong>#AndreaWedding2025</strong> on social media</p>
          </div>

          <div class="note-item">
            <h3>🏨 Accommodation</h3>
            <p>For out-of-town guests, we've compiled a list of recommended hotels on our <router-link to="/venue">Venue page</router-link>.</p>
            <p>Please book early as availability may be limited during wedding season.</p>
          </div>

          <div class="note-item">
            <h3>💝 Thank You</h3>
            <p>Your presence at our wedding is the greatest gift we could ask for. Thank you for being part of our love story!</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.details {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.details-header {
  text-align: center;
  margin-bottom: 3rem;
}

.details-header h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #333;
  font-weight: 300;
}

.details-header p {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}

.timeline {
  margin-bottom: 4rem;
}

.timeline h2 {
  text-align: center;
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #667eea;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin: 2rem 0;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.time {
  flex: 0 0 100px;
  background: #667eea;
  color: white;
  padding: 0.5rem;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  margin: 0 2rem;
  height: fit-content;
  position: relative;
  z-index: 2;
}

.event {
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.event h3 {
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.event p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.important-info {
  margin-bottom: 4rem;
}

.important-info h2 {
  text-align: center;
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  color: #667eea;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.info-card p {
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.info-card a {
  color: #667eea;
  text-decoration: none;
}

.info-card a:hover {
  text-decoration: underline;
}

.contact-emergency {
  margin-bottom: 4rem;
}

.contact-emergency h2 {
  text-align: center;
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.contact-card h3 {
  color: #667eea;
  margin: 0 0 1rem 0;
}

.contact-card p {
  color: #666;
  margin: 0.3rem 0;
}

.contact-card a {
  color: #667eea;
  text-decoration: none;
}

.contact-card a:hover {
  text-decoration: underline;
}

.special-notes h2 {
  text-align: center;
  color: #333;
  margin: 0 0 2rem 0;
  font-size: 2rem;
}

.notes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.note-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.note-item h3 {
  color: #667eea;
  margin: 0 0 1rem 0;
}

.note-item p {
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.note-item a {
  color: #667eea;
  text-decoration: none;
}

.note-item a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .details-header h1 {
    font-size: 2rem;
  }
  
  .timeline-container::before {
    left: 30px;
  }
  
  .timeline-item {
    flex-direction: row !important;
    margin-left: 60px;
  }
  
  .time {
    position: absolute;
    left: -60px;
    margin: 0;
    width: 80px;
    font-size: 0.8rem;
  }
  
  .event {
    max-width: none;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .notes-container {
    grid-template-columns: 1fr;
  }
}
</style>
