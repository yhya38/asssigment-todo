import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signin } = useAuth();
  const history = useHistory();
  const handleSignin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signin(email, password)
      .then((ref) => {
        setLoading(false);
        history.push("/home");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={(e) => handleSignin(e)}>
          <h3>Email</h3>
          <input type="email" ref={emailRef} />
          <h3>Password</h3>
          <input type="text" ref={passwordRef} />
          <button type="submit" disabled={loading}>
            Sign In
          </button>
          {error && <p>{error}</p>}
        </form>
        <p>Dont have an account?</p>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </>
  );
}

export default Login;
