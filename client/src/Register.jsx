import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from './Navbar'
import Footer from './Footer'

const Register = () => {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    //console.log(formValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a vailid Email Format!";
    }

    if (!values.gender) {
      errors.gender = "Gender is Required";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 4) {
      errors.password = "Password must not be less than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "password does not match";
    }

    return errors;  
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (
      formValues.firstName.length > 0 &&
      formValues.lastName.length > 0 &&
       formValues.email.length > 0 &&
       regex.test(formValues.email) &&
       formValues.gender.length > 0 &&
       formValues.password.length >= 4 & 
       formValues.password.length <= 10 &&
        formValues.confirmPassword.length > 0 &&
       formValues.password === formValues.confirmPassword 
       
    ) {

      Axios.post("http://localhost:3001/api/insert", {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        regEmail: formValues.email,
        regGender: formValues.gender,
        regPassword: formValues.password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setIsSubmit(true);
          alert('Details Successfully Captured')
        }
      })
      .catch((err)=>{
         setIsSubmit(false);
        alert(err)
      })
    }
  };

 
    
        /*(<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)*/
  return (
    <div>
        <Navbar />
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Register</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Register</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div class="container ">
          <div class="row justify-content-center apiCall" data-aos="fade-up ">
            <div class="col-lg-6 info-wrap mt-5 form-group">
              <form
                class="contact-form"
                onSubmit={handleSubmit}
                method='post'
                style={{ textAlign: "center" }}
              >
                <h1 style={{ textAlign: "center" }}>Sign Up With Us Today</h1>
                <br />

                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  placeholder="First-Name"
                  class="form-control textWidth"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "12px", color: "red" }}>
                  
                  {formErrors.firstName}
                </span>
                <br />
                <br />

                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  placeholder="Last-Name"
                  class="form-control textWidth"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "12px", color: "red" }}>
                  
                  {formErrors.lastName}
                </span>
                <br />
                <br />

                <input
                  type="text"
                  name="email"
                  value={formValues.email}
                  placeholder="E-mail"
                  class="form-control textWidth"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "12px", color: "red" }}>
                  
                  {formErrors.email}&nbsp; &nbsp;{loginStatus}
                </span>
                <br />
                <br />

                <input
                  type="text"
                  name="gender"
                  value={formValues.gender}
                  placeholder="Gender"
                  class="form-control textWidth"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "12px", color: "red" }}>
                  
                  {formErrors.gender}
                </span>
                <br />
                <br />

                <input
                  type="password"
                  name="password"
                  password="password"
                  value={formValues.password}
                  placeholder="Password"
                  class="form-control textWidth"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "12px", color: "red"}} >
                  {formErrors.password}
                </span>
                <br />
                <br />

                <input
                  type="password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  placeholder="Confirm password"
                  class="form-control textWidth"
                  onChange={handleChange}
                  required
                />
                <br />
                <span style={{ fontSize: "12px", color: "red" }}>
                  
                  {formErrors.confirmPassword}
                </span>
                <br />
                <br />

                <button
                  onClick={handleSubmit}
                  type="submit"
                  class="btn btn-outline-success px-lg-5"
                >
                  Register
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Register;
