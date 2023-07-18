<template>
  <div>
    <div class="message_holder" v-for="message in messageList" :key="message.id">
      <p class="username">{{ message.username }}</p>
      <p class="messages">{{ message.content }}</p>
      <p class="created">{{ message.created_at }}</p>
    </div>
    <div class="sending_handler">
      <input type="text" placeholder="Message" ref="message_inputs">
      <button @click="send_handler">Send</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

export default {
  data() {
    return {
      messages: undefined
    }
  },
  computed: {
    messageList() {
      if (Array.isArray(this.messages)) {
        return this.messages
      } else if (this.messages) {
        return [this.messages]
      } else {
        return []
      }
    }
  },
  mounted() {
    this.return_messages();
  },
  methods: {
    send_handler() {
      this.handle_messages();
    },
    return_messages() {
      axios.get('http://127.0.0.1:5000/api/messages', {
        params: {
          group_id: cookies.get('group_id')
        }
      }).then((response) => {
        this.messages = response.data;
      }).catch((error) => {
        error;
      })
    },
    handle_messages() {
      const content = this.$refs['message_inputs'].value;
      axios.request({
        url: 'http://127.0.0.1:5000/api/messages',
        method: 'POST',
        data: {
          content: content
        },
        params: {
          group_id: cookies.get('group_id'),
          member_id: cookies.get('user_id')
        }
      }).then((response) => {
        response;
        this.$refs['message_inputs'].value = '';
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>
  
<style scoped>
.sending_handler {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}

.sending_handler input[type="text"] {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #c5c5c5;
  flex-grow: 1;
}

.sending_handler button {
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #cfcfcf;
  cursor: pointer;
}

.message_holder {
  border-left: 2px solid black;
  padding-left: 8px;
}

.messages {
  font-size: 22px;
}

.created {
  font-size: 12px;
}
</style>
  
  