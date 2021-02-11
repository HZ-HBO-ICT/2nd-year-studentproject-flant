import React, { useState } from "react";
import axios from "axios";

export default function App({ registerModalStatus, setRegisterModalStatus }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const toggleRegisterModal = () => {
    setRegisterModalStatus(!registerModalStatus);
  }

  const addHandler = async () => {
    try {
      await axios.post("http://localhost:5000/users", {
        username: `${username}`,
        password: `${password}`,
      });
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
    setUsername("");
    setPassword("");
    toggleRegisterModal();
  };

  return (

    <form className={`modal is-clipped ${registerModalStatus ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">

        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered is-size-2">Sign up</p>
          <button className="delete" onClick={toggleRegisterModal} aria-label="close"></button>
        </header>

        <section className="modal-card-body" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <div className="column is-fullwidth">
              <div className="columns is-vcentered is-centered">
                <div className="column">
                  <div className="column fullwidth">
                    <h2 className="subtitle mb-1 ">Username</h2>
                    <input style={{ backgroundColor: 'white' }}
                      className="input"
                      value={username}
                      onChange={userNameHandler}
                      type="text"
                      placeholder="username"
                    />
                  </div>
                  <div className="column">
                    <h2 className="subtitle mb-1">Password</h2>
                    <input style={{ backgroundColor: 'white' }}
                      className="input"
                      value={password}
                      onChange={passwordHandler}
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  {/* <h2 className="column has-text-danger">* is required</h2> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button
            className="button is-success ml-5"
            onClick={addHandler}
            type="submit"
            disabled={!username || !password ? true : false}
          >
            Submit
              </button>
          <button className="button is-light" onClick={toggleRegisterModal}>
            Cancel
              </button>
        </footer>
      </div>
    </form>
  );
}
