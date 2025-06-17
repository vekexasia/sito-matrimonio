<script setup lang="ts">
</script>

<template>
  <div class="gifts">
    <div class="container">
      <section class="gifts-header">
        <h1>Gift List & Registry</h1>
        <p>Your presence is the greatest gift, but if you'd like to help us start our new life together...</p>
      </section>

      <section class="gift-options">
        <div class="gift-cards">
          <div class="gift-card">
            <h2>💝 Wedding Registry</h2>
            <p>We've created a registry with items that will help us build our home together.</p>
            <div class="registry-links">
              <a href="#" class="registry-link" target="_blank" rel="noopener">
                View our Amazon Registry
              </a>
              <a href="#" class="registry-link" target="_blank" rel="noopener">
                View our John Lewis Registry
              </a>
            </div>
            <p class="note">
              <em>Note: Registry links will be updated closer to the wedding date</em>
            </p>
          </div>

          <div class="gift-card">
            <h2>💰 Monetary Gifts</h2>
            <p>If you prefer to give a monetary gift, we would be incredibly grateful. You can contribute via:</p>
            
            <div class="payment-methods">
              <div class="payment-method">
                <h3>Bank Transfer (Preferred)</h3>
                <div class="bank-details">
                  <p><strong>Account Name:</strong> Andrea Baccega</p>
                  <p><strong>IBAN:</strong> [IBAN to be provided]</p>
                  <p><strong>BIC/SWIFT:</strong> [BIC to be provided]</p>
                  <p><strong>Bank:</strong> [Bank name to be provided]</p>
                  <p><strong>Reference:</strong> Wedding Gift - [Your Name]</p>
                </div>
              </div>

              <div class="payment-method">
                <h3>PayPal</h3>
                <p>Send to: <a href="mailto:vekexasia@gmail.com">vekexasia@gmail.com</a></p>
                <p>Please include "Wedding Gift" in the message</p>
              </div>

              <div class="payment-method">
                <h3>Cash</h3>
                <p>Cash gifts can be given on the wedding day. There will be a gift box at the reception.</p>
              </div>
            </div>
          </div>

          <div class="gift-card">
            <h2>🌍 Honeymoon Fund</h2>
            <p>Help us create unforgettable memories on our honeymoon!</p>
            <div class="honeymoon-options">
              <div class="honeymoon-item">
                <h4>Romantic Dinner for Two</h4>
                <p>€100 - Help us enjoy a special dinner during our honeymoon</p>
              </div>
              <div class="honeymoon-item">
                <h4>Adventure Excursion</h4>
                <p>€200 - Fund a day trip or activity</p>
              </div>
              <div class="honeymoon-item">
                <h4>Spa Day</h4>
                <p>€150 - Help us relax and unwind</p>
              </div>
              <div class="honeymoon-item">
                <h4>Flight Upgrade</h4>
                <p>€300 - Make our journey more comfortable</p>
              </div>
            </div>
            <p class="honeymoon-note">
              Use the same payment methods as above and specify "Honeymoon Fund" in the reference.
            </p>
          </div>

          <div class="gift-card">
            <h2>💌 Personal Touch</h2>
            <p>The most meaningful gifts come from the heart:</p>
            <ul class="personal-gifts">
              <li>Handwritten letters or cards with your favorite memories of us</li>
              <li>Photo albums or scrapbooks</li>
              <li>Family recipes or cooking tips</li>
              <li>Books that have special meaning to you</li>
              <li>Homemade items or crafts</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="gift-delivery">
        <h2>Gift Delivery Information</h2>
        <div class="delivery-info">
          <div class="delivery-option">
            <h3>Shipping Address</h3>
            <p>
              Andrea Baccega<br>
              [Address to be provided]<br>
              [City, Postal Code]<br>
              Italy
            </p>
          </div>
          <div class="delivery-option">
            <h3>Wedding Day</h3>
            <p>Gifts can also be brought to the wedding venue. There will be a designated gift table at the reception.</p>
          </div>
        </div>
      </section>

      <section class="thank-you">
        <h2>Thank You</h2>
        <p>
          Your love, support, and presence mean the world to us. Whether you choose to give a gift or simply 
          celebrate with us, we are grateful to have you in our lives. Thank you for being part of our special day!
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.gifts {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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
