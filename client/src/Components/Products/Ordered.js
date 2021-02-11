import React from 'react'
import sadflant from '../../images/Frame_1.svg'
export default function Ordered() {
    return (
        <div>
            <br /><br />
            <div className="columns is-mobile is-centered">
                <div className="column has-content-centered is-one-third">
                    <img src={sadflant}></img>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-one-third has-text-centered">
                    Thank you for your interest. Unfortunately due to our incompetence there are currently no Flants available.
                    <br />We'll let you know per email when our stock is back up!<br />
                    <br />
                    <div className="column has-text-centered">
                        <a className="button is-success is-rounded has-text-white has-shadow" href="/home">back to home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
