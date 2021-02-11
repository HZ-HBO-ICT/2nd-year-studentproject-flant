import React from 'react'

export default function order() {
    return (

        <div className="columns" style={{ marginTop: 5 + 'em' }}>
            <div className="column is-one-quarter"></div>
            <div className="column">
                <div className="field">
                    Salutation:
                    <div className="control">
                        <label className="radio">
                            <input type="radio" name="question" />
                                Mr.
                             </label>
                        <label className="radio">
                            <input type="radio" name="question" />
                                Ms.
                        </label>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">First name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="First name" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Last name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Last name" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Address</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Address" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-home"></i>
                        </span>
                    </div>

                    <div className="field">
                        <label className="label">Residence</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Residence" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-home"></i>
                            </span>
                        </div>
                    </div>
                    <a className="button is-success is-rounded has-text-white has-shadow" href="/ordered">buy now</a>
                </div>
            </div>


            <div className="column is-one-quarter"></div>
        </div>
    )
}
