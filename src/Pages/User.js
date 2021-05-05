import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function User() {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { signout, currentUser, passwordReset } = useAuth();
  const history = useHistory();
  const emailRef = useRef();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const email = emailRef.current.value;
    passwordReset(email)
      .then((msg) => {
        setMessage(msg);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleSignout = () => {
    signout();
    history.push("/");
  };
  console.log(currentUser);
  return (
    <div className="user">
      <div className="userInfo">
        {click ? (
          <form onSubmit={(e)=>handlePasswordReset(e)}>
                      <h3>Username : {currentUser.email}</h3>
            <div className="new-pwd">
              <h3>New Email : </h3>
              <input ref={emailRef} type="email" />
            </div>
            <div className="new-pwd">
              <button className="change-btn" type="submit" disabled={loading}>
                Save Password
              </button>
              <button onClick={handleSignout} className="logout">
                Log out
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h3>Username : {currentUser.email}</h3>
            <h3>Password : ***********</h3>
            <div className="new-pwd">
              <button className="change-btn" onClick={() => setClick(true)}>
                Change Password
              </button>
              <button onClick={handleSignout} className="logout">
                Log out
              </button>
            </div>
          </div>
        )}
      </div>

      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default User;
