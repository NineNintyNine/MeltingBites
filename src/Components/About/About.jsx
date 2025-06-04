import React from 'react'
import frontpicture from '../Assets/frontpicture.png'
import './About.css'
const About = () => {
  return (
          <section className="about-section">
            <div className='about-header-wrapper'>
              <h1 className='about-header'>About Melting Bites</h1>
           
                <div className="about-container">
                  {/* Image Section */}
                  <div className="about-image">
                    <img
                      src={frontpicture}
                      alt="Melting Bites"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="about-text">
                    <h2>Our Story</h2>
                    <p style={{margin:0}}><span>At Melting Bites, we believe in the magic of baking. Founded with a passion for creating delicious treats, our home bakery uses only the finest ingredients to bring joy to your taste buds. We're a women owned business that loves to experiment with new recipes until we find the best version for you! We make delicious custom cakes, cupcakes and cookies for all occasions. From buttercream to fondant, simple to extravagant, we've got you covered! Contact us today!</span></p>
                    <a href="/menu" className="btn" style={{margin:0}}>Explore Our Menu</a>
                  </div>
                </div>
                </div>
              </section>
  )
}

export default About
