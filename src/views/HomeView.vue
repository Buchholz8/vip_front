<template>
    <div class="parent-container">
        <user-profile></user-profile>
        
        <div class="left-bar">
        <user-groups></user-groups>
        <group-join></group-join>
        <logout-comp></logout-comp>
        </div>
        <div class="center">

        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import UserProfile from '@/components/UserProfile.vue'
import GroupJoin from '@/components/GroupJoin.vue'
import UserGroups from '@/components/UserGroups.vue'
import LogoutComp from '@/components/LogoutComp.vue'
export default {
    name: 'HomeView',
    components: {
        UserProfile,
        GroupJoin,
        UserGroups,
        LogoutComp,
    },
    mounted() {
        if (cookies.get('token') === null) {
            this.$router.push('/');
        }
    },
}
</script>
<style scoped>
.parent-container{
    display: grid;
    min-height: 10vh;
}
.parent-container .left-bar {
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-height: 77.8vh;
}
</style>
  
  
  
  