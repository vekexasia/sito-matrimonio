<script setup lang="ts">
</script>

<template>
  <div class="gifts">
    <div class="container">
      <section class="gifts-header">
        <h1>Lista Regali e Registro</h1>
        <p>La vostra presenza è il regalo più grande, ma se volete aiutarci a iniziare la nostra nuova vita insieme...</p>
      </section>

      <section class="gift-options">
        <div class="gift-cards">
          <div class="gift-card">
            <h2>💝 Registro Matrimonio</h2>
            <p>Abbiamo creato un registro con articoli che ci aiuteranno a costruire la nostra casa insieme.</p>
            <div class="registry-links">
              <a href="#" class="registry-link" target="_blank" rel="noopener">
                Visualizza il nostro Registro Amazon
              </a>
              <a href="#" class="registry-link" target="_blank" rel="noopener">
                Visualizza il nostro Registro John Lewis
              </a>
            </div>
            <p class="note">
              <em>Nota: I link del registro saranno aggiornati più vicino alla data del matrimonio</em>
            </p>
          </div>

          <div class="gift-card">
            <h2>💰 Regali in Denaro</h2>
            <p>Se preferite fare un regalo in denaro, ne saremmo incredibilmente grati. Potete contribuire tramite:</p>
            
            <div class="payment-methods">
              <div class="payment-method">
                <h3>Bonifico Bancario (Preferito)</h3>
                <div class="bank-details">
                  <p><strong>Intestatario:</strong> Andrea Baccega</p>
                  <p><strong>IBAN:</strong> [IBAN da fornire]</p>
                  <p><strong>BIC/SWIFT:</strong> [BIC da fornire]</p>
                  <p><strong>Banca:</strong> [Nome banca da fornire]</p>
                  <p><strong>Causale:</strong> Regalo Matrimonio - [Il Vostro Nome]</p>
                </div>
              </div>

              <div class="payment-method">
                <h3>PayPal</h3>
                <p>Inviare a: <a href="mailto:vekexasia@gmail.com">vekexasia@gmail.com</a></p>
                <p>Vi preghiamo di includere "Regalo Matrimonio" nel messaggio</p>
              </div>

              <div class="payment-method">
                <h3>Contanti</h3>
                <p>I regali in contanti possono essere consegnati il giorno del matrimonio. Ci sarà una scatola per i regali al ricevimento.</p>
              </div>
            </div>
          </div>

          <div class="gift-card">
            <h2>🌍 Fondo Luna di Miele</h2>
            <p>Aiutateci a creare ricordi indimenticabili durante la nostra luna di miele!</p>
            <div class="honeymoon-options">
              <div class="honeymoon-item">
                <h4>Cena Romantica per Due</h4>
                <p>€100 - Aiutateci a goderci una cena speciale durante la luna di miele</p>
              </div>
              <div class="honeymoon-item">
                <h4>Escursione Avventurosa</h4>
                <p>€200 - Finanziate una gita di un giorno o un'attività</p>
              </div>
              <div class="honeymoon-item">
                <h4>Giornata Spa</h4>
                <p>€150 - Aiutateci a rilassarci e distenderci</p>
              </div>
              <div class="honeymoon-item">
                <h4>Upgrade Volo</h4>
                <p>€300 - Rendete il nostro viaggio più confortevole</p>
              </div>
            </div>
            <p class="honeymoon-note">
              Utilizzate gli stessi metodi di pagamento sopra indicati e specificate "Fondo Luna di Miele" nella causale.
            </p>
          </div>

          <div class="gift-card">
            <h2>💌 Tocco Personale</h2>
            <p>I regali più significativi vengono dal cuore:</p>
            <ul class="personal-gifts">
              <li>Lettere scritte a mano o biglietti con i vostri ricordi preferiti di noi</li>
              <li>Album fotografici o scrapbook</li>
              <li>Ricette di famiglia o consigli di cucina</li>
              <li>Libri che hanno un significato speciale per voi</li>
              <li>Oggetti fatti in casa o artigianato</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="gift-delivery">
        <h2>Informazioni Consegna Regali</h2>
        <div class="delivery-info">
          <div class="delivery-option">
            <h3>Indirizzo di Spedizione</h3>
            <p>
              Andrea Baccega<br>
              [Indirizzo da fornire]<br>
              [Città, Codice Postale]<br>
              Italia
            </p>
          </div>
          <div class="delivery-option">
            <h3>Giorno del Matrimonio</h3>
            <p>I regali possono anche essere portati alla location del matrimonio. Ci sarà un tavolo dedicato ai regali al ricevimento.</p>
          </div>
        </div>
      </section>

      <section class="thank-you">
        <h2>Grazie</h2>
        <p>
          Il vostro amore, supporto e presenza significano tutto per noi. Che scegliate di fare un regalo o semplicemente 
          di celebrare con noi, siamo grati di avervi nelle nostre vite. Grazie per essere parte del nostro giorno speciale!
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.gifts {
  padding: 2rem 0;
  width: 100%;
}

.container {
  max-width: 100%;
  margin: 0;
  padding: 0 1rem;
}

.gifts-header {
  text-align: center;
  margin-bottom: 3rem;
}

.gifts-header h1 {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #333;
  font-weight: 300;
}

.gifts-header p {
  font-size: 1.2rem;
  color: #666;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
}

.gift-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.gift-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.gift-card h2 {
  color: #667eea;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.gift-card p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.registry-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

.registry-link {
  display: inline-block;
  background: #667eea;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease;
}

.registry-link:hover {
  background: #5a6fd8;
}

.note {
  font-style: italic;
  color: #888;
  font-size: 0.9rem;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1rem 0;
}

.payment-method {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
}

.payment-method h3 {
  color: #333;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.bank-details p {
  margin: 0.3rem 0;
  font-family: monospace;
  background: white;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
}

.payment-method a {
  color: #667eea;
  text-decoration: none;
}

.payment-method a:hover {
  text-decoration: underline;
}

.honeymoon-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.honeymoon-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.honeymoon-item h4 {
  color: #333;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.honeymoon-item p {
  margin: 0;
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 500;
}

.honeymoon-note {
  font-style: italic;
  color: #888;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.personal-gifts {
  color: #666;
  line-height: 1.8;
  padding-left: 1.5rem;
}

.personal-gifts li {
  margin: 0.5rem 0;
}

.gift-delivery {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.gift-delivery h2 {
  color: #333;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.delivery-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.delivery-option {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
}

.delivery-option h3 {
  color: #667eea;
  margin: 0 0 1rem 0;
}

.delivery-option p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.thank-you {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.thank-you h2 {
  color: #667eea;
  margin: 0 0 1rem 0;
}

.thank-you p {
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .gifts-header h1 {
    font-size: 2rem;
  }
  
  .gift-cards {
    grid-template-columns: 1fr;
  }
  
  .gift-card {
    padding: 1.5rem;
  }
  
  .honeymoon-options {
    grid-template-columns: 1fr;
  }
  
  .delivery-info {
    grid-template-columns: 1fr;
  }
}
</style>
