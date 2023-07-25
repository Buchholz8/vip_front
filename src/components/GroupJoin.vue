<template>
  <div class="main">
    <button class="op-btn" v-if="!showDivs" @click="showDivs = true">Groups</button>
    <button class="op-btn" v-else @click="resetDivs">X</button>
    <div v-show="showDivs">
      <button class="btn" v-if="!showJoin" @click="showJoin = true; showCreate = false">Join existing</button>
      <button class="btn" v-if="!showCreate" @click="showCreate = true; showJoin = false">Create Your own</button>
      <div class="join" v-if="showJoin">
        <p>invite token</p>
        <input  type="text" placeholder="invite token" ref="group_token">
        <button class="btn" @click="join_group">Submit</button>
      </div>
      
      <div class="create" v-if="showCreate">
        <input type="url" placeholder="banner" ref="banner">
        <input type="text" placeholder="description" ref="description">
        <input type="text" placeholder="name" ref="name">
        <input type="url" placeholder="logo" ref="profile_img">
        <button class="btn" @click="create_group">Create</button>
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
            response;
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
              owner_id: cookies.get('user_id'),
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
.main {
  background-color: transparent;
  border: 2px solid rgba(255,255,255,.1);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}
.main .btn{
  margin-left: 10%;
 width: 80%;
 height: 45px;
 background: white;
 border: none;
 outline: none;
 border-radius: 40px;
 border: 2px solid rgba(255,255,255,.1);
 box-shadow: 0 0 10px rgba(0,0,0,.1);
 cursor: pointer;
 font-size: 16px;
 color: #333;
 font-weight: 600;
}
.join{
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
}
.join input{
  margin-left: 10%;
 width: 80%;
 height: 45px;
 background: white;
 border: none;
 outline: none;
 border-radius: 40px;
 border: 2px solid rgba(255,255,255,.1);
 box-shadow: 0 0 10px rgba(0,0,0,.1);
 cursor: pointer;
 font-size: 16px;
 color: #333;
 font-weight: 600;
 padding-left: 10px;
}
.join .btn{
  margin-left: 10%;
 width: 80%;
 height: 45px;
 background: white;
 border: none;
 outline: none;
 border-radius: 40px;
 border: 2px solid rgba(255,255,255,.1);
 box-shadow: 0 0 10px rgba(0,0,0,.1);
 cursor: pointer;
 font-size: 16px;
 color: #333;
 font-weight: 600;
}
.op-btn{
  margin-left: 10%;
 width: 80%;
 height: 45px;
 background: white;
 border: none;
 outline: none;
 border-radius: 40px;
 border: 2px solid rgba(255,255,255,.1);
 box-shadow: 0 0 10px rgba(0,0,0,.1);
 cursor: pointer;
 font-size: 16px;
 color: #333;
 font-weight: 600;
}
.create input{
  margin-left: 10%;
 width: 80%;
 height: 45px;
 background: white;
 border: none;
 outline: none;
 border-radius: 40px;
 border: 2px solid rgba(255,255,255,.1);
 box-shadow: 0 0 10px rgba(0,0,0,.1);
 cursor: pointer;
 font-size: 16px;
 color: #333;
 font-weight: 600;
 padding-left: 10px;
}
</style>


  