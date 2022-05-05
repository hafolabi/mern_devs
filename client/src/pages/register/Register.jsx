import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("")
  const [existUsername, setExistUsername] = useState("")
  const [existEmail, setExistEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setExistUsername('')
    setExistEmail('')
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      setMsg(res.data.message)
      
      // res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      setExistUsername(err.response.data.msg)
      setExistEmail(err.response.data.keyPattern?.email === 1 && 'email already exist!')
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className='registerInput' 
          required 
          autoFocus={true}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username..."
        />

         {existUsername && (
        <span
          style={{
            marginTop: "10px",
            color: "red",
            fontSize: 15,
          }}
        >
          {existUsername}
        </span>
      )}

        <label>Email</label>
        <input
          type="email"
          className='registerInput' 
          required 
          autoFocus={true}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
        />

         {existEmail && (
        <span
          style={{
            marginTop: "10px",
            color: "red",
            fontSize: 15,
          }}
        >
          {existEmail}
        </span>
      )}

        <label>Password</label>
        <input
          type="password"
          className='registerInput' 
          required 
          autoFocus={true}
          minLength='5'
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
        />

        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
     

      {error && (
        <span
          style={{
            marginTop: "10px",
            color: "red",
            fontSize: 15,
          }}
        >
          Something went wrong!
        </span>
      )}

      {msg && (
        <span className="regsiterVerifyMsg">
         {msg}
        </span>
      )}
      <div className="mobileMarginBottom"></div>
    </div>
  );
}
