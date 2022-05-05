import { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../components/context/Context";
import "./login.css";
import { axiosInstance } from "../../config";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching, error } = useContext(Context);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [passResetMode, setPassResetMode] = useState(false);
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      history.goBack()
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const handleResetPass = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/passreset", {
        email,
      });
      setMsg(res.data.message);
      res.data && setLoading(false);
      // res.data && window.location.replace("/login");
    } catch (err) {}
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      {isFetching && (
        <span
          style={{
            color: "red",
            fontSize: 15,
            fontFamily: "Redressed",
            marginTop: 10,
          }}
        >
          <i> In progress...</i>
        </span>
      )}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          required
          autoFocus={true}
          placeholder="Enter your email..."
          ref={emailRef}
        />

        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          required
          minLength="5"
          placeholder="Enter your password..."
          ref={passwordRef}
        />

        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>

      {loading && (
        <span
          style={{
            color: "red",
            fontSize: 15,
            fontFamily: "Redressed",
            marginTop: 30,
          }}
        >
          <i> In progress...</i>
        </span>
      )}

      {passResetMode ? (
        <form onSubmit={handleResetPass} className="resetForm">
          <h1 className="resetFormTitle">Enter email you registered with...</h1>
          <input
            type="email"
            required
            autoFocus={true}
            placeholder="Enter your existing email"
            onChange={(e) => setEmail(e.target.value)}
            className="resetFormInput"
          />
          <button type="submit" className="resetFormButton">
            Reset Password
          </button>
        </form>
      ) : (
        <span onClick={() => setPassResetMode(true)} className="forgetPass">
          Forget Password
        </span>
      )}

      {msg && (
        <span className="passResetVerifyMsg">
         {msg}
        </span>
      )}

      {error && (
        <div
          style={{
            color: "red",
            fontSize: 16,
            fontFamily: "Redressed",
            marginTop: 20,
          }}
        >
          Invalid Credentials
        </div>
      )}
      <div className="mobileMarginBottom"></div>
      </div>
  );
}
