<template>
    <div>
      <div class="container" :style="{ backgroundImage: 'url(' + group.banner_img + ')' }">
      </div>
      <div class="info">
        <p>{{ group.name }}</p>
        <p>{{ group.username }}</p>
        <p>Created At: {{ group.created_at }}</p>
        <p>{{ group.description }}</p>
      </div>
      <div>
        <button @click="return_button">Return</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import cookies from 'vue-cookies'
  
  export default {
    data() {
      return {
        group: undefined
      }
    },
    mounted() {
      this.handle_group_info()
    },
    methods: {
        return_button() {
            this.$router.push('/Home')
        },
      handle_group_info() {
        axios
          .get('http://127.0.0.1:5000/api/group-get', {
            params: {
              group_id: cookies.get('group_id')
            }
          })
          .then((response) => {
            response;
            this.group = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position: center;
    color: rgb(0, 0, 0);
    padding: 20px;
    font-size: 26px;
    min-height: 16vh;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .info img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .info p {
    margin: 0;
  }
  </style>
  
  
  