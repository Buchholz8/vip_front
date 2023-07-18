<template>
    <div>
      <input type="text" placeholder="Username" ref="friend_username">
      <button @click="friend_handler">Add Friend</button>
      <p>friends</p>
      <div class="friends" v-for="friendItem in friends" :key="friendItem.friend_id">
        <img @click="retrieve_friend_id(friendItem)" :src="friendItem.profile_img" alt="">
        <p>{{ friendItem.username }}</p>
        <button @click="removeFriend(friendItem.friend_id)">remove</button>
      </div>
    </div>
  </template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios'

export default {
  mounted() {
    this.handle_friend_get();
  },
  data() {
    return {
      friend: undefined,
    };
  },
  computed: {
    friends() {
      return Array.isArray(this.friend) ? this.friend : (this.friend ? [this.friend] : []);
    }
  },
  methods: {
    retrieve_friend_id(friendItem) {
      cookies.set('friend_id', friendItem.friend_id)
    },
    friend_handler() {
      const friendUsername = this.$refs['friend_username'].value;
      axios
        .request({
          url: "http://127.0.0.1:5000/api/friends",
          method: "POST",
          data: {
            username: friendUsername,
            user_id: cookies.get('user_id')
          },
        })
        .then((response) => {
            response;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handle_friend_get() {
      axios
        .request({
          url: 'http://127.0.0.1:5000/api/friends',
          method: 'GET',
          params: {
            user_id: cookies.get('user_id'),
          },
        })
        .then((response) => {
          this.friend = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    removeFriend(friendID) {
  axios
    .request({
      url: "http://127.0.0.1:5000/api/friends",
      method: "DELETE",
      params: {
        user_id: cookies.get('user_id'),
        friend_id: friendID,
      },
    })
    .then((response) => {
     response;
    })
    .catch((error) => {
      console.error(error);
    });
}

  }
}
</script>

<style scoped>
img {
    height: 40px;
    width: 40px;
    border-radius: 40px;
}
.friends{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 18px;
    padding-right: 20px;
    align-items: center;
    border: none;
    outline: none;
}
</style>