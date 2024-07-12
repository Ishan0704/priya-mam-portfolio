import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Priya</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://www.instagram.com/priyarakibe/?igsh=MThrY3FyZHpiM2VtcA%3D%3D" className="footer__social-link" target="_blank">
                    <i class="uil uil-instagram-alt"></i>
                </a>

                <a href="" className="footer__social-link" target="_blank">
                    <i class="uil uil-twitter"></i>
                </a>
        
                <a href="" className="footer__social-link" target="_blank">
                    <i class="uil uil-facebook"></i>
                </a>

                <a href="" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>
                 
            </div>
            <span className="footer__copy">&#169;All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer