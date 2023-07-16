<template>
    <div class="main">
      <button class="op-btn" @click="showDivs">Groups</button>
      <button class="op-btn" @click="resetDivs">X</button>
      <div v-show="showDivs">
        <button @click="showJoin = true; showCreate = false">Join existing</button>
        <div class="join" v-if="showJoin">
            <p>invite token</p>
          <input type="text" placeholder="invite token" ref="group_token">
          <button @click="join_group">Submit</button>
        </div>
        <button @click="showCreate = true; showJoin = false">Create Your own</button>
        <div class="create" v-if="showCreate">
          <input type="url" placeholder="banner" ref="banner">
          <input type="text" placeholder="description" ref="description">
          <input type="text" placeholder="name" ref="name">
          <input type="url" placeholder="logo" ref="profile_img">
          <button @click="create_group">Create</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import cookies from 'vue-cookies';
  
  export default {
    data() {
      return {
        showDivs: false,
        showCreate: false,
        showJoin: false,
      };
    },
    methods: {
      join_group() {
        axios
          .request({
            url: 'http://127.0.0.1:5000/api/group-join',
            method: 'POST',
            data: {
              token_input: cookies.get('token'),
              group_token_input: this.$refs.group_token.value,
            },
          })
          .then((response) => {
            console.log(response);
            cookies.set('member_id' , response.data[0][0])
          })
          .catch((error) => {
            console.error(error);
          });
      },
      create_group() {
        axios
          .request({
            url: 'http://127.0.0.1:5000/api/groups',
            method: 'POST',
            data: {
              owner_id: cookies.get('client_id'),
              banner_img: this.$refs.banner.value,
              description: this.$refs.description.value,
              name: this.$refs.name.value,
              profile_img: this.$refs.profile_img.value,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      },
      resetDivs() {
        this.showJoin = false;
        this.showCreate = false;
        this.showDivs = false;
      },
    },
  };
  </script>
  
  <style scoped>
  img {
    height: 80px;
    width: 80px;
  }
  .op-btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  color: rgb(0, 0, 0);
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.op-btn + .op-btn {
  margin-left: 10px;
}
  </style>
  