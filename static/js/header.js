const header = () => {
    const headerSection = document.querySelector("#main-header");

    headerSection.innerHTML = ` 
 <!-- Top Bar -->
  <div class="top-bar">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <a href="mailto:jsmwealth@gmail.com">jsmwealth@gmail.com</a>
        |
       <span><i class="fas fa-phone"></i>
          +91-9406960918</span>
      </div>

      <div class="social-icoons">
        <span class="me-2">Follow Us On:</span>
        <a href="#finance-section">
        <i class="fab fa-linkedin-in"></i>
    </a>

  

    <a href="#finance-section">
        <i class="fab fa-instagram"></i>
    </a>

  
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="main-nav">
    <div class="containers d-flex align-items-center justify-content-between">

      <div class="logo">
        <a href="index.html"><img src="static/image/jsm.logo.png" alt="JSM Wealth Logo"></a>
      
      </div>
    
    <!-- Toggle Button -->
    <button class="menu-toggle" id="menuToggle">
      ☰
    </button>

      <ul class="nav-links  align-items-center mb-0" id="navLinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="#about-section">About Us</a></li>
        <li><a href="#services-section">JSM Wealth</a></li>
<li><a href="#services-sections">JSM Insurance</a></li>
        <li><a href="sip.html">SMART SIP 360</a></li>
        
        <li><a href="#finance-section">Contact</a></li>
      </ul>

      <a href="#finance-section" class="btn-quote">GET A QUOTE</a>
    </div>
  </nav>
`
}

header();