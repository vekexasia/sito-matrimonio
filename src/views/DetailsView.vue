<script setup lang="ts">
const copyHashtag = async () => {
  try {
    await navigator.clipboard.writeText('#AndreaSilviaMatrimonio2025');
    alert('Hashtag copiato negli appunti!');
  } catch (err) {
    console.error('Failed to copy hashtag:', err);
    alert('Errore nel copiare l\'hashtag');
  }
};
</script>

<template>
  <div class="details">
    <div class="container">
      <section class="details-header">
        <h1>Dettagli Matrimonio</h1>
        <p>Tutto quello che dovete sapere sul nostro giorno speciale</p>
      </section>

      <section class="timeline">
        <h2>Programma del Giorno</h2>
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="time">16:00</div>
            <div class="event">
              <h3>Arrivo Ospiti</h3>
              <p>Vi preghiamo di arrivare a Villa Braida. Drink di benvenuto saranno serviti in giardino.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="time">16:30</div>
            <div class="event">
              <h3>Cerimonia Matrimoniale</h3>
              <p>La cerimonia si svolgerà nel bellissimo parco della villa.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="time">17:30</div>
            <div class="event">
              <h3>Aperitivo</h3>
              <p>Celebrate con noi! Aperitivo e stuzzichini saranno serviti nel parco della villa.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="time">19:00</div>
            <div class="event">
              <h3>Ricevimento</h3>
              <p>La cena sarà servita nell'elegante sala da pranzo della villa.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="time">21:30</div>
            <div class="event">
              <h3>Taglio della Torta</h3>
              <p>Il momento più dolce della serata! Taglio della torta nuziale e buffet dei dolci.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="time">22:00</div>
            <div class="event">
              <h3>Balli e Festeggiamenti</h3>
              <p>Balliamo e beviamo finch&egrave; reggiamo con l'open-bar.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="time">00:00</div>
            <div class="event">
              <h3>Fine del Ricevimento</h3>
              <p>Grazie per aver festeggiato con noi! Buon viaggio di ritorno.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="important-info">
        <h2>Informazioni Importanti</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>🌤️ Tempo e Stagione</h3>
            <p>Il matrimonio si terrà in <strong>Settembre</strong>. Temperatura prevista: <strong>18-25°C</strong></p>
            <p>La cerimonia sarà all'aperto, quindi vi preghiamo di vestirvi di conseguenza. Abbiamo piani di riserva al coperto se necessario.</p>
          </div>

          <div class="info-card">
            <h3>📱 Dispositivi Durante la Cerimonia</h3>
            <p>Siete liberi di scattare foto durante la cerimonia, ma vi chiediamo gentilmente di evitare giochi o altre attività sui telefoni.</p>
            <p>Il nostro fotografo professionale catturerà ogni momento. Vi preghiamo di essere presenti e godervi l'esperienza con noi!</p>
          </div>

          <div class="info-card">
            <h3>🍽️ Esigenze Alimentari</h3>
            <p>Vi preghiamo di farci sapere eventuali restrizioni alimentari o allergie quando confermate la presenza.</p>
            <p>Lavoreremo con i nostri catering per soddisfare esigenze vegetariane, vegane, senza glutine e altre necessità alimentari.</p>
          </div>

          <div class="info-card">
            <h3>🚗 Parcheggio</h3>
            <p>Parcheggio gratuito disponibile presso Villa Braida.</p>
          </div>

          <div class="info-card">
            <h3>🎁 Tavolo Regali</h3>
            <p>Ci sarà un tavolo dedicato ai regali.</p>
          </div>
        </div>
      </section>

      <section class="contact-emergency">
        <h2>Informazioni di Contatto</h2>
        <div class="contact-grid">
          <div class="contact-card">
            <h3>Sposi</h3>
            <p><strong>Andrea:</strong> 3314646641</p>
            <p><strong>Silvia:</strong> 3403214938</p>
          </div>

          <div class="contact-card">
            <h3>Villa Braida</h3>
            <p><strong>Indirizzo:</strong> Via Bonisiolo, 16b, 31021<br/>Mogliano Veneto TV</p>
            <p><strong>Telefono:</strong> +39 041 457 222</p>
          </div>
        </div>
      </section>

      <section class="special-notes">
        <h2>Note Speciali</h2>
        <div class="notes-container">

          <div class="note-item">
            <h3>📸 Condivisione Foto</h3>
            <p>Ci piacerebbe vedere le vostre foto del nostro giorno speciale! Vi preghiamo di condividerle con noi dopo il matrimonio.</p>
            <p>Usate l'hashtag: <br/><strong style="font-weight: bold">#AndreaSilviaMatrimonio2025</strong> <button @click="copyHashtag" class="copy-btn">📋</button> sui social media</p>
          </div>

          <div class="note-item">
            <h3>🏨 Alloggio</h3>
            <p>Per gli ospiti fuori città, abbiamo selezionato un hotel in zona nella nostra <router-link to="/venue">pagina Location</router-link>.</p>
            <p>Vi preghiamo di prenotare presto poiché la disponibilità potrebbe essere limitata durante la stagione dei matrimoni.</p>
          </div>

          <div class="note-item">
            <h3>🎪 Intrattenimento per Bambini</h3>
            <p>Attività con animatori per bambini saranno disponibili per garantire che anche i nostri ospiti più giovani si divertano!</p>
          </div>

          <div class="note-item">
            <h3>💝 Grazie</h3>
            <p>La vostra presenza al nostro matrimonio è il regalo più grande che potremmo chiedere. Grazie per essere parte della nostra storia d'amore!</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.details {
  padding: 2rem 0;
  width: 100%;
}

.container {
  max-width: 1024px;
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

.copy-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: background 0.3s ease;
}

.copy-btn:hover {
  background: #5a6fd8;
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
