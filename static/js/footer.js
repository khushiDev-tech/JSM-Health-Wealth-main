
const footer = () => {
    const footerSection = document.querySelector('#main-footer');
    let year = new Date().getFullYear();

    footerSection.innerHTML = `

    <div class="container footer-wrapper">
        <div class="row">

            <!-- Column 1 -->
            <div class="col-lg-3 col-md-6 mb-5">
                <img src="static/image/JSM LOGO 1.jpeg" 
                     class="footer-logo mb-3" 
                     alt="JSM Logo" />

                <p class="footer-text">
                    JSM Wealth, Health & Insurance provides reliable wealth management 
                    and insurance solutions to secure your financial future.
                </p>

                <!-- Social Icons -->
              
            </div>

            <!-- Column 2 -->
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="footer-title">
                    Quick Links
                    <span class="line"></span>
                </h4>
<div>
<ul class="footer-links">
                    <li><a href="index.html#finance-section"><i class="fas fa-arrow-right"></i> Privacy Policy</a></li>
                    <li><a href="index.html#finance-section"><i class="fas fa-arrow-right"></i> Terms Of Use</a></li>
                    <li><a href="index.html#finance-section"><i class="fas fa-arrow-right"></i> Contact Us</a></li>
                    <li><a href="index.html#finance-section"><i class="fas fa-arrow-right"></i> Site Map</a></li>
                    <li><a href="index.html#finance-section"><i class="fas fa-arrow-right"></i> FAQ</a></li>
                </ul></div>
                
            </div>

            <!-- Column 3 -->
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="footer-title">
                    Get In Touch
                    <span class="line"></span>
                </h4>

                <div class="contact-row mt-3">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <a href="mailto:Jsmwealth@gmail.com" style="color:inherit; text-decoration:none;">
                            Jsmwealth@gmail.com
                        </a>
                    </div>
                </div>

                <div class="contact-row">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div>
                        <a href="tel:+919406960918" style="color:inherit; text-decoration:none;">
                            +91-9406960918
                        </a>
                    </div>
                </div>

                <div class="contact-row">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        96, Good Shepherd Colony, Banjari,
                        Kolar Road, Bhopal (M.P.)
                    </div>
                </div>
            </div>

            <!-- Column 4 -->
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="footer-title">
                    Locate Us
                    <span class="line"></span>
                </h4>

                <div class="footer-map mt-3">
                    <iframe 
                        src="https://www.google.com/maps?q=Good+Shepherd+Colony+Banjari+Kolar+Road+Bhopal+462042&output=embed"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
        © ${year} JSM Wealth Health & Insurance | All Rights Reserved | Digital Partner: paarsiv.com
    </div>
    `;
}

footer();
