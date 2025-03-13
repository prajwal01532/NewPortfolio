import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer>
            <div class="footer-content">
                <div class="social-media">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">YouTube</a>
                    <a href="#">RSS</a>
                </div>
                <nav class="footer-nav">
                    <a href="#">HOME</a>
                    <a href="#">MY WORK</a>
                    <a href="#">MY CLIENTS</a>
                    <a href="#">MY BLOG</a>
                    <a href="#">CONTACT ME</a>
                </nav>
                <div class="footer-bottom">
                    <p>PortfolioM4. Powered by Mobirise.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 