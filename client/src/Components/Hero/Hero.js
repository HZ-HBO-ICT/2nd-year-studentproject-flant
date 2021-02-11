import React from 'react'
import productShot from '../../images/productshot.svg'

export default function hero() {
    return (
        <div id="home" className="hero is-white is-fullheight-with-navbar">
            <div className="hero-body branding-hero-body">
                <div className="container">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column is-two-thirds">
                            <p className="hero-logo">
                                Flant
                            </p>

                            <div className="divider" />

                            <p className="branding-text">
                                A hydrated plant
                            </p>
                            <p className="branding-text">
                                is a happy plant,
                            </p>
                            <p className="branding-text">
                                same goes for your child!
                            </p>
                            <a href="#about" className="branding-button button is-warning has-text-white is-rounded">learn more</a>
                        </div>
                        <div className="column is-auto">
                            <div className="image branding-image">
                                <img src={productShot} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
