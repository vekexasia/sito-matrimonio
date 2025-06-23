<script setup lang="ts">
</script>

<template>
  <div class="rsvp">
    <div class="container">
      <section class="rsvp-header">
        <h1>RSVP</h1>
        <p>Fateci sapere se potete unirvi a noi per il nostro giorno speciale!</p>
      </section>

      <section class="rsvp-form">
        <div class="form-container">
          <h2>Rispondete entro il 15 Settembre 2025</h2>
          
          <div class="google-form-embed">
            <p class="form-note">
              Vi preghiamo di compilare il modulo RSVP qui sotto. Se il modulo non si carica, potete 
              <a href="https://forms.google.com/[YOUR_FORM_ID]" target="_blank" rel="noopener">
                cliccare qui per aprirlo in una nuova finestra
              </a>.
            </p>
            
            <iframe 
              src="https://docs.google.com/forms/d/e/[YOUR_FORM_ID]/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0"
              title="Modulo RSVP Matrimonio">
              Caricamento…
            </iframe>
          </div>

          <div class="contact-info">
            <h3>Domande?</h3>
            <p>Se avete domande o dovete modificare la vostra risposta RSVP, contattateci:</p>
            <p>
              <strong>Andrea:</strong> 3314646641<br>
              <strong>Silvia:</strong> 3403214938
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.rsvp {
  padding: 2rem 0;
  width: 100%;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.rsvp-header {
  text-align: center;
  margin-bottom: 3rem;
}

.rsvp-header h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #333;
  font-weight: 300;
}

.rsvp-header p {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  text-align: center;
  color: #667eea;
  margin: 0 0 2rem 0;
}

.google-form-embed {
  margin: 2rem 0;
}

.form-note {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
}

.form-note a {
  color: #667eea;
  text-decoration: none;
}

.form-note a:hover {
  text-decoration: underline;
}

iframe {
  border-radius: 8px;
  min-height: 600px;
}

.contact-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}

.contact-info h3 {
  margin: 0 0 1rem 0;
  color: #333;
}

.contact-info p {
  margin: 0.5rem 0;
  color: #666;
}

.contact-info a {
  color: #667eea;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .rsvp-header h1 {
    font-size: 2rem;
  }
  
  .form-container {
    padding: 1rem;
  }
  
  iframe {
    height: 700px;
  }
}
</style>
