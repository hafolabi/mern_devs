import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Addtoarr extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      username: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enter Details", this.state);

    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
        alert("Detail Successfully Captured");
      })

      .catch((error) => {
        console.log(error);
        alert("Detail Not Successfully Captured");
      });
  };

  render() {
    const { fullname, username, password } = this.state;
    return (
      <div>
        <Navbar />
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Details to Submission an API</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Insert Content</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row justify-content-center" data-aos="fade-up">
              <div class="col-lg-6 form-group">
                <form
                  onSubmit={this.handleSubmit}
                  style={{ textAlign: "center" }}
                >
                  <h5> Kindly Input Your Details </h5> <br />
                  <input
                    type="text"
                    name="fullname"
                    value={fullname}
                    class="form-control textWidth"
                    onChange={this.changeHandler}
                    placeholder="Full Name"
                    required
                  />{" "}
                  <br />
                  <input
                    type="text"
                    name="username"
                    value={username}
                    class="form-control textWidth"
                    onChange={this.changeHandler}
                    placeholder="User Name"
                    required
                  />{" "}
                  <br />
                  <input
                    type="text"
                    name="password"
                    value={password}
                    class="form-control textWidth"
                    onChange={this.changeHandler}
                    placeholder="Password"
                    required
                  />{" "}
                  <br />
                  <button
                    className="btn btn-outline-success px-lg-5 mt-3"
                    onClick={this.handleSubmit}
                  >
                    Insert
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
