 <template>
  <div class="body">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    />
    <div class="header">
      <p class="logo">My Cart</p>
      <div class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>{{ cart.length }}</p>
      </div>
    </div>
    <div class="container">
      <div :class="[showSidebar ? 'products' : 'products-full']">
        <div v-for="(product, index) in products" :key="product.id" class="box product-item">
          <div class="img-box">
            <img class="images" :src="product.image">
          </div>
          <div class="bottom">
            <p>{{ product.title }}</p>
            <h2>₹ {{ product.price }}.00</h2>
            <button @click="addToCart(index)">Add To Cart</button>
          </div>
        </div>
      </div>
      <div class="sidebar" v-if="showSidebar">
        <div class="head">
          <p>My Cart</p>
        </div>
        <div class="cart-items" v-if="cart.length > 0">
          <div v-for="(item, index) in cart" :key="index" class="cart-item">
            <div class="row-img">
              <img :src="item.image" class="rowing">
            </div>
            <p style="font-size:12px;">{{ item.title }}</p>
            <h2 style="font-size: 15px;">₹ {{ item.price }}.00</h2>
            <i class="fa-solid fa-trash" @click="deleteFromCart(index)"></i>
          </div>
          <div class="foot">
            <div><h3>Total</h3>
            <h2>₹ {{ getTotalPrice() }}.00</h2></div>
            <div>
              <h3>Shipping charges</h3>
            <h2>₹{{fees}}.00</h2>
            </div>
            <div>
              <h3>Total Payable</h3>
            <h2>₹{{getTotalPrice()+fees}}.00</h2>
            </div>
          </div>
          <div>
            <button @click="Success()">Pay Now</button>
          </div>
        </div>
        <div class="cart-items" v-else>
          Your Cart is Empty
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fees: 50,
      products: [
        {
          id: 0,
          image: require("../assets/product-1.jpg"),
          title: "T-shirt",
          price: 1199,
        },
        {
          id: 1,
          image: require("../assets/product-2.jpg"),
          title: "HRX Shoes",
          price: 2499,
        },
        {
          id: 2,
          image: require("../assets/product-3.jpg"),
          title: "Track-Pant",
          price: 999,
        },
        {
          id: 3,
          image: require("../assets/product-4.jpg"),
          title: "Polo T-shirt",
          price: 799,
        },
        {
          id: 4,
          image: require("../assets/product-5.jpg"),
          title: "High-Top Shoe",
          price: 2999,
        },
        {
          id: 5,
          image: require("../assets/product-6.jpg"),
          title: "Puma T-shirt",
          price: 899,
        },
        {
          id: 6,
          image: require("../assets/product-7.jpg"),
          title: "HRX Socks",
          price: 199,
        },
        {
          id: 7,
          image: require("../assets/product-8.jpg"),
          title: "Fossil Watch",
          price: 1999,
        },
        {
          id: 9,
          title: 'Roadster Watch',
          image: require('../assets/product-9.jpg'),
          price: 1299,
        },
        {
          id: 10,
          title: 'Sparx Shoes',
          image: require('../assets/product-10.jpg'),
          price: 1099,
        },
        {
          id: 11,
          title: 'Puma Shoes',
          image: require('../assets/product-11.jpg'),
          price: 1899,
        },
        {
          id: 12,
          title: 'Track Pant',
          image: require('../assets/product-12.jpg'),
          price: 199,
        },
      ],
      cart: [],
      showSidebar: false,
    };
  },
    methods: {
    addToCart(index) {
      this.showSidebar = true;
      this.cart.push({ ...this.products[index] });
    },
    deleteFromCart(index) {
      this.cart.splice(index, 1);
      if (this.cart.length === 0) {
        this.showSidebar = false;
      }
    },
    getTotalPrice() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
    Success() {
      alert("Dear customer your payment has been Successful");
      this.$router.go(0);
    },
  },
};
</script>



 <style scoped>
 .products {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.products-full {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
  font-size: 18px;
}

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.header {
  height: 80px;
  width: 90%;
  background: linear-gradient(45deg, #fe6753, #ff523b);
  border-radius: 5px;
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}

.header .logo {
  font-size: 30px;
  font-weight: bold;
  color: white;
}

.cart {
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  border-radius: 3px;
  width: 80px;
}

.fa-solid {
  color: #ff523b;
}

.cart p {
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  background-color: #ff523b;
  color: white;
}
.container {
  display: flex;
  width: 90%;
  margin-bottom: 30px;
}
.products {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.sidebar {
  width: 40%;
  border-radius: 5px;
  background-color: #eee;
  margin-left: 20px;
  padding: 15px;
  text-align: center;
}
.head {
  background-color: #ff523b;
  border-radius: 3px;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  display: flex;
  align-items: center;
}
.foot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  padding: 10px 0px;
  border-top: 1px solid #333;
  gap: 1rem;
}
.foot div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
/* .box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ff523b;
  border-radius: 5px;
  padding: 15px;
}
.img-box {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
} */
.box {
  /* border: 2px solid black; */
  flex-basis: 25%;

  min-width: 200px;
  padding: 10px;
  margin-bottom: 50px;
  transition: transform 0.5s;
}

.box img {
  width: 100%;
}
.product-item {
  text-align: center;
  margin: 20px;
}
.box:hover {
  transform: translateY(-5px);
}
.images {
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
  object-position: center;
}
.bottom {
  margin-top: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 110px;
}
h2 {
  font-size: 20px;
  color: red;
}
button {
  display: inline-block;
  padding: 8px 30px;
  margin: 30px 0px;
  border-radius: 30px;
  color: white;
  background: #ff523b;
  text-decoration: none;
  transition: all 0.5s;
  border: none;
}

button:hover {
  background: linear-gradient(146deg, #1e4e82 20%, #00c7e7 80%);
  scale: 1.1;
  box-shadow: 5px 5px 10px black;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #aaa;
  border-radius: 3px;
  margin: 10px 10px;
}
.row-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rowing {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #ff523b;
}
.fa-trash:hover {
  cursor: pointer;
  color: #333;
}
</style> 






