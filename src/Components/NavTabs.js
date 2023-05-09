function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa-solid fa-user"></i>Zhonghui Zhang
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link - ??
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
            <a 
            href="#contact" 
            onClick={()=> handlePageChange("Contact")}
            className ={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            >
              Contact
            </a>
            {/* <div class="nav-item dropdown"> */}
            {/* <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a> */}
            {/* <div class="dropdown-menu fade-down m-0">
                <a href="team.html" class="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" class="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" class="dropdown-item">
                  404 Page
                </a>
              </div> */}
            {/* </div> */}
          </div>
          {/* <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
            Join Now<i class="fa fa-arrow-right ms-3"></i>
          </a> */}
        </div>
      </nav>
    </>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange("About")}
    //       className={currentPage === "About" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#porfolio"
    //       onClick={() => handlePageChange("Profolio")}
    //       className={
    //         currentPage === "Profolio" ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Porfolio
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#resume"
    //       onClick={() => handlePageChange("Resume")}
    //                 // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link - ??

    //       className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
    //     >
    //       Resume
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
