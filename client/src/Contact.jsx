import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: null,
      email: null,
      subject: null,
      textarea: null,
      service_enq: {
        web_audit: false,
        web_dev: false,
        sm_audit: false,
        digital_marketing: false,
      },
      location: "",
      status: "",

      errors: {
        fullname: "",
        email: "",
        subject: "",
        textarea: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const { name, value, type, checked } = event.target;

    let errors = this.state.errors;

    const validEmailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i);

    switch (name) {
      case "fullname":
        errors.fullname =
          value.length < 6
            ? "Full Name must be 6 atleast characters long!"
            : "";
        break;

      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;

      case "subject":
        errors.subject =
          value.length < 8 ? "Subject must be 8 atleast characters long!" : "";
        break;

      default:
        break;
    }
    type === "checkbox"
      ? this.setState((e) => {
          var service = e.service_enq;
          return (service[name] = checked);
        })
      : this.setState({ errors, [name]: value });
  }

  render() {
    //const {errors} = this.state;
    //var displayservice=Object.keys(this.state.service_enq).filter((x)=> this.state.service_enq[x])
    return (
      <div>
        <Navbar />
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Contact</h2>
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container">
            <div class="row justify-content-center" data-aos="fade-up">
              <div class="col-lg-12">
                <div class="info-wrap">
                  <div class="row">
                    <div class="col-lg-4 info">
                      <i class="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>
                        Charity Street
                        <br /> Abijo GRA, Ajah Lagos, Nigeria
                      </p>
                    </div>

                    <div class="col-lg-4 info mt-4 mt-lg-0">
                      <i class="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>
                        info@theinsights.com.ng
                        <br />
                        contact@theinsights.com.ng
                      </p>
                    </div>

                    <div class="col-lg-4 info mt-4 mt-lg-0">
                      <i class="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>
                        +234 8089 5548 55
                        <br />
                        +234 8089 5548 59
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5 justify-content-center" data-aos="fade-up">
              <div class="col-lg-8">
                <form class="contact-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="fullname"
                        class="form-control"
                        value={this.state.fullname}
                        onChange={this.handleChange}
                        placeholder="Your Full Name"
                        required
                      />
                      {this.state.errors.fullname.length > 0 && (
                        <span className="error">
                          {this.state.errors.fullname}
                        </span>
                      )}
                    </div>

                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Your Email"
                        required
                      />
                      {this.state.errors.email.length > 0 && (
                        <span className="error">{this.state.errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                        placeholder="Subject"
                        required
                      />
                      {this.state.errors.subject.length > 0 && (
                        <span className="error">
                          {this.state.errors.subject}
                        </span>
                      )}
                    </div>

                    <div class="col-md-6 form-group mt-3">
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        Enquiry Status
                      </label>{" "}
                      <br />
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        <input
                          type="radio"
                          name="status"
                          value="Ready"
                          checked={this.state.status === "Ready"}
                          onChange={this.handleChange}
                        />{" "}
                        Ready.
                      </label>
                      &nbsp;
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        <input
                          type="radio"
                          name="status"
                          value="Not Ready"
                          checked={this.state.status === "Not Ready"}
                          onChange={this.handleChange}
                        />{" "}
                        Not Ready.
                      </label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 form-group mt-3">
                      <textarea
                        class="form-control"
                        name="textarea"
                        value={this.state.textarea}
                        onChange={this.handleChange}
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div class="col-md-6 form-group mt-3">
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        Select the Service you wish to Enquire about{" "}
                      </label>{" "}
                      <br />
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        <input
                          type="checkbox"
                          name="web_audit"
                          onChange={this.handleChange}
                        />{" "}
                        Web Audit.
                      </label>
                      <br />
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        <input
                          type="checkbox"
                          name="web_dev"
                          onChange={this.handleChange}
                        />{" "}
                        Web Dev.
                      </label>
                      <br />
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        <input
                          type="checkbox"
                          name="sm_audit"
                          onChange={this.handleChange}
                        />{" "}
                        SM Audit.
                      </label>
                      <br />
                      <label style={{ fontSize: "12px", fontWeight: "500" }}>
                        <input
                          type="checkbox"
                          name="digital_marketing"
                          onChange={this.handleChange}
                        />{" "}
                        Digital Marketing.
                      </label>
                    </div>
                  </div>

                  <div class="form-group mt-3">
                    <select
                      class="form-control"
                      value={this.state.location}
                      name="location"
                      onChange={this.handleChange}
                    >
                      <option value="">
                        ---kindly select your Location---
                      </option>
                      <option value="Oyo State">Oyo State</option>
                      <option value="Lagos State">Lagos State</option>
                      <option value="Osun State">Osun State</option>
                      <option value="Ogun State">Ogun State</option>
                    </select>
                  </div>

                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>

              <div class="col-lg-4 info-wrap ">
                <h3 style={{ textAlign: "center" }}>Entered Information</h3>
                <label style={{ fontSize: "12px" }}>Full Name:</label>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  &nbsp; {this.state.fullname}{" "}
                </label>
                <br />
                <br />
                <label style={{ fontSize: "12px" }}>Email:</label>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  &nbsp; {this.state.email}{" "}
                </label>
                <br />
                <br />
                <label style={{ fontSize: "12px" }}>Subject:</label>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  &nbsp; {this.state.subject}{" "}
                </label>
                <br />
                <br />
                <label style={{ fontSize: "12px" }}>Enquiry Status:</label>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  &nbsp; {this.state.status}{" "}
                </label>
                <br />
                <br />
                <label style={{ fontSize: "12px" }}>Message:</label>
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  &nbsp; {this.state.textarea}{" "}
                </label>
                <br />
                <br />
                <label style={{ fontSize: "14px", fontWeight: "700" }}>
                  Service Enquiry
                </label>
                <br />
                <label style={{ fontSize: "12px", fontWeight: "500" }}>
                  {this.state.service_enq.web_audit ? "Web_audit" : ""}
                </label>
                <br />
                <label style={{ fontSize: "12px", fontWeight: "500" }}>
                  {" "}
                  {this.state.service_enq.web_dev ? "Web_dev" : ""}
                </label>
                <br />
                <label style={{ fontSize: "12px", fontWeight: "500" }}>
                  {this.state.service_enq.sm_audit ? "Sm_audit" : ""}
                </label>
                <br />
                <label style={{ fontSize: "12px", fontWeight: "500" }}>
                  {this.state.service_enq.digital_marketing
                    ? "Digital_marketing"
                    : ""}
                </label>
                <br />
                <br />
                <label style={{ fontSize: "12px" }}>Location:</label>{" "}
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  {" "}
                  &nbsp; {this.state.location}
                </label>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
