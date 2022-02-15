import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import "./App.css";

const Cinema = () => {
  const initalValues = {
    movieName: "",
    movieReview: "",
    time: "",
    date: "",
    location: "",
  };
  const [formValues, setFormValues] = useState(initalValues);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmt, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [movieList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newLocation, setNewLocation] = useState("");
 
  useEffect(() => {
    axios.get("http://localhost:3001/cinema").then((res) => {
      setMovieList(res.data);
      //console.log(res.data);
    });
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(e);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.movieName) {
      errors.movieName = "Movie Name is Required";
    }

    if (!values.movieReview) {
      errors.movieReview = "Movie Review is Required ";
    }

    if (!values.time) {
      errors.time = "Time of Movie";
    }

    if (!values.date) {
      errors.date = "Date of Movie";
    }
    if (!values.location) {
      errors.location = "Cinema Location";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (
      formValues.movieName.length > 0 &&
      formValues.movieReview.length > 0 &&
      formValues.time.length > 0 &&
      formValues.date.length > 0 &&
      formValues.location.length > 0
    ) {
      axios
        .post("http://localhost:3001/cinema", {
          regMovieName: formValues.movieName,
          regMovieReview: formValues.movieReview,
          regTime: formValues.time,
          regDate: formValues.date,
          regLocation: formValues.location,
        })
        .then((response) => {
          if (response.data.message) {
            setSubmitStatus(response.data.message);
          } else {
            setIsSubmit(true);
            if (isSubmt === true) {
              alert("successfully Received");
            }
          }
        })
        .catch((err) => {
          setIsSubmit(false);
          alert(err);
        });

      setMovieList([
        ...movieList,
        {
          regMovieName: formValues.movieName,
          regMovieReview: formValues.movieReview,
          regTime: formValues.time,
          regDate: formValues.date,
          regLocation: formValues.location,
        },
      ]);
    }
  };

  const deleteMovie = (movie) => {
    axios.delete(`http://localhost:3001/delete/${movie}`).then(() => {
      alert("successfull deleted");
    });
  };

  // const update = (movie) => {
    
  //   axios
  //     .put("http://localhost:3001/api/update/", {
  //       regMovieName: movie,
  //       regMovieReview: newReview,
  //       regTime: newTime,
  //       regDate: newDate,
  //       regLocation: newLocation,
  //     })
  //     .then(() => {
  //       alert("Info Succeefully Updated");
  //     });

  //   setNewReview("");
  // };

  const update1 = (movie) => {
    axios
      .put("http://localhost:3001/api/update1/", {
        regMovieName: movie,
        regMovieReview: newReview,
      })
      .then(() => {
        alert("Info Succeefully Updated");
      });
    setNewReview("");
  };

  const update2 = (movie) => {
    axios
      .put("http://localhost:3001/api/update2/", {
        regMovieName: movie,
        regTime: newTime,
      })
      .then(() => {
        alert("Info Succeefully Updated");
      });
    setNewTime("");
  };

  const update3 = (movie) => {
    axios
      .put("http://localhost:3001/api/update3/", {
        regMovieName: movie,
        regDate: newDate,
      })
      .then(() => {
        alert("Info Succeefully Updated");
      });
    setNewDate("");
  };

  const update4 = (movie) => {
    axios
      .put("http://localhost:3001/api/update4/", {
        regMovieName: movie,
        regLocation: newLocation,
      })
      .then(() => {
        alert("Info Succeefully Updated");
      });
    setNewLocation("");
  };

  return (
    <div>
      <Navbar />
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Cinema Page</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Cinema Page</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row justify-content-center apiCall" data-aos="fade-up">
            <div class="col-lg-10 info-wrap">
              <h1
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "550",
                }}
              >
                you are Welcome to our Cinema page
              </h1>
            </div>
          </div>

          <div class="row justify-content-center" data-aos="fade-up">
            <div class="col-lg-5 info-wrap mt-5 userDetails">
              <span style={{ textAlign: "center" }}>
                Insert inCinema Movies
              </span>

              <form>
                <br />
                <input
                  type="text"
                  name="movieName"
                  value={formValues.movieName}
                  placeholder="Movie-Name"
                  class="form-control textWidth mt-2"
                  onChange={handleChange}
                  required
                />

                <span style={{ fontSize: "10px", color: "red" }}>
                  {formErrors.movieName} &nbsp; &nbsp;{submitStatus}
                </span>

                <br />
                <input
                  type="text"
                  name="movieReview"
                  value={formValues.movieReview}
                  placeholder="Movie-Review"
                  class="form-control textWidth mt-2"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {formErrors.movieReview}
                </span>
                <br />
                <input
                  type="text"
                  name="time"
                  value={formValues.time}
                  placeholder="Time of Movie"
                  class="form-control textWidth mt-2"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {formErrors.time}
                </span>
                <br />
                <input
                  type="text"
                  name="date"
                  value={formValues.date}
                  placeholder="Date of Movie"
                  class="form-control textWidth mt-2"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {formErrors.date}
                </span>
                <br />
                <input
                  type="text"
                  name="location"
                  value={formValues.location}
                  placeholder="Cinema Location"
                  class="form-control textWidth mt-2"
                  onChange={handleChange}
                  required
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {formErrors.location}
                </span>
                <br />
                <br />
                <button
                  onClick={handleSubmit}
                  type="submit"
                  class="btn btn-outline-success px-lg-5"
                >
                  Submit
                </button>
              </form>
            </div>

            <div class="col-lg-7 info-wrap mt-5">
              <h4 style={{ textAlign: "center" }}>Inserted Movies</h4>
              <br />

              {movieList.map((single) => (
                <div className="row" key={single.id}>
                  <div className="col-lg-7">
                    <h5 style={{ textTransform: "uppercase", fontWeight: "700" }}>
                      {single.movieName}
                    </h5>

                    <h6>
                      <b>Review:</b> &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          height: "30px",
                          border: "1px solid #b8b6b6",
                          borderRadius: "5px",
                        }}
                        defaultValue={single.movieReview}
                        required
                        onChange={(e) => {
                          setNewReview(e.target.value);
                        }}
                      /> <button style={{ fontSize: "10px", height:'20px', border:'none', marginLeft:'12px' }} onClick={() => update1(single.movieName)}>update</button>
                    </h6>

                    <h6>
                      <b>Time:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          width: "50px",
                          height: "30px",
                          border: "1px solid #b8b6b6",
                          borderRadius: "5px",
                        }}
                        defaultValue={single.time}
                        onChange={(e) => {
                          setNewTime(e.target.value);
                        }}
                      /> <button style={{ fontSize: "10px", height:'20px', border:'none', marginLeft:'150px' }} onClick={() => update2(single.movieName)}>update</button>
                    </h6>

                    <h6>
                      <b>Date:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          width: "100px",
                          height: "30px",
                          border: "1px solid #b8b6b6",
                          borderRadius: "5px",
                        }}
                        defaultValue={single.date}
                        onChange={(e) => {
                          setNewDate(e.target.value);
                        }}
                      /> <button style={{ fontSize: "10px", height:'20px', border:'none', marginLeft:'99px' }} onClick={() => update3(single.movieName)}>update</button>
                    </h6>

                    <h6>
                      <b>Address:</b> &nbsp;
                      <input
                        type="text"
                        style={{
                          height: "30px",
                          border: "1px solid #b8b6b6",
                          borderRadius: "5px",
                        }}
                        defaultValue={single.location}
                        onChange={(e) => {
                           setNewLocation(e.target.value)
                        }}
                      /> <button style={{ fontSize: "10px", height:'20px', border:'none', marginLeft:'12px'  }} onClick={() => update4(single.movieName)}>update</button>
                    </h6>
                    <br />
                  </div>
                  
                  <div className="col-lg-5 mt-5 mb-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        deleteMovie(single.movieName);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cinema;
