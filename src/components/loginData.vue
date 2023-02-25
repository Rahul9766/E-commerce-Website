<template>
<div class="main">
    <div class="head">
        <input type="button" value="Customer Care Data" @click="goto()" class="customer btn">
        <input type="button" value="Login Details" @click="CustomerData()" class="log btn" >
    </div>
    

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Customer-Id</th>
            <th scope="col">E-mail</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="login in loginDetails" :key="login.id">
            <td>{{ login.id }}</td>
            <td>{{ login.email }}</td>
            <td>{{ login.password }}</td>
          </tr>
        </tbody>
      </table>
      
</div>
    
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginDetails: [],
    };
  },
  mounted() {
    //use axios
    axios
      .get(
        `https://ecommerce-e5c47-default-rtdb.asia-southeast1.firebasedatabase.app/user/login.json`
      )
      .then((response) => {
        console.log(response.data);
        this.getData(response.data);
      });
  },
  methods: {
    CustomerData(){
      this.$router.push('/loginData')
    },
    goto(){
      this.$router.push('/CustomerData')
    },
    getData(loginData) {
      for (let key in loginData) {
        this.loginDetails.push({
          id: key,
          email: loginData[key].email,
          password: loginData[key].password,

        });
      }
    },
  },
};
</script>

<style scoped>
.main{
    margin-top: 3rem;
}
.head{
    display: flex;
    gap: 3rem;

}


.head .customer{
    font-size: 25px;
    font-weight: normal;
}
.head .log{
    font-size: 25px;
    font-weight: bold;
}
table {
  width: 90%;
  margin-left: 5rem;
}
</style>