<template>
  <div class="main">
    <div class="ad-auth" v-if="!isLoggedIn">
      <h3>Login</h3>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      
    </div>
    <div v-else>
      
      <div class="head">
        <input type="button" value="Customer Care Data" @click="CustomerData()" class="customer btn">
        <input type="button" value="Login Details" @click="goto()" class="log btn" >
        
        </div>
      <button @click="logout" class="btn btn-danger">Logout</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Customer-Id</th>
            <th scope="col">Customer Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="contact in contactDetails" :key="contact.id">
            <td>{{ contact.id }}</td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td>{{ contact.message }}</td>
          </tr>
        </tbody>
        
      </table>
      
      
      
    </div>



  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      isLoggedIn: false,
      email: '',
      password: '',
      contactDetails: [],
    };
  },
  mounted() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      this.fetchData();
    }
  },
  methods: {
    CustomerData(){
      this.$router.push('/CustomerData')
    },
    goto(){
      this.$router.push('/loginData')
    },
    login() {
      // Simulate login with email and password
      if (this.email === 'rahul@gmail.com' && this.password === '9766') {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        this.fetchData();
      } else {
        alert('Invalid email or password');
      }
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
      this.$router.go(0)
    },
    fetchData() {
      axios
        .get(
          `https://ecommerce-e5c47-default-rtdb.asia-southeast1.firebasedatabase.app/user/contact.json`
        )
        .then((response) => {
          console.log(response.data);
          this.getData(response.data);
        });
    },
    getData(contactData) {
      for (let key in contactData) {
        this.contactDetails.push({
          id: key,
          name: contactData[key].name,
          email: contactData[key].email,
          phone: contactData[key].phone,
          message: contactData[key].message,
        });
      }
    },
  },
};
</script>

<style scoped>
.head{
    display: flex;
    gap: 3rem;

}
.head .customer{
    font-size: 25px;
    font-weight: bold;
}
.head .log{
    font-size: 25px;
    font-weight: normal;
}
.main{
    margin-top: 3rem;
}
.main h3{
    position: relative;
    left: 3rem;
}
table {
  width: 90%;
  margin-left: 5rem;
}

.ad-auth{
    display: flex;
    flex-direction: column;
    box-shadow: 2px 4px 4px black;
    width: 25%;
    height: 46vh;
    position: absolute;
    left: 30%;
    top: 30%;
    align-content: center;
    justify-content: center;
    gap: 2rem;
}
.ad-auth h3{
     position: relative;
     left: 39%;
     top: -7%;
}
.ad-auth button{
    width: 127px;
    position: relative;
    left: 32%;
    bottom: 0.4rem;
}
.form-group{
    position: relative;
    left: 2rem;
    top: -2.5rem;
}
.form-group input{
    width: 300px;
}
.btn-danger{
    position: absolute;
    right: 4rem;
    top: 5rem;
}
</style>
