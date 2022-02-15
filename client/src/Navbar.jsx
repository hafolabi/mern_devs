import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";

const Header = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  //console.log(user)
  const history = useHistory();

  const Logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/">
              <span>the</span>Insights
            </Link>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0 ">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li className="dropdown ">
                <NavLink to="/about">
                  <span>About</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/testimonial">Testimonials</Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/cinema">Cinema</NavLink>
              </li>
              <li className="dropdown ">
                <NavLink to="/api">Api Call</NavLink>
                <ul>
                  <li>
                    <Link to="/addtoapi">Insert to API.</Link>
                  </li>
                  <li>
                    <Link to="/api">Api Call1</Link>
                  </li>
                  <li>
                    <Link to="/apii">Api Call2</Link>
                  </li>
                  <li>
                    <Link to="/addtoarray">Add def. Cont.</Link>
                  </li>
                  <li>
                    <Link to="/addtoarr">Input Cont.</Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <NavLink to="/contact">Contact</NavLink>
                <ul>
                  <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              {localStorage.getItem("user-info") ? (
                <>
                  <li>
                    <NavLink
                      to="#"
                      style={{
                        textTransform: "capitalize",
                        letterSpacing: "2px",
                        fontWeight: "500",
                        textShadow: "0.4px 0.7px 0.5px #a7a1a1",
                      }}
                    >
                      {" "}
                      Profile{" "}
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.firstName}>
                <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Update Info</NavDropdown.Item>
                <NavDropdown.Item>Talk to Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
