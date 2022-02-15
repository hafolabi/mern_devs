import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import Navbar from './Navbar'
import Footer from './Footer'

const Login = () => {
      const initialValues = {
          email: "",
          password: ""
        };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [loginStatus, setLoginStatus] = useState("");
      const [regList, setRegList] = useState([]);
      const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/user");
    }
   
  });
  
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/").then((res) => {
      setRegList([res.data[0]]);
      //console.log(res.data);
    });

  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
        errors.email = "Email is Required";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a vailid Email Format!";
      }

      if (!values.password) {
        errors.password = "Password is Required";
      } else if (values.password.length < 4) {
        errors.password = "Password must not be less than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed 10 characters";
      }
      return errors; 
}

  const handleLogin = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    Axios.post("http://localhost:3001/login", {
      regEmail: formValues.email,
      regPassword: formValues.password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].name);
        localStorage.setItem('user-info', JSON.stringify(response.data[0]))
        history.push('/user')
      }
    })
    .catch((err)=>{
     alert(err)
   })
    
  };

  return (
    <div>
      <Navbar />
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Login</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Login</li>
            </ol>
          </div>
        </div>
      </section>

      <div class="container ">
        <form class="contact-form" onSubmit={handleLogin}>

          <div class="row justify-content-center apiCall" data-aos="fade-up ">

            <div class="col-lg-6 info-wrap mt-3">
              <h1 style={{ textAlign: "center" }}>Insert Your Credentials</h1>
            </div>
            
          </div>

          <div class="row mt-5 justify-content-center" data-aos="fade-up ">
            <div class="col-lg-5 form-group">
            <span style={{ fontSize: "12px", color: "red",}}>
                  {loginStatus}
                </span>
                <br /><br />
              <input
                name="email"
                value={formValues.email}
                type="text"
                placeholder="E-mail"
                onChange={handleChange}
                class="form-control textWidth"
              />
               <span style={{ fontSize: "12px", color: "red"}}>
                  {formErrors.email}
                </span>
            </div>
          </div>

          <div class="row mt-4 justify-content-center" data-aos="fade-up ">
            <div class="col-lg-5 form-group">
              <input
                type="password"
                name='password'
                value={formValues.password}
                placeholder="Password"
                onChange={handleChange}
                class="form-control textWidth"
              />

              <span style={{ fontSize: "12px", color: "red" }}>
                  
                  {formErrors.password}
                </span>
            </div>
          </div>

          <div class="row mt-5 justify-content-center" data-aos="fade-up ">
            <div class="col-lg-5 form-group">
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-outline-success btn-lg px-lg-5"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div class="row mt-3 justify-content-center" data-aos="fade-up ">
            <div class="col-lg-5 form-group">
              {" "}
              <br />
              <div class="text-center">
                <span
                  style={{ fontSize: "8", color: "grey", cursor: "pointer" }}
                >
                  Forget password <b>click here</b>
                </span>{" "}
                <br />
                <span
                  style={{ fontSize: "8", color: "grey", cursor: "pointer" }}
                >
                  Dont have an account{" "}
                  <b>
                    <Link to="/register">click here</Link>
                  </b>
                </span>
               
              </div>
            </div>
          </div>
        </form>

   
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h6 style={{ fontSize: "10px" }}>localDB callz</h6>
        {regList.map((single) => (
          <h6 style={{ fontSize: "10px" }} key={single.id}> FULL NAME: {single.firstName}</h6>
        ))}
      </div>
      <Footer />
     
    </div>
  );
};

export default Login;
