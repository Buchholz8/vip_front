<template>
    <div class="container" :style="{ backgroundImage: 'url(' + user.banner_img + ')' }">
      <div class="user-info">
        <img :src="user.profile_img" :alt="user.username + ' Profile Image'" />
        <div>
          <p>{{ user.username }}</p>
          <p>Created At: {{ user.created_at }}</p>
        </div>
      </div>
      <p>{{ user.description }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import cookies from 'vue-cookies';
  
  export default {
    data() {
      return {
        user: undefined
      };
    },
    mounted() {
      this.user_profile();
    },
    methods: {
      user_profile() {
        axios
          .get('http://127.0.0.1:5000/api/user', {
            params: {
              token: cookies.get('token')
            }
          })
          .then((response) => {
            response;
            this.user = response.data;
          })
          .catch((error) => {
            error;
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position: center;
    color: white;
    padding: 20px;
    font-size: 26px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  .user-info img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-info p {
    margin: 0;
  }
  </style>
  
  
  
  
  
  
  