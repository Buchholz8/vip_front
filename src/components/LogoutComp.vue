<template>
    <div>
        <button @click="logout_handler">LogOut</button>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        methods: {
            logout_handler() {
                axios.request({
                    url: 'http://127.0.0.1:5000/api/user-logout',
                    method:'delete',
                    params : {
                        token : cookies.get('token')
                    }
                }).then((response) => {
                    this.$router.push(`/`)
                    cookies.remove('token')
                    cookies.remove('member_id')
                    cookies.reomce('user_id')
                    cookies.remove('client_id')
                    
                    response;
                }).catch((error) => {
                    error;
                })
            }
        }
    }
</script>

<style scoped>

</style>