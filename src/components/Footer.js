import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-contact">
                <p className="footer-contact-heading">
                    Contact us for queries.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-logo">
            
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-instagram"></i>
                     

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
