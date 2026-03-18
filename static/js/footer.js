const footer = () => {
    const footerSection = document.querySelector('#main-footer');
    let year = new Date().getFullYear();
    footerSection.innerHTML = `         <div class="container footer-wrapper">
            <div class="row">
                <!-- Column 1 -->
                <div class="col-lg-3 col-md-6 mb-5">
                    <img src="static/image/JSM LOGO 1.jpeg" class="footer-logo mb-4" alt="logo "
                        style="width: 100px; height: auto" />

                    <p class="footer-text">
                        JSM Wealth, Health & Insurance provides
                        reliable wealth management and insurance solutions to secure your
                        financial future.
                    </p>

                    <div class="social-iconss mt-4">
                        <a href="#finance-section"><i class="fab fa-facebook-f"></i></a>
                        <a href="#finance-section"><i class="fab fa-instagram"></i></a>
                        <a href="#finance-section"><i class="fab fa-whatsapp"></i></a>
                        <a href="#finance-section"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

                <!-- Column 2 -->
                <div class="col-lg-3 col-md-6 mb-5">
                    <h4 class="footer-title">
                        About Us
                        <span class="line"></span>
                    </h4>
                    <div class="footers-link">
                         <ul class="footer-links">
                        <li>
                           <a href="#finance-section" class="anchor"><i class="fas fa-arrow-right"></i> Introduction</a>
                        </li>
                        <li> <a href="#finance-section" class="anchor"><i class="fas fa-arrow-right"></i>Group Philosophy</a> </li>
                        <li><a href="#finance-section" class="anchor"><i class="fas fa-arrow-right"></i>Leadership</a> </li>
                           <li><a href="#finance-section" class="anchor"><i class="fas fa-arrow-right"></i>Businesses</a> </li>
                           <li><a href="#finance-section" class="anchor"><i class="fas fa-arrow-right"></i>Disclaimer</a> </li>
    
                    </ul>
                    </div>
                   
                </div>

                <!-- Column 3 -->
                <div class="col-lg-3 col-md-6 mb-5">
                    <h4 class="footer-title">
                        Quick Links
                        <span class="line"></span>
                    </h4>
                    <div class="footers-links">
 <ul class="footer-links">
                        <li>
                            <a href="#finance-section" class="anchor">
                                <i class="fas fa-arrow-right"></i> Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#finance-section" class="anchor">
                                <i class="fas fa-arrow-right"></i> Terms Of Use
                            </a>
                        </li>

                        <li>
                            <a href="#finance-section" class="anchor">
                                <i class="fas fa-arrow-right"></i> Contact Us
                            </a>
                        </li>

                        <li>
                            <a href="#finance-section" class="anchor">
                                <i class="fas fa-arrow-right"></i> Site Map
                            </a>
                        </li>

                        <li>
                            <a href="#finance-section" class="anchor">
                                <i class="fas fa-arrow-right"></i> FAQ
                            </a>
                        </li>

                    </ul>
                    </div>
                   
                </div>

                <!-- Column 4 -->
             <!-- Column 4 -->
<div class="col-lg-3 col-md-6">
    <h4 class="footer-title">
        Get In Touch!
        <span class="line"></span>
    </h4>

    
    <div class="contact-row mt-3">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <div>Jsmwealth@gmail.com</div>
    </div>

    <div class="contact-row">
        <div class="contact-icon"><i class="fas fa-phone"></i></div>
        <div>+91-9406960918</div>
    </div>
    <div class="contact-row">
        <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
        </div>
        <div>
            96, Good Shepherd Colony, Banjari, Kolar Road, Bhopal (M.P.)
            462042
        </div>
    </div>

    <!-- Google Map -->
    <div class="footer-map mt-3">
        <iframe 
            src="https://www.google.com/maps?q=Good+Shepherd+Colony+Banjari+Kolar+Road+Bhopal&output=embed"
            width="100%" 
            height="150" 
            style="border:0; border-radius:10px;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>
    </div>

</div>
            </div>
        </div>


        <!-- Bottom Bar -->
        <div class="footer-bottom text-center">
            ©2025-26 JSM Wealth Health & Insurance | All Rights Reserved | Digital
            Partner: paarsiv.com
        </div>`
}

footer();