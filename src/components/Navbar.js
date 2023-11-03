import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            StyledComponent
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ scrollHeight: "100px" }}
            >
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to={{
                    pathname: "home",
                  }}
                  state={{ category: "home" }}
                >
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filters
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      class="dropdown-item"
                      to={{
                        pathname: "home",
                      }}
                      state={{
                        category: "smartphones",
                      }}
                    >
                      smartphones
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      to={{
                        pathname: "home",
                      }}
                      state={{
                        category: "laptops",
                      }}
                    >
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      to={{
                        pathname: "home",
                      }}
                      state={{
                        category: "skincare",
                      }}
                    >
                      SkinCare
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                disabled={true}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
