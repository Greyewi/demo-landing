import './style.css'
import Clock from './assets/clock.svg'
import Ai from './assets/ai.svg'
import Int from './assets/intergation.svg'
import Analyt from './assets/analytics.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <!-- Hero Section -->
    <section id="hero">
      <div class="hero-content">
        <h1>ChatBox Pro</h1>
        <p>Revolutionize Your Customer Experience with AI</p>
        <a href="#features" class="main-btn">Discover Features</a>
      </div>
    </section>
    <!-- Product Features -->
    <section id="features">
    <h1>Welcome to ChatBox Pro</h1>
    <p>The next generation chatbot service.</p>
    
      <div class="feature-list">
        <div class="feature-item">
          <div class="icon-bg">
              <img src="${Clock}" alt="24/7 Support Icon">
          </div>
          <h3>24/7 Customer Support</h3>
          <p>We're always here to assist you. Day or night, ChatBox Pro ensures you have the support you need.</p>
        </div>
          
        <div class="feature-item">
          <div class="icon-bg">
            <img src="${Ai}" alt="AI-powered Icon">
          </div>
          <h3>AI-powered Conversations</h3>
          <p>Experience state-of-the-art bot responses. Our AI learns and evolves, ensuring the best user experience.</p>
        </div>
        
        <div class="feature-item">
          <div class="icon-bg">
            <img src="${Int}" alt="Integration Icon">
          </div>
          <h3>Easy Integration</h3>
          <p>Seamlessly incorporate ChatBox Pro into your workflow. Integrate with top CRMs, websites, and apps.</p>
        </div>
          
        <div class="feature-item">
          <div class="icon-bg">
            <img src="${Analyt}" alt="Analytics Icon">
          </div>
          <h3>Powerful Analytics</h3>
          <p>Understand user behavior, gather feedback, and improve your service with our in-depth analytics tools.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" data-speed="2">
      <div class="parallax-background-testimonials"></div>
      <div class="testimonials-content">
        <h2>What our clients say</h2>
        <div class="testimonial">
          <blockquote>"ChatBox Pro has transformed our customer service experience!"</blockquote>
          <cite>- Alex</cite>
        </div>
        <div class="testimonial">
          <blockquote>"Impressive response time and AI capabilities."</blockquote>
          <cite>- Jordan</cite>
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
        <h2>Join Our Community</h2>
        <p>Experience the best features and support by joining our community today. Don't miss out on our limited-time offer!</p>
        <button class="main-btn">Get Started</button>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section id="newsletter">
      <div class="newsletter-content">
        <h2>Stay Updated!</h2>
        <p>Get the latest news, updates, and exclusive offers delivered straight to your inbox. We value your privacy and will never spam you.</p>
        
        <div class="signup-form">
            <input type="email" placeholder="Enter your email address" aria-label="Email for newsletter signup" required>
            <button class="main-btn">Sign Up</button>
        </div>
        
        <p class="privacy-notice">By signing up, you agree to our <a href="#">Privacy Policy</a>.</p>
      </div>
    </section>
  </div>
`

// @ts-ignore
document.querySelector('.main-btn').addEventListener('click', (e: Event) => {
  e.preventDefault();
  const featuresElement = document.getElementById('features');
  if (featuresElement) {
    featuresElement.scrollIntoView({ behavior: 'smooth' });
  }
});

document.addEventListener("scroll", function() {
  const parallaxSections: NodeListOf<HTMLElement> = document.querySelectorAll("#newsletter, #testimonials");

  parallaxSections.forEach((section: HTMLElement) => {
    const speed: number = parseFloat(section.dataset.speed || "2");
    const offset: number = window.pageYOffset;
    const translateYValue: number = -(offset * speed / 10);

    const parallaxBackground: HTMLElement | null = section.querySelector(".parallax-background, .parallax-background-testimonials");
    if (parallaxBackground) {
      parallaxBackground.style.transform = `translateY(${translateYValue}px)`;
    }
  });
});