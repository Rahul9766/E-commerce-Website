<template>
  <div id="app">
    <div class=" navnew">
      <div class="logo">
        <img src="./assets/logo.png" width="125px" alt="" />
      </div>
      <nav class="navitem">
        <ul id="MenuItems">
           <li>
            <router-link class="link" to="/account">Login</router-link>
          </li> 
          <li>
            <router-link  class="link" to="/">Home</router-link>
          </li>
          <li>
            <router-link  class="link" to="/products">Products</router-link>
          </li>
          <li>
            <router-link class="link" to="/pdetails">Product Details</router-link>
          </li>
          <li>
            <router-link class="link" to="/contact">Contact</router-link>
          </li>
          
          <li>
            <router-link class="link" to="/CustomerData">Admin</router-link>
          </li>
          <li>
             <router-link class="link" to="/cart"
        ><img src="./assets/cart.png" width="30px" height="30px" alt=""
      /></router-link>
          </li>
        </ul>
      </nav>

     
    </div>

    <router-view></router-view>
  </div>
</template>




<script>

export default {

  components:{
  }
  
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.navnew {
  /* border: 2px solid rebeccapurple; */
  display: flex;
  align-items: center;
}

.navitem {
  flex: 1;
  text-align: right;
  
  /* border:2px solid; */
}

.navitem ul {
  display: inline-block;
  position: relative;
  top: 5%;
}

.navitem ul li {
  list-style: none;
  display: inline-block;
  /* border: 2px solid red; */
  margin-right: 50px;
}

.navitem ul li .link {
  text-decoration: none;
  color: rgb(19, 19, 19);
  font-weight: 700;
  display: inline-block;
  height: 100%;
}
.navitem ul li .link::after {
  content: "";
  width: 0px;
  height: 2px;
  background: black;
  transition: 0.5s;
  display: block;
}
.navitem ul li .link:hover::after {
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
  left: 8px;
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
</style>
