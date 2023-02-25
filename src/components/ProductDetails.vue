<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- ----------single product section--------------- -->

    <div class="small-container single-product">
      <div class="row">
        <div class="col-2">
          <img src="../assets/gallery-1.jpg" width="100%" id="small-img" />
          <div class="small-image-row">
            <div class="small-image-col">
              <img src="../assets/gallery-1.jpg" class="small-img" alt="" />
            </div>
            <div class="small-image-col">
              <img src="../assets/gallery-2.jpg" class="small-img" alt="" />
            </div>
            <div class="small-image-col">
              <img src="../assets/gallery-3.jpg" class="small-img" alt="" />
            </div>
            <div class="small-image-col">
              <img src="../assets/gallery-4.jpg" class="small-img" alt="" />
            </div>
          </div>
        </div>
        <div class="col-2">
          <p>T-shirt</p>
          <h1>Red T-shirt by Adidas</h1>
          <h4>$50.00</h4>
          <select>
            <option>XXL</option>
            <option>XL</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
          <input type="number" value="1" />
          <a @click="addToCart()" class="btn">Buy Now </a>
          <h3>Product Details <i class="fa fa-indent"></i></h3>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            harum atque ratione voluptatibus, reiciendis eos, sed, iure sint
            totam facere quasi quisquam earum. Amet, vitae exercitationem. Non
            eaque officiis eum.
          </p>
        </div>
      </div>
    </div>

    <!-- ------related products--------- -->

    <div class="small-container">
      <div class="row row-2">
        <h2>Related Products</h2>
        <p>View More</p>
      </div>
    </div>

    <div class="small-container">
      <div class="row row-2">
        <!-- <h2>All Products</h2> -->

        <div class="row">
          <div class="col-4">
            <img src="../assets/product-9.jpg" alt="" />
            <h2>Red Printed T-Shirt</h2>
            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="../assets/product-10.jpg" alt="" />
            <h2>Black Shoes</h2>
            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="../assets/product-11.jpg" alt="" />
            <h2>Grey Shoes</h2>
            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div class="col-4">
            <img src="../assets/product-12.jpg" alt="" />
            <h2>Track Pant</h2>
            <div class="ratings">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>
    </div>

    <!-- --------Footer Section-----------  -->

    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col-1">
            <h3>Download Our App</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus magnam dolore quam animi doloreone.
            </p>
            <div class="app-logo">
              <img src="../assets/play-store.png" alt="" />
              <img src="../assets/app-store.png" alt="" />
            </div>
          </div>

          <div class="footer-col-2">
            <img src="../assets/logo-white.png" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus magnam dolore quam animi dolores possimus mollitia
              consectetur iste aliquid. Ratione.
            </p>
          </div>

          <div class="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupens</li>
              <li>Blog</li>
              <li>Join Affiliate</li>
              <li>privacy Policy</li>
            </ul>
          </div>
          <div class="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="copyright">
          <p>Copyright &copy; Asics Store</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.navbar {
  /* border: 2px solid rebeccapurple; */
  display: flex;
  align-items: center;
  /* height: 12vh; */
}

nav {
  flex: 1;
  text-align: right;
  /* border:2px solid; */
}

nav ul {
  display: inline-block;
}

nav ul li {
  list-style: none;
  display: inline-block;
  /* border: 2px solid red; */
  margin-right: 30px;
}

nav ul li a {
  text-decoration: none;
  color: rgb(19, 19, 19);
  font-weight: 700;
  display: inline-block;
}
nav ul li a::after {
  content: "";
  width: 0px;
  height: 2px;
  background: black;
  transition: 0.5s;
  display: block;
}
nav ul li a:hover::after {
  width: 100%;
  color: black;
}

p {
  color: #555;
}

.container {
  max-width: 1300px;
  padding-left: 25px;
  padding-right: 25px;
  margin: auto;
  /* border:2px solid fuchsia;  */
}

.row {
  /* border:2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 25px;
}

.col-2 {
  /* border:2px solid black; */
  flex-basis: 50%;
  min-width: 300px;
}

.col-2 img {
  max-width: 100%;
  padding: 50px 0px;
  transition: 0.7s;
}

.col-2 img:hover {
  scale: 1.2;
}

.logo img {
  position: relative;
  top: 8px;
}

.col-2 h1 {
  font-size: 50px;
  margin: 25px 0px;
  line-height: 60px;
  margin: 25px 0px;
  transition: 0.7s;
}

.col-2 h1:hover {
  scale: 1.1;
}

.btn {
  display: inline-block;
  padding: 8px 30px;
  margin: 30px 0px;
  border-radius: 30px;
  color: white;
  background: #ff523b;
  text-decoration: none;
  transition: all 0.5s;
}

.btn:hover {
  background: linear-gradient(146deg, #1e4e82 20%, #00c7e7 80%);
  scale: 1.1;
  box-shadow: 5px 5px 10px black;
}

header {
  /* background:linear-gradient(#fff, #ffd6d6); */
  /* background: linear-gradient(45deg, #00c6a7 80%, #1e4d92 20%); */
  background: linear-gradient(146deg, #00c7e7 80%, #1e4e82 20%);
}

/* __________________category section______________ */

.categories {
  /* border: 2px solid red; */
  margin: 70px;
  /* border: 2px solid red; */
}
.small-container {
  /* border: 2px solid green; */
  max-width: 1080px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
}

.col-3 {
  /* border: 2px solid black; */
  flex-basis: 30%;
  min-width: 250px;
  margin-bottom: 30px;
}

.col-3 img {
  width: 100%;
}

/* ______Featured Products Section __________________  */

.col-4 {
  /* border: 2px solid black; */
  flex-basis: 25%;

  min-width: 200px;
  padding: 10px;
  margin-bottom: 50px;
  transition: transform 0.5s;
}

.col-4 img {
  width: 100%;
}

.title {
  margin: 0px auto 80px;
  text-align: center;
  position: relative;
  line-height: 60px;
  color: #555;
  /* border: 2px solid black; */
}

.title::after {
  content: "";
  background: #ff523b;
  width: 80px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0%;
  left: 47%;
  transform: translateY(680%);
}

h4 {
  color: #555;
  font-weight: normal;
}

.col-4 p {
  font-size: 14px;
}

.ratings .fa {
  color: #ff523b;
}

.col-4:hover {
  transform: translateY(-5px);
}

.offer {
  /* background: linear-gradient(41deg, #00C7E7 78%, #1E4E82 20%); */
  /* background: linear-gradient(141deg, #ffe1f7 78%, #ffffff 20%); */
  background: linear-gradient(#ffe1f7, #e5d6da);
  margin-top: 80px;
  padding: 30px 0px;
}

.col-2 .offer-img {
  padding: 50px;
}

.exclusive-para {
  color: #555;
  font-size: 13px;
}

/* ------testimonial Section--------------------------------------------------- */

.testimonial {
  padding-top: 100px;
  margin-bottom: 100px;
}

.testimonial .col-3 {
  text-align: center;
  padding: 40px 20px;
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.5s;
}

.testimonial .col-3 img {
  width: 60px;
  border-radius: 50%;
  margin-top: 20px;
}

.testimonial .col-3:hover {
  transform: translateY(-10px);
}

.fa.fa-quote-left {
  font-size: 30px;
  color: #ff523b;
}

.testimonial .col-3 p {
  color: #777;
  font-size: 14px;
  margin: 12px 0px;
}

.testimonial .col-3 h3 {
  font-weight: 600;
  font-size: 16px;
  color: #555;
}

/* -----------------------------Brand Section--------------------------------------------------- */

.brand {
  margin: 0px auto 100px;

  /* border: 2px solid; */
}

.col-5 {
  width: 160px;
}

.col-5 img {
  width: 100%;
  cursor: pointer;
  filter: grayscale(100%);
}

.col-5 img:hover {
  filter: grayscale(0%);
}

/* -Footer Swection ----- */

.footer {
  background-color: #000;
  color: #8a8a8a;
  padding: 18px 0px;
  font-size: 14px;
  margin-bottom: 0px;
  padding-left: 0px;
}

.footer p {
  color: #8a8a8a;
}
.footer h3 {
  color: #fff;
  margin-bottom: 20px;
}

.footer-col-1,
.footer-col-2,
.footer-col-3,
.footer-col-4 {
  min-width: 250px;
  margin-bottom: 20px;
  /* border:2px solid fuchsia;  */
  padding: 0px 15px;
}

.footer-col-1 {
  flex-basis: 30%;
}

.footer-col-2 {
  flex: 1;
  /* text-align: center; */
}

.footer-col-2 img {
  width: 180px;
  margin-bottom: 20px;
}

.footer-col-3,
.footer-col-4 {
  flex-basis: 12%;
}

.footer-col-3 ul,
.footer-col-4 ul {
  list-style-type: none;
}

.app-logo {
  margin-top: 20px;
}

.app-logo img {
  width: 120px;
  margin: 10px;
}

hr {
  border: none;
  background: #b5b5b5;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 18px;
}

.copyright p {
  text-align: center;
}

.menu-icon {
  width: 28px;
  margin-left: 20px;
  display: none;
}

.row-2 {
  justify-content: space-between;
  margin: 100px auto 50px;
}

select {
  padding: 5px;
  border: 1px solid #ff523b;
}

select:focus {
  outline: none;
}

.page-btn {
  margin: 0 auto 80px;
}

.page-btn span {
  display: inline-block;
  border: 2px solid #ff523b;
  margin-left: 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
}
.page-btn span:hover {
  background: #ff523b;
  color: white;
}

/* --------------SIngle Product Details-------------------- */

.single-product {
  margin-top: 80px;
}
.single-product img {
  padding: 0px;
}

.single-product .col-2 {
  padding: 20px;
  /* border: 2px solid red; */
}
.single-product h4 {
  font-weight: bold;
  font-size: 22px;
  margin: 20px 0px;
}

.single-product select {
  display: block;
  padding: 10px;
  margin-top: 20px;
}
.single-product input {
  width: 50px;
  height: 40px;
  padding-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  border: 1px solid #ff523b;
}

input:focus {
  outline: none;
}

.single-product i {
  color: #ff523b;
  margin-left: 10px;
}

.small-image-row {
  display: flex;
  justify-content: space-between;
}

.small-image-col {
  flex-basis: 24%;
  cursor: pointer;
}

/* ---media queries for menu-icon------------ */

@media only screen and (max-width: 800px) {
  nav ul {
    position: absolute;
    top: 70px;
    left: 0px;
    background: #333;
    width: 100%;
    overflow: hidden;
  }

  nav ul li {
    display: block;
    margin: 10px 0px;
    margin-right: 50px;
  }

  nav ul li a {
    color: #fff;
  }

  .menu-icon {
    display: block;
    cursor: pointer;
  }
}

/* ---------cart page---------- */

.cart-page {
  margin: 80px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.cart-info {
  display: flex;
  flex-wrap: wrap;
}

th {
  text-align: left;
  font-weight: normal;
  color: #fff;
  background: #ff523b;
  padding: 5px;
}

td {
  padding: 10px 5px;
}

td input {
  width: 40px;
  height: 30px;
  padding: 5px;
}

td a {
  color: #ff523b;
}

td img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.total-price {
  display: flex;
  justify-content: flex-end;
}

.total-price table {
  border-top: 3px solid #ff523b;
  width: 100%;
  max-width: 350px;
}

td:last-child {
  text-align: right;
}
th:last-child {
  text-align: right;
}

.account-page {
  background: linear-gradient(146deg, #00c7e7 80%, #1e4e82 20%);
}

.account-page .col-2 {
  /* border: 2px solid red; */
}
.form-container {
  height: 340px;
  width: 300px;
  text-align: center;
  justify-content: center;
  background: #fff;
  padding: 20px;
  position: relative;
  margin: auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
}

.form-container span {
  display: inline-block;
  color: #555;
  padding: 0 10px;
  width: 100px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  /* border: 2px solid orange; */
}

.form-btn {
  display: inline-block;
}

.form-container form {
  max-width: 300px;
  padding: 0 20px;
  position: absolute;
  top: 80px;
  /* border: 2px solid orange; */
}
.form-container form input {
  height: 30px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-container form .btn {
  width: 80%;
  cursor: pointer;
  border: none;
  margin: 10px;
}

.form-container form .btn:focus {
  outline: none;
}

.form-container form a {
  color: rgb(157, 151, 151);
  font-size: 0.9rem;
  float: left;
}

/* ---media queries for less than width 600 -----  */

@media only screen and (max-width: 600px) {
  .row {
    text-align: center;
  }

  .col-2,
  .col-3,
  .col-4 {
    flex-basis: 100%;
  }

  .single-product .row {
    text-align: left;
  }
  .single-product .col-2 {
    padding: 20px 0;
  }

  .single-product h1 {
    font-size: 26px;
    line-height: 32px;
  }
}
</style>