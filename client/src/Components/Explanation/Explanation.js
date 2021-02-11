import React from 'react'
import bottle from '../../images/bottle.svg'

export default function explanation() {
    return (
        <section id="about" className="section">
            <div className="columns is-desktop is-vcentered">
                <div className="column is-half">
                    <div className="image explanation-image">
                        <img src={bottle} />
                    </div>
                </div>

                <div className="column is-auto">
                    <p className="branding-slogan">
                        We care about hydration
                    </p>

                    <div className="divider" />

                    <p className="branding-text">
                        and so should you.
                    </p>

                    <p className="subtitle">
                        Staying hydrated is staying healthy. That’s why Flant is perfect for you!
                        Using state-of-the-art technology, Flant measures how much water you drink, giving you insight into your habits and helping you to stay hydrated.
                    </p>
                    <a href="#buy" className="branding-button button is-warning has-text-white is-rounded">buy now</a>
                </div>
            </div>
        </section>
    )
}
