import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Addtoarr extends React.Component {
  constructor() {
    super();
    this.state = {
      studFile: [{ fullname: "", age: "", occupation: "" }],
      disabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleBoth(index, event) {
    this.handleChange(index, event);
    this.enableButton(event);
  }
  handleChange(index, event) {
    //console.log(index, event.target.name)
    const values = [...this.state.studFile];
    const { name, value } = event.target;
    values[index][name] = value;
    this.setState({ studFile: values });
  }

  enableButton = (event) => {
    if (event.target.value.length >= 6) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("studFile", this.state.studFile);
  };

  addField() {
    this.setState({
      studFile: [
        ...this.state.studFile,
        { fullname: "", age: "", location: "", occupation: "" },
      ],
    });
  }

  removefield(index) {
    let field = (index = 1);

    const newstudFile = [...this.state.studFile];
    if (field === 1) {
      newstudFile.splice(index, 1);
      this.setState({ studFile: newstudFile });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Adding Details for Submission</h2>
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
              <div class="col-lg-10 ">
                <form
                  onSubmit={this.handleSubmit}
                  style={{ textAlign: "center" }}
                >
                  <h5> Kindly Input Your Details </h5> <br />
                  {this.state.studFile.map((stud, index) => (
                    <div key={index} className="mt-2">
                      <input
                        type="text"
                        name="fullname"
                        value={stud.fullname}
                        onChange={(event) => {
                          this.handleBoth(index, event);
                        }}
                        placeholder="Full Name"
                        required
                      />
                      &nbsp; &nbsp;
                      <input
                        type="text"
                        name="occupation"
                        value={stud.occupation}
                        onChange={(event) => this.handleBoth(index, event)}
                        placeholder="Occupation"
                        required
                      />
                      &nbsp; &nbsp;
                      <input
                        type="number"
                        name="age"
                        value={stud.age}
                        onChange={(event) => this.handleBoth(index, event)}
                        placeholder="Age"
                        required
                      />
                      &nbsp; &nbsp;
                      <button
                        onClick={(e) => this.addField(e)}
                        className="btn btn-outline-danger"
                      >
                        More Fields
                      </button>
                      &nbsp; &nbsp;
                      <button
                        onClick={(e) => this.removefield(e)}
                        className="btn btn-outline-danger"
                      >
                        Remove Fields
                      </button>
                    </div>
                  ))}
                  <br />
                  <button
                    disabled={this.state.disabled}
                    className="btn btn-outline-success"
                    onClick={this.handleSubmit}
                  >
                    send
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
