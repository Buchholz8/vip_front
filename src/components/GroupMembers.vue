<template>
  <div>
    <div class="main" v-for="member in memberList" :key="member.id">
      <img :src="member.profile_picture" alt="member's profile picture">
      <p>{{ member.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
  data() {
    return {
      members: undefined
    }
  },
  mounted() {
    this.get_members()
  },
  computed: {
    memberList() {
      if (this.members) {
        if (Array.isArray(this.members)) {
          return this.members;
        } else {
          return [this.members];
        }
      } else {
        return [];
      }
    }
  },
  methods: {
    get_members() {
      axios.get('http://127.0.0.1:5000/api/group', {
        params: {
          group_id: cookies.get('group_id')
        }
      }).then((response) => {
        response;
        this.members = response.data;
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
img {
  height: 40px;
  width: 40px;
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 20px;
}
</style>
  
  