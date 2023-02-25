<template>
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
  <div class="container2">
    <span class="big-circle"></span>
    <img src="../assets/shape.png" class="square" alt="" />
    <div class="form">
      <div class="contact-info">
        <h3 class="title">Let's get in touch</h3>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div class="info">
          <div class="information">
            <img src="../assets/location.png" class="icon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div class="information">
            <img src="../assets/email.png" class="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div class="information">
            <img src="../assets/phone.png" class="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div class="social-media">
          <p>Connect with us :</p>
          <div class="social-icons">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/login?lang=en" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/" target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form @submit.prevent="onCreatePost()">
          <h3 class="title">Contact us</h3>
          <div class="input-container">
            <input type="text" v-model="name" class="input" placeholder="Username"/>
         
            
          </div>
          <div class="input-container">
            <input type="email" v-model="email" class="input" placeholder="E-mail" />
            
          </div>
          <div class="input-container">
            <input type="tel" v-model="phone" class="input" placeholder="Phone Number" />
            
          </div>
          <div class="input-container textarea">
            <textarea v-model="message" class="input" placeholder="Message"></textarea>
            
          </div>
          <button type="submit" class="btn">Send</button>
        </form>
      </div>
    </div>

    
  </div>
  <!-- --------Footer Section-----------  -->

    <div class="footer">
        <div class="container1">
            <div class="row1">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam dolore quam animi
                        doloreone.</p>
                    <div class="app-logo">
                        <img src="../assets/play-store.png" alt="">
                        <img src="../assets/app-store.png" alt="">
                    </div>
                </div>

                <div class="footer-col-2">
                    <img src="../assets/logo-white.png" alt="">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam dolore quam animi
                        dolores possimus mollitia consectetur iste aliquid. Ratione.</p>
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
            <hr>
            <div class="copyright">
                <p>Copyright &copy; My Ecommerce</p>
            </div>
        </div>
    </div>

</div>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    onCreatePost() {
            axios.post(
                `https://ecommerce-e5c47-default-rtdb.asia-southeast1.firebasedatabase.app/user/contact.json`,
                {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message,
                },
            ).then((response) => {
                console.log(response);
                this.$router.go(0)
            });
        },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form input ::placeholder{
    color: #fafafa;
}

body,
input,
textarea {
  font-family: "Poppins", sans-serif;
}

.container2 {
  position: relative;
  top: 1rem;
  width: 100%;
  max-width: 1520px;
  min-height: 100vh;
  padding: 2rem;
  background-color: #fafafa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 820px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  background-color: #fe6753;
  position: relative;
}

.circle {
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #fa4229);
  position: absolute;
}

.circle.one {
  width: 130px;
  height: 130px;
  top: 130px;
  right: -40px;
}

.circle.two {
  width: 80px;
  height: 80px;
  top: 10px;
  right: 30px;
}

.contact-form:before {
  content: "";
  position: absolute;
  width: 26px;
  height: 26px;
  background-color: #fe6753;
  transform: rotate(45deg);
  top: 50px;
  left: -13px;
}

form {
  padding: 2.3rem 2.2rem;
  z-index: 10;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.btn {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #fe6753;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
}

.btn:hover {
  background-color: transparent;
  color: #fff;
}

.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #ff523b;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: #ff523b;
}

.text {
  color: #333;
  margin: 1.5rem 0 2rem 0;
}

.information {
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

.icon {
  width: 28px;
  margin-right: 0.7rem;
}

.social-media {
  padding: 2rem 0 0 0;
}

.social-media p {
  color: #333;
}

.social-icons {
  display: flex;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background: linear-gradient(45deg, #fe6753, #ff523b);
  color: #fff;
  text-align: center;
  line-height: 35px;
  margin-right: 0.5rem;
  transition: 0.3s;
}

.social-icons a:hover {
  transform: scale(1.05);
}

.contact-info:before {
  content: "";
  position: absolute;
  width: 110px;
  height: 100px;
  border: 22px solid #fe6753;
  border-radius: 50%;
  bottom: -77px;
  right: 50px;
  opacity: 0.3;
}

.big-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #fe6753, #ff523b);
  bottom: 50%;
  right: 50%;
  transform: translate(-40%, 38%);
}

.big-circle:after {
  content: "";
  position: absolute;
  width: 360px;
  height: 360px;
  background-color: #fafafa;
  border-radius: 50%;
  top: calc(50% - 180px);
  left: calc(50% - 180px);
}

.square {
  position: absolute;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(181%, 11%);
  opacity: 0.2;
}

@media (max-width: 850px) {
  .form {
    grid-template-columns: 1fr;
  }

  .contact-info:before {
    bottom: initial;
    top: -75px;
    right: 65px;
    transform: scale(0.95);
  }

  .contact-form:before {
    top: -13px;
    left: initial;
    right: 70px;
  }

  .square {
    transform: translate(140%, 43%);
    height: 350px;
  }

  .big-circle {
    bottom: 75%;
    transform: scale(0.9) translate(-40%, 30%);
    right: 50%;
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }

  .social-media {
    padding: 1.5rem 0 0 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .contact-info:before {
    display: none;
  }

  .square,
  .big-circle {
    display: none;
  }

  form,
  .contact-info {
    padding: 1.7rem 1.6rem;
  }

  .text,
  .information,
  .social-media p {
    font-size: 0.8rem;
  }

  .title {
    font-size: 1.15rem;
  }

  .social-icons a {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .icon {
    width: 23px;
  }

  .input {
    padding: 0.45rem 1.2rem;
  }

  .btn {
    padding: 0.45rem 1.2rem;
  }
}

/* ------------------------------------------------------ */
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.navbar{
    /* border: 2px solid rebeccapurple; */
    display: flex;
    align-items: center;
    /* height: 12vh; */
}

nav{
    flex: 1;
    text-align: right;
    /* border:2px solid; */
    
}

nav ul{
    
    display: inline-block;
}

nav ul li{
    list-style: none;
    display: inline-block;
    /* border: 2px solid red; */
    margin-right: 30px;
}

nav ul li a{
    text-decoration: none;
    color: rgb(19, 19, 19);
    font-weight: 700;
    display: inline-block;
}
nav ul li a::after{
    content: "";
    width: 0px;
    height: 2px;
    background: black;
    transition: 0.5s;
    display: block;
}
nav ul li a:hover::after{
    width: 100%;
    color: black;
}

p{
    color: #555;
}

.container{
    max-width: 1300px;
    padding-left: 25px;
    padding-right: 25px;
    margin: auto;
      /* border:2px solid fuchsia;  */
}

.row{
    /* border:2px solid red; */
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: -44px;
}
.row1{
    /* border:2px solid red; */
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.col-2{
    /* border:2px solid black; */
    flex-basis: 50%;
    min-width: 300px;
}

.col-2 img{
    margin-top: 10vh;
    max-width: 100%;
    padding:50px 0px;
    transition: 0.7s;
    

}

.col-2 img:hover{
    scale: 1.15;
}

.logo img{
    position: relative;
    top: 8px;
}

.col-2 h1{
    font-size: 50px;
    margin: 25px 0px;
    line-height: 60px;
    margin: 25px 0px;
    transition: 0.7s;
}

.col-2 h1:hover{
    scale: 1.1;

}

.btn{
    display: inline-block;
    padding:8px 30px;
    margin:30px 0px;
    border-radius: 30px;
    color:white;
    background:#ff523b;
    text-decoration: none;
    transition: all 0.5s ;
}

.btn:hover{
    background: linear-gradient(146deg,#1E4E82 20%, #00C7E7 80% );
    scale: 1.1;
    box-shadow: 5px 5px 10px black ;
}

header{
    /* background:linear-gradient(#fff, #ffd6d6); */
    /* background: linear-gradient(45deg, #00c6a7 80%, #1e4d92 20%); */
    background: linear-gradient(146deg, #00C7E7 80%, #1E4E82 20%);
    
}

/* __________________category section______________ */

.categories{
    /* border: 2px solid red; */
    margin: 70px;
    /* border: 2px solid red; */

}
.small-container{
    /* border: 2px solid green; */
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

 .col-3{
    /* border: 2px solid black; */
    flex-basis: 30%;
    min-width: 250px;
    margin-bottom: 30px;
}

.col-3 img{
    width: 100%;

}

/* ______Featured Products Section __________________  */

.col-4{
    /* border: 2px solid black; */
    flex-basis: 25%;
   
    min-width: 200px;
    padding: 10px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}

.col-4 img{
    width: 100%;
}

.title{
    margin: 0px auto 80px;
    text-align: center;
    position: relative;
    line-height: 60px;
    color: #555;
    /* border: 2px solid black; */
}

.title::after{
   
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

h4{
    color: #555;
    font-weight: normal;
}

.col-4 p{
    font-size: 14px;
}

.ratings .fa{
    color:#ff523b ;
}

.col-4:hover{
    transform: translateY(-5px);
}

.offer{
    /* background: linear-gradient(41deg, #00C7E7 78%, #1E4E82 20%); */
    /* background: linear-gradient(141deg, #ffe1f7 78%, #ffffff 20%); */
    background: linear-gradient(#ffe1f7 , #e5d6da);
    margin-top: 80px;
    padding: 30px 0px;
}

.col-2 .offer-img{
    padding: 50px;
}

.exclusive-para{
    color: #555;
    font-size: 13px;
}

/* ------testimonial Section--------------------------------------------------- */

.testimonial{
    padding-top: 100px;
    margin-bottom: 100px;
}

.testimonial .col-3{
    text-align: center;
    padding:40px 20px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.5s;
}

.testimonial .col-3 img{
    width: 60px;
    border-radius: 50%;
    margin-top: 20px;
}

.testimonial .col-3:hover{
    transform: translateY(-10px);
}

.fa.fa-quote-left{
    font-size: 30px;
    color: #ff523b;
}

.testimonial .col-3 p{
    color: #777;
    font-size: 14px;
    margin: 12px 0px;
}

.testimonial .col-3 h3{
    font-weight: 600;
    font-size: 16px;
    color: #555;
}

/* -----------------------------Brand Section--------------------------------------------------- */

.brand{
    margin:0px auto 100px; 

    /* border: 2px solid; */

}

.col-5{
    width: 160px;
}

.col-5 img{
    width: 100%;
    cursor: pointer;
    filter: grayscale(100%);
}

.col-5 img:hover{
    filter: grayscale(0%);
}

/* -Footer Swection ----- */

.footer{
    background-color: #000;
    color: #8a8a8a;
    padding: 18px 0px;
    font-size: 14px ;
    margin-bottom: 0px; 
    padding-left: 0px;
}

.footer p{
    color:#8a8a8a;


}
.footer h3{
    color: #fff;
    margin-bottom: 20px;
}

.footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4{
    min-width: 250px;
    margin-bottom: 20px;
    /* border:2px solid fuchsia;  */
    padding: 0px 15px;
    
}

.footer-col-1{
    flex-basis: 30%;
}

.footer-col-2{
    flex:1;
    /* text-align: center; */
}

.footer-col-2 img{
    width: 180px;
    margin-bottom: 20px;
}

.footer-col-3, .footer-col-4{
    flex-basis: 12%;
}

.footer-col-3 ul, .footer-col-4 ul{
    list-style-type: none;
}

.app-logo{
    margin-top: 20px;
}

.app-logo img{
    width: 120px;
    margin: 10px;
}

hr{
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 18px;
}

.copyright p{
    text-align: center;
}

.menu-icon{
    width: 28px;
    margin-left: 20px;
    display: none;

}


.row-2{
    justify-content: space-between;
    margin: 100px auto 50px;
}

select{
    padding: 5px;
    border: 1px solid #ff523b;
}

select:focus{
    outline : none;
}


.page-btn{
    margin: 0 auto 80px;
}

.page-btn span{
    display: inline-block;
    border:2px solid #ff523b;
    margin-left: 10px;
    height: 40px;
    width: 40px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
}
.page-btn span:hover{
    background: #ff523b;
    color: white;
}

/* --------------SIngle Product Details-------------------- */

.single-product{
    margin-top: 80px;
}
.single-product img{
    padding: 0px;
}


.single-product .col-2{
    padding: 20px;
    /* border: 2px solid red; */
}
.single-product h4{
    font-weight: bold;
    font-size: 22px;
    margin: 20px 0px;
}

.single-product select{
    display:block;
    padding:10px;
    margin-top:20px;
}
.single-product  input{
    width: 50px;
    height: 40px;
    padding-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    border: 1px solid #ff523b;
}

input:focus{
    outline: none ;
}

.single-product i{
    color: #ff523b;
    margin-left: 10px;
}

.small-image-row{
    display: flex;
    justify-content: space-between;
}

.small-image-col{
    flex-basis: 24%;
    cursor: pointer;
}

/* ---media queries for menu-icon------------ */

@media only screen and (max-width:800px){
    nav ul{
        position: absolute;
        top: 70px;
        left: 0px;
        background: #333;
        width: 100%;
        overflow: hidden;
        
    }

    nav ul li{
        display: block;
        margin: 10px 0px;
        margin-right: 50px;
    }

    nav ul li a{
        color: #fff;
    }

    .menu-icon{
        display: block;
        cursor: pointer;
    }
}

/* ---------cart page---------- */

.cart-page{
    margin: 80px auto;
}

table{
    width:100%;
    border-collapse: collapse;
}

.cart-info{
    display: flex;
    flex-wrap: wrap;
}

th{
    text-align: left;
    font-weight: normal;
    color: #fff;
    background: #ff523b;
    padding: 5px;
}

td{
    padding: 10px 5px;
}

td input{
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a{
    color: #ff523b;
}

td img{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.total-price{
    display: flex;
    justify-content: flex-end;
}

.total-price table{
    border-top: 3px solid #ff523b;
    width: 100%;
    max-width: 350px;
}

td:last-child{
    text-align: right;
}
th:last-child{
    text-align: right;
}

.account-page{
    background: linear-gradient(146deg, #00C7E7 80%, #1E4E82 20%);
    
}

.account-page .col-2{
    /* border: 2px solid red; */

}
.form-container1{
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


.form-container1 span{
    display: inline-block;
    color: #555;
    padding: 0 10px;
    width: 100px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5rem;
    /* border: 2px solid orange; */
}

.form-btn{
    display: inline-block;
}

.form-container1 form{
    max-width: 300px;
    padding: 0 20px;
    position: absolute;
    top: 80px;
     /* border: 2px solid orange; */
}
.form-container1 form input{
    height: 30px;
    width: 100%;
    margin: 10px 0;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}


.form-container1 form .btn{
    width: 80%;
    cursor: pointer;
    border: none;
    margin: 10px;
}

.form-container1 form .btn:focus{
    outline: none;
}

.form-container1 form a{
    color: rgb(157, 151, 151);
    font-size: 0.9rem;
    float: left;
}





/* ---media queries for less than width 600 -----  */

@media only screen and (max-width:600px){
    .row{
        text-align: center;
    }

    .col-2,.col-3,.col-4{
        flex-basis: 100%;
    }

    .single-product .row{
        text-align: left;
    }
    .single-product .col-2{
        padding: 20px 0;
    }

    .single-product h1{
        font-size: 26px;
        line-height: 32px;
    }

   
}


</style>
