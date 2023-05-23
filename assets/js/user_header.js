const before_login = `
        <div class="wrapper">
          <h1 class="logo">WELLNESS<span>DIET</span></h1>
          <nav class="main-nav">
            <ul>
              <li>
                <a href="./index.html">Home </a>
              </li>
              <li>
                <a href="./pages/about2.html">About</a>
              </li>

              <li>
                <a href="./pages/active.html">Create plans</a>
              </li>
              
              <li>
                <a href="./pages/contact2.html">Contact Us</a>
              </li>
              <li class="nav_dropdown">
                <a class="drop_btn" href="javascript:void(0)"><div class="nav_dropbtn">Login</div></a>
                <div class="dropdown-content">
                  <a href="./pages/login2.html">Dietitian</a>
                  <a href="./pages/patient_login.html">Patient</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>`;
const after_login = `
        <div class="wrapper">
          <h1 class="logo">WELLNESS<span>DIET</span></h1>
          <nav class="main-nav">
            <ul>
              <li>
                <a href="./index.html">Home </a>
              </li>
              <li>
                <a href="./pages/about2.html">About</a>
              </li>
              <li>
                <a href="./pages/diet2.html">Consultation</a>
              </li>
              <li>
                <a href="./pages/active.html">Create plans</a>
              </li>
              <li>
              <a href="./pages/patient_profile.html">Profile</a>
            </li>
              <li>
                <a href="./pages/contact2.html">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>`;

// function home_header() {
const user_name = JSON.parse(localStorage.getItem("patient_login"));
const logheader = document.getElementById("user_header");

if (user_name == null) {
  logheader.innerHTML = before_login;
} else if (user_name != null) {
  logheader.innerHTML = after_login;
}

document.addEventListener("DOMContentLoaded", () => {
  home_header();
});
