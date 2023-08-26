(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n=""+new URL("clock-9da2f814.svg",import.meta.url).href,c=""+new URL("ai-2dbbdb55.svg",import.meta.url).href,l=""+new URL("intergation-a3500d15.svg",import.meta.url).href,d=""+new URL("analytics-5727d4e6.svg",import.meta.url).href;document.querySelector("#app").innerHTML=`
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <div class="hero-content">
        <h1>Russian Tech Squad</h1>
        <p>Where cold winters forge the hottest tech talents!</p>
        <a href="#features" class="main-btn">Discover Our Skills</a>
      </div>
    </section>
    <!-- Product Features -->
    <section id="features">
    <h1>Welcome to Russian Tech Squad</h1>
    <p>Unlock the power of the Russian tech force!</p>
    
      <div class="feature-list">
        <div class="feature-item">
          <div class="icon-bg">
              <img src="${n}" alt="24/7 Support Icon">
          </div>
          <h3>Unmatched Resilience</h3>
          <p>Whether it's coding in Siberian cold or troubleshooting during a balalaika concert, we never back down.</p>
        </div>
          
        <div class="feature-item">
          <div class="icon-bg">
            <img src="${c}" alt="AI-powered Icon">
          </div>
          <h3>Celebratory Spirit</h3>
          <p>Every successful project is celebrated with a toast. For big projects, even a dance!</p>
        </div>
        
        <div class="feature-item">
          <div class="icon-bg">
            <img src="${l}" alt="Integration Icon">
          </div>
          <h3>Layered Solutions</h3>
          <p>Just like our Matryoshka dolls, our solutions have layers. Dive deep to discover more.</p>
        </div>
          
        <div class="feature-item">
          <div class="icon-bg">
            <img src="${d}" alt="Analytics Icon">
          </div>
          <h3>Warm Support</h3>
          <p>Our support team is always there, keeping your projects warm and running, just like an Ushanka in winter!</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" data-speed="2">
      <div class="parallax-background-testimonials"></div>
      <div class="testimonials-content">
        <h2>What our comrades say</h2>
        <div class="testimonial">
          <blockquote>"After using Tech Squad, even my babushka wants to set it up for her pierogi recipes blog!"</blockquote>
          <cite>- Ivan</cite>
        </div>
        <div class="testimonial">
          <blockquote>"It's faster than a sledge in Siberian snow! Tech Squad is as sharp as my ushanka in winter."</blockquote>
          <cite>- Anastasia</cite>
        </div>
      </div>
    </section>

    <!-- Call-to-Action -->
    <section id="cta">
      <div class="cta-content">
        <div class="svg-container">
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5 L65 30 L60 45 L75 60 L55 95 L45 75 L25 70 L30 50 L45 30 Z" fill="#000" />
            <circle cx="50" cy="80" r="15" fill="#f00" />
          </svg>
        </div>
        <h2>Join Our Comrade Collective!</h2>
        <p>Why endure Siberian cold alone? Warm up with our community's camaraderie and features. Special borscht offer for limited time!</p>
        <button class="main-btn">Start the Party!</button>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section id="newsletter">
      <div class="newsletter-content">
        <h2>Stay Informed, Comrade!</h2>
        <p>Subscribe for the freshest babushka recipes, tips on bear wrestling, and updates from the motherland! We respect your privacy more than a bear respects honey.</p>
        
        <div class="signup-form">
          <input type="email" placeholder="Enter your matryoshka email" aria-label="Email for newsletter signup" required>
          <button class="main-btn">Join The Parade!</button>
        </div>
        
        <p class="privacy-notice">By signing up, you show trust in us. We won't let you down! Read our <a href="#">Privacy Policy</a>.</p>
      </div>
    </section>
  </div>
`;document.querySelector(".main-btn").addEventListener("click",s=>{s.preventDefault();const i=document.getElementById("features");i&&i.scrollIntoView({behavior:"smooth"})});document.addEventListener("scroll",function(){document.querySelectorAll("#newsletter, #testimonials").forEach(i=>{const r=parseFloat(i.dataset.speed||"2"),e=-(window.pageYOffset*r/10),t=i.querySelector(".parallax-background, .parallax-background-testimonials");t&&(t.style.transform=`translateY(${e}px)`)})});
