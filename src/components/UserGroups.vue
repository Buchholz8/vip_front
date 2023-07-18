<template>
    <div class="body">
      <div class="main">
        <div class="holder" v-for="group in groupList" :key="group.id">
          <img :src="group.profile_picture" alt="user's profile picture" @click="setGroupCookie(group.group_id)">
          <p>{{ group.name }}</p>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import cookies from 'vue-cookies'
  
  export default {
    data() {
      return {
        groups: undefined
      };
    },
    mounted() {
      this.handle_groups();
    },
    computed: {
      groupList() {
        if (Array.isArray(this.groups)) {
          return this.groups;
        } else if (this.groups) {
          return [this.groups];
        } else {
          return [];
        }
      }
    },
    methods: {
      handle_groups() {
        axios
          .get('http://127.0.0.1:5000/api/groups', {
            params: {
              member_id: cookies.get('user_id')}
          })
          .then((response) => {
            response;
            this.groups = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      setGroupCookie(group_id) {
        cookies.set('group_id', group_id);
        this.redirectToGroups();
      },
      redirectToGroups() {
        axios.get('http://127.0.0.1:5000/api/group-get', {
            params: {
              group_id: cookies.get('group_id'),
              member_id: cookies.get('member_id')
            }
          })
          .then((response) => {
            cookies.set('group_info', response.data);
            this.$router.push('/groups');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  img {
    height: 60px;
    width: 60px;
  }
  .main {
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 20px;
  }
  .body{
    display: grid;
  }
  .main .holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  </style>
  
  
  
  