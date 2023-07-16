<template>
  <div class="wrapper">
    <form action="">
      <h4 class="login">Login</h4>
      <div class="input_box">
        <input type="email" placeholder="email" ref="email_input">
        <i class='bx bxs-user'></i>
      </div>
      <div class="input_box">
        <input type="password" placeholder="password" ref="password_input">
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox"> Remmber me</label>
        <p class="forgot">forgot password?</p>
      </div>
      <button class="btn" @click="client_login"> login </button>
      <div class="register">
        <p>Dont have an account?</p>
        <button class="register_btn" @click="toggle_signup">Create Account</button>
      </div>
    </form>
  </div>
</template>

<script>
import 'boxicons'
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    toggle_signup: function () {
      this.$router.push(`/Signup`)
    },
    client_login: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/user-login",
          method: "POST",
          data: {
            email: this.$refs[`email_input`].value,
            password: this.$refs[`password_input`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][0][`token`]);
          cookies.set('user_id', response['data'][1][0][0])
          this.$router.push(`/Home`)
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 420px;
  background-color: transparent;
  border: 2px solid rgba(255,255,255,.1);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}
.wrapper h4 {
font-size: 36px;
text-align: center;
}
.wrapper .input_box {
  width: 100%;
  height: 50px;
  margin: 30px 0;
}
.input_box input {
  width: 82.25%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgb(255, 255, 255, .2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 5px 35px;
}
.input_box input::placeholder{
  color: #fff;
}
.input_box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}
.wrapper .remember-forgot{
display: grid;
grid-template-columns: 1fr 1fr;
place-items: center;
justify-content: space-between;
font-size: 14.5px;
margin: -15px 0 15px;
}

.remember-forgot label input {
accent-color: #fff;
text-decoration: none;
}
.remember-forgot .forgot{
  color: #fff;
  text-decoration: none;
}
.remember-forgot .forgot:hover{
  text-decoration: underline;
}
.wrapper .btn{
  margin-left: 10%;
 width: 80%;
 height: 45px;
 background: white;
 border: none;
 outline: none;
 border-radius: 40px;
 box-shadow: 0 0 10px rgba(0,0,0,.1);
 cursor: pointer;
 font-size: 16px;
 color: #333;
 font-weight: 600;
}
.wrapper .register{
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14.5px;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 20px;
}
.register .register_btn{
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  background: transparent;
  border: none;
}
.register_btn:hover{
  opacity:.8;
  text-decoration: underline;
}
</style>