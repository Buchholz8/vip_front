<template>
  <div class="main">
    <div v-if="!showWelcome">
      <h4>Signup</h4>
      <div class="input_box" :class="{ 'error': !usernameValid }">
        <input type="text" placeholder="Username" ref="username_input" v-model="username">
        <p class="error-message" v-if="!usernameValid">Username is required.</p>
      </div>
      <div class="input_box" :class="{ 'error': !emailValid }">
        <input type="email" placeholder="Email" ref="email_input" v-model="email">
        <p class="error-message" v-if="!emailValid">Email is required.</p>
      </div>
      <div class="input_box" :class="{ 'error': !passwordValid }">
        <input type="password" placeholder="Password" ref="password_input" v-model="password">
        <p class="error-message" v-if="!passwordValid">Password is required.</p>
      </div>
      <div class="input_box" :class="{ 'error': !profile_imgValid }">
        <input type="url" placeholder="Profile Pic" ref="profile_input" v-model="profile_img">
        <p class="error-message" v-if="!profile_imgValid">Profile Pic is required.</p>
      </div>
      <div class="input_box" :class="{ 'error': !banner_imgValid }">
        <input type="url" placeholder="Banner" ref="banner_input" v-model="banner_img">
        <p class="error-message" v-if="!banner_imgValid">Banner is required.</p>
      </div>
      <div class="input_box" :class="{ 'error': !descriptionValid }">
        <input type="text" placeholder="Description" ref="description_input" v-model="description">
        <p class="error-message" v-if="!descriptionValid">Description is required.</p>
      </div>
      <button @click="client_signup" class="signup-btn">Sign Up</button>
    <p v-if="error" class="error-message">{{ error }}</p>
    <div class="login">
      <p>Already have an account?</p>
      <button class="login-btn" @click="toggle_login">Login</button>
    </div>
    </div>
    <div v-else>
      <h4>Welcome!</h4>
      <p>Thank you for signing up.</p>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  data() {
    return {
      error: null,
      showWelcome: false,
      username: "",
      email: "",
      password: "",
      profile_img: "",
      banner_img: "",
      description: "",
      usernameValid: true,
      emailValid: true,
      passwordValid: true,
      profile_imgValid: true,
      banner_imgValid: true,
      descriptionValid: true
    };
  },
  methods: {
    toggle_login() {
      this.$router.push('/')
    },
    client_signup() {
      this.error = null;
      this.usernameValid = true;
      this.emailValid = true;
      this.passwordValid = true;
      this.profile_imgValid = true;
      this.banner_imgValid = true;
      this.descriptionValid = true;
      
      if (this.username.trim() === "") {
        this.usernameValid = false;
      }
      if (this.email.trim() === "") {
        this.emailValid = false;
      }
      if (this.password.trim() === "") {
        this.passwordValid = false;
      }
      if (this.profile_img.trim() === "") {
        this.profile_imgValid = false;
      }
      if (this.banner_img.trim() === "") {
        this.banner_imgValid = false;
      }
      if (this.description.trim() === "") {
        this.descriptionValid = false;
      }
      if (!this.usernameValid || !this.emailValid || !this.passwordValid || !this.profile_imgValid || !this.banner_imgValid || !this.descriptionValid) {
        return;
      }
      axios
        .request({
          url: "http://127.0.0.1:5000/api/user",
          method: "POST",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
            profile_img: this.profile_img,
            banner_img: this.banner_img,
            description: this.description,
          },
        })
        .then((response) => {
          this.showWelcome = true;
          response;
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = "An error occurred. Please try again.";
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.main {
  width: 420px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}

.main h4 {
  font-size: 36px;
  text-align: center;
}

.main .input_box {
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
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 5px 35px;
}

.input_box input::placeholder {
  color: #fff;
}

.main .btn {
  width: 80%;
  height: 45px;
  background: white;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-left: 10%;
}

.main .error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.main div[v-else] {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main div[v-else] h4 {
  margin-bottom: 10px;
}

.main div[v-else] p {
  text-align: center;
}

.main .input_box.error input {
  border-color: red;
}

.main .error-message {
  color: red;
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
  display: none;
}

.main .error-message:not(:empty) {
  display: block;
}
.signup-btn {
  margin-left: 10%;
  width: 80%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.signup-btn:hover {
  opacity: 0.8;
  text-decoration: underline;
}
.login{
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14.5px;
}
.login .login-btn{
  background: transparent;
  color: #fff;
  border: none;
}
.login-btn:hover{
  opacity: 0.8;
  text-decoration: underline;
}
</style>