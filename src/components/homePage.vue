<template>
  <div class="main">
    <div class="content">
      <h1>Web Design & <br /><span>Development</span> <br />Course</h1>
      <p class="par" align="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
        expedita atque eveniet <br />
        quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus
        <br />
        a quae totam ipsa illum minus laudantium?
      </p>

      <button class="cn"><a href="#">JOIN US</a></button>

      <div class="form">
        <!-- Login Form -->
        <div v-if="showLoginForm">
          <h2>Login</h2>
          <form @submit.prevent="handleLoginFormSubmit">
            <input
              type="text"
              id="login-username"
              placeholder="Enter Username"
              v-model="loginUsername"
              required
            />
            <input
              type="password"
              id="login-password"
              placeholder="Enter Password"
              v-model="loginPassword"
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?
            <a
              href="#"
              @click="
                showLoginForm = false;
                showRegisterForm = true;
              "
              >Register</a
            >
          </p>
        </div>

        <!-- Register Form -->
        <div v-if="showRegisterForm">
          <h2>Register</h2>
          <form @submit.prevent="handleRegisterFormSubmit">
            <input
              type="text"
              id="register-username"
              placeholder="Enter Username"
              v-model="registerUsername"
              required
            />
            <input
              type="email"
              id="register-email"
              placeholder="Enter E-mail"
              v-model="registerEmail"
              required
            />
            <input
              type="password"
              id="register-password"
              placeholder="Enter Password"
              v-model="registerPassword"
              required
            />
            <input
              type="password"
              id="register-password-confirm"
              placeholder="Confirm Password"
              v-model="registerPasswordConfirm"
              required
            />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account?
            <a
              href="#"
              @click="
                showLoginForm = true;
                showRegisterForm = false;
              "
              >Login</a
            >
          </p>
        </div>
      </div>
    </div>
    <div >
      <!-- Footer -->
      <footer
        class="text-center text-lg-start text-white"
        style="background-color: #45526e"
      >
        <!-- Grid container -->
        <div class="container p-4 pb-0">
          <!-- Section: Links -->
          <section class="">
            <!--Grid row-->
            <div class="row">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <!-- Grid column -->

              <hr class="w-100 clearfix d-md-none" />

              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a class="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a class="text-white">MDWordPress</a>
                </p>
                <p>
                  <a class="text-white">BrandFlow</a>
                </p>
                <p>
                  <a class="text-white">Bootstrap Angular</a>
                </p>
              </div>
              <!-- Grid column -->

              <hr class="w-100 clearfix d-md-none" />

              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a class="text-white">Your Account</a>
                </p>
                <p>
                  <a class="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a class="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a class="text-white">Help</a>
                </p>
              </div>

              <!-- Grid column -->
              <hr class="w-100 clearfix d-md-none" />

              <!-- Grid column -->
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              <!-- Grid column -->
            </div>
            <!--Grid row-->
          </section>
          <!-- Section: Links -->

          <hr class="my-3" />

          <!-- Section: Copyright -->
          <section class="p-3 pt-0">
            <div class="row d-flex align-items-center">
              <!-- Grid column -->
              <div class="col-md-7 col-lg-8 text-center text-md-start">
                <!-- Copyright -->
                <div class="p-3">
                  © 2020 Copyright:
                  <a class="text-white" href="https://mdbootstrap.com/"
                    >MDBootstrap.com</a
                  >
                </div>
                <!-- Copyright -->
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <!-- Facebook -->
                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  ><i class="fab fa-facebook-f"></i
                ></a>

                <!-- Twitter -->
                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  ><i class="fab fa-twitter"></i
                ></a>

                <!-- Google -->
                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  ><i class="fab fa-google"></i
                ></a>

                <!-- Instagram -->
                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                  ><i class="fab fa-instagram"></i
                ></a>
              </div>
              <!-- Grid column -->
            </div>
          </section>
          <!-- Section: Copyright -->
        </div>
        <!-- Grid container -->
      </footer>
      <!-- Footer -->
    </div>
    <!-- End of .container -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoginForm: true,
      showRegisterForm: false,
      loginUsername: "",
      loginPassword: "",
      registerUsername: "",
      registerEmail: "",
      registerPassword: "",
      registerPasswordConfirm: "",
    };
  },
  methods: {
    handleLoginFormSubmit() {
      // Validate input
      if (!this.loginUsername || !this.loginPassword) {
        alert("Please enter a username and password");
        return;
      }

      // Submit form
      this.$router.push("/Parking_reservation_System");
    },
    handleRegisterFormSubmit() {
      // Validate input
      if (
        !this.registerUsername ||
        !this.registerEmail ||
        !this.registerPassword ||
        !this.registerPasswordConfirm
      ) {
        alert("Please fill out all the fields");
        return;
      }

      if (this.registerPassword !== this.registerPasswordConfirm) {
        alert("Passwords do not match");
        return;
      }

      // Submit form
      this.$router.push("/Parking_reservation_System");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.5) 50%
  );
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.navbar {
  width: 1200px;
  height: 75px;
  margin: auto;
}

.icon {
  width: 200px;
  float: left;
  height: 70px;
}

.logo {
  color: #ff7200;
  font-size: 35px;
  font-family: Arial;
  padding-left: 20px;
  float: left;
  padding-top: 10px;
  margin-top: 5px;
}

.menu {
  width: 400px;
  float: left;
  height: 70px;
}

ul {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li {
  list-style: none;
  margin-left: 62px;
  margin-top: 27px;
  font-size: 14px;
}

ul li a {
  text-decoration: none;
  color: #fff;
  font-family: Arial;
  font-weight: bold;
  transition: 0.4s ease-in-out;
}

ul li a:hover {
  color: #ff7200;
}

.search {
  width: 330px;
  float: left;
  margin-left: 270px;
}

.srch {
  font-family: "Times New Roman";
  width: 200px;
  height: 40px;
  background: transparent;
  border: 1px solid #ff7200;
  margin-top: 13px;
  color: #fff;
  border-right: none;
  font-size: 16px;
  float: left;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.btn {
  width: 100px;
  height: 40px;
  background: #ff7200;
  border: 2px solid #ff7200;
  margin-top: 13px;
  color: #fff;
  font-size: 15px;
  border-bottom-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.2s ease;
  cursor: pointer;
}
.btn:hover {
  color: #000;
}

.btn:focus {
  outline: none;
}

.srch:focus {
  outline: none;
}

.content {
  width: 1200px;
  height: auto;
  margin: auto;
  color: #fff;
  position: relative;
}

.content .par {
  padding-left: 20px;
  padding-bottom: 25px;
  font-family: Arial;
  letter-spacing: 1.2px;
  line-height: 30px;
  text-align: left;
}

.content h1 {
  font-family: "Times New Roman";
  font-size: 50px;
  padding-left: 20px;
  margin-top: 9%;
  letter-spacing: 2px;
}

.content .cn {
  width: 160px;
  height: 40px;
  background: #ff7200;
  border: none;
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s ease;
}

.content .cn a {
  text-decoration: none;
  color: #000;
  transition: 0.3s ease;
}

.cn:hover {
  background-color: #fff;
}

.content span {
  color: #ff7200;
  font-size: 65px;
}

::placeholder{
    color: #fff;
    font-family: Arial;
}

.form {
  width: 303px;
  height: 450px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.8) 50%
  );
  position: absolute;
  top: -20px;
  left: 870px;
  transform: translate(0%, -5%);
  border-radius: 10px;
  padding: 25px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button[type="submit"] {
    position: relative;
    left:2rem;
  width: 70%;
  padding: 10px;
  font-size: 16px;
  margin-top: 2rem;
  background-color: #ff6600;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #ff5500;
}

p {
  text-align: center;
}

a {
  color: rgb(255, 68, 0);
  cursor: pointer;
}

.form h2 {
  width: 220px;
  font-family: sans-serif;
  text-align: center;
  color: #ff7200;
  font-size: 22px;
  background-color: #fff;
  border-radius: 10px;
  margin: 2px;
  padding: 8px;
}

.form input {
  width: 240px;
  height: 35px;
  background: transparent;
  border-bottom: 1px solid #ff7200;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #fff;
  font-size: 15px;
  letter-spacing: 1px;
  margin-top: 35px;
  font-family: sans-serif;
}

.form input:focus {
  outline: none;
}

::placeholder {
  color: #fff;
  font-family: Arial;
}

.btnn {
  width: 240px;
  height: 40px;
  background: #ff7200;
  border: none;
  margin-top: 30px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  transition: 0.4s ease;
}
.btnn:hover {
  background: #fff;
  color: #ff7200;
}
.btnn a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
.form .link {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  padding-top: 20px;
  text-align: center;
}
.form .link a {
  text-decoration: none;
  color: #ff7200;
}
.liw {
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: center;
}
.icons a {
  text-decoration: none;
  color: #fff;
}
.icons ion-icon {
  color: #fff;
  font-size: 30px;
  padding-left: 14px;
  padding-top: 5px;
  transition: 0.3s ease;
}
.icons ion-icon:hover {
  color: #ff7200;
}
</style>
