import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  // const fullNameRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const history = useHistory();
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const fullName = fullNameRef.current.value;
    signup(email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/home");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="login">
      <h1>Sign Up</h1>
      <form onSubmit={(e) => handleSignup(e)}>
        <h3>Email</h3>
        <input type="email" ref={emailRef} />
        <h3>Password</h3>
        <input type="text" ref={passwordRef} />
        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
}

export default SignUp;
