import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Your AI-Powered Health Assistant</h1>
        <p>Stay healthy with personalized insights, intelligent analysis, and instant health support from your pocket.</p>
        <Link to="/bot" className="cta-btn">
          Get Started
        </Link>
      </section>
      {/* Why LifeCare Section */}
      <section className="why-lifecare">
        <h2>Why Choose LifeCare?</h2>
        <p>
          In a world full of health information, LifeCare simplifies your journey by giving you instant access to reliable, AI-powered health tools—right at your fingertips.
        </p>
        <div className="why-grid">
          <div className="why-card">
            <img src="https://img.icons8.com/fluency/48/artificial-intelligence.png" alt="Smart AI" />
            <h4>Smart AI Assistance</h4>
            <p>Our intelligent algorithms provide real-time suggestions and guidance based on your inputs.</p>
          </div>
          <div className="why-card">
            <img src="https://img.icons8.com/ios-filled/50/health-graph.png" alt="Health Tracking" />
            <h4>Easy Health Tracking</h4>
            <p>Keep tabs on your health metrics like BMI, symptoms, and risk factors in one place.</p>
          </div>
          <div className="why-card">
            <img src="https://img.icons8.com/color/48/user-male-circle.png" alt="User Friendly" />
            <h4>User-Friendly Interface</h4>
            <p>Clean design and simple tools make it easy for everyone to use, regardless of tech skills.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="https://img.icons8.com/dusk/64/scale.png" alt="BMI Calculator" />
            <h3>BMI Calculator</h3>
            <p>Calculate your Body Mass Index quickly to track and manage your health goals. Our tool guides you with recommendations based on your results.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/color/64/pill.png" alt="Medicine Guide" />
            <h3>Medicine Guide</h3>
            <p>Explore detailed medicine info including usage instructions, side effects, dosage, and precautions. Stay informed before every dose.</p>
          </div>
          <div className="feature-card">
            <img src="https://img.icons8.com/color/64/heart-with-pulse.png" alt="Health Risk Checker" />
            <h3>Health Risk Checker</h3>
            <p>Our AI examines patterns in your data to identify potential risks early, helping you make smarter health choices before problems arise.</p>
          </div>
          <div className="feature-card">
           
            <h3>Doctor Bot</h3>
            <p>Have symptoms or questions? Get quick, conversational support from our AI doctor bot—available 24/7 to assist you instantly.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2>About LifeCare</h2>
        <img src="https://img.icons8.com/color/96/health-checkup.png" alt="About LifeCare" />
        <p>
          At LifeCare, we believe that healthcare should be simple, accessible, and proactive. Our platform blends technology with health expertise to help users monitor their wellness and get helpful guidance on demand. We’re here to empower you with tools to live better every day.
        </p>
      </section>

            {/* How It Works Section */}
            <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="how-subtext">
          Getting started with LifeCare is simple and quick. Just follow these 3 steps to take control of your health.
        </p>
        <div className="steps-grid">
          <div className="step-card">
            <img src="https://img.icons8.com/fluency/64/survey.png" alt="Step 1" />
            <h4>1. Share Your Info</h4>
            <p>
              Provide basic details like age, height, weight, or your current symptoms. No personal ID needed—just your health inputs.
            </p>
          </div>
          <div className="step-card">
            <img src="https://img.icons8.com/fluency/64/robot-2.png" alt="Step 2" />
            <h4>2. AI Health Analysis</h4>
            <p>
              Our AI analyzes your input using advanced algorithms trained on real medical data. It’s fast, secure, and smart.
            </p>
          </div>
          <div className="step-card">
            <img src="https://img.icons8.com/fluency/64/light-on.png" alt="Step 3" />
            <h4>3. Get Personalized Results</h4>
            <p>
              Receive tailored advice, health scores, and tips in real time. Plus, connect with our Doctor Bot for deeper help.
            </p>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="stats">
        <h2>Trusted by Thousands</h2>
        <div className="stats-grid">
          <div>
            <h3>50K+</h3>
            <p>Users Helped</p>
          </div>
          <div>
            <h3>95%</h3>
            <p>User Satisfaction Rate</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Instant AI Assistance</p>
          </div>
        </div>
      </section>

         {/* FAQ Section */}
         <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">Got questions? We've got answers to help you understand how LifeCare works.</p>
        <div className="faq-grid">
          <div className="faq-card">
            <img src="https://img.icons8.com/color/48/faq.png" alt="Free Use Icon" />
            <h4>Is LifeCare free to use?</h4>
            <p>Absolutely! LifeCare is completely free for everyone. Our goal is to make AI-powered health tools accessible to all.</p>
          </div>
          <div className="faq-card">
            <img src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="AI Trust Icon" />
            <h4>Can I trust the AI bot?</h4>
            <p>Yes! Our Doctor Bot is built on validated medical guidelines and regularly updated to ensure safe and helpful responses.</p>
          </div>
          <div className="faq-card">
            <img src="https://img.icons8.com/color/48/privacy-policy.png" alt="Privacy Icon" />
            <h4>What about my data privacy?</h4>
            <p>Your data stays private. We don’t collect any personally identifiable information and all inputs are anonymized.</p>
          </div>
          <div className="faq-card">
            <img src="https://img.icons8.com/color/48/device-manager.png" alt="Device Support Icon" />
            <h4>Which devices are supported?</h4>
            <p>LifeCare works seamlessly on mobile, tablet, and desktop. No download needed—just access it from any browser!</p>
          </div>
        </div>
      </section>


            {/* Daily Health Tips Section */}
            <section className="health-tips-section">
        <h2>Daily Health Tips</h2>
        <p className="tips-subtext">
          Start your day right with simple, practical tips for a healthier lifestyle.
        </p>
        <div className="tips-grid">
          <div className="tip-card">
          <img src="https://img.icons8.com/fluency/64/water.png" alt="Hydration" />
           <h4>Stay Hydrated</h4>
            <p>Drink at least 8 glasses of water a day to keep your body energized and your skin glowing.</p>
          </div>
          <div className="tip-card">
            <img src="https://img.icons8.com/color/64/apple.png" alt="Nutrition" />
            <h4>Eat More Fruits</h4>
            <p>Include colorful fruits in your diet to boost your immunity and get essential vitamins.</p>
          </div>
          <div className="tip-card">
            <img src="https://img.icons8.com/color/64/running.png" alt="Exercise" />
            <h4>Move Your Body</h4>
            <p>Even a 20-minute walk daily improves heart health, mood, and reduces stress.</p>
          </div>
          <div className="tip-card">
          <img src="https://img.icons8.com/fluency/64/sleeping.png" alt="Sleep" />
            <h4>Prioritize Sleep</h4>
            <p>Aim for 7–9 hours of quality sleep to help your body recover and your mind stay sharp.</p>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
           {/* Testimonials Section */}
           <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <p className="testimonial-subtext">
          Real experiences from people who improved their health with LifeCare.
        </p>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah M." />
            <p>
              “LifeCare helped me understand my BMI and set realistic fitness goals. The Doctor Bot is like having a virtual health buddy!”
            </p>
            <h4>Sarah M.</h4>
            <span>Fitness Enthusiast</span>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John D." />
            <p>
              “I love how easy it is to check symptoms and get advice instantly. It’s accurate and saved me from unnecessary worry.”
            </p>
            <h4>John D.</h4>
            <span>Software Developer</span>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya K." />
            <p>
              “The daily health tips and clean UI keep me coming back. This app truly makes self-care simple and enjoyable.”
            </p>
            <h4>Priya K.</h4>
            <span>College Student</span>
          </div>
        </div>
      </section>


                 {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>LifeCare</h3>
            <p>Your AI-powered companion for better health, anytime, anywhere.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bot">Doctor Bot</Link></li>
              <li><Link to="/bmi">BMI Calculator</Link></li>
              <li><Link to="/medicine">Medicine Guide</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: support@lifecare.ai</p>
            <p>Phone: +1 (800) 123-4567</p>
            <div className="social-icons">
              <a href="#"><img src="https://img.icons8.com/ios-filled/24/facebook-new.png" alt="Facebook" /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/24/twitterx--v2.png" alt="Twitter" /></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/24/instagram-new.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 LifeCare. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
};

export default Home;
