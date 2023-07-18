<template>
    <div>
        <group-info></group-info>
        <div class="body">
            <group-members></group-members>
            <group-messages></group-messages>
        </div>
    </div>
</template>

<script>
import GroupInfo from '@/components/GroupInfo.vue'
import GroupMembers from '@/components/GroupMembers.vue'
import GroupMessages from '@/components/GroupMessages.vue';

import cookies from 'vue-cookies'
    export default {
        mounted() {
        if (cookies.get('token') === null) {
            this.$router.push('/');
        }
    },







    name: 'GroupView',
  components: {
    GroupMembers,
    GroupMessages,
    GroupInfo
  }, 
    }
</script>

<style scoped>
.body{
    display: grid;
    grid-template-columns: 1fr 5fr;
}
</style>