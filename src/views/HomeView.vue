<template>
    <div class="parent-container">
        <user-profile></user-profile>
        <div class="body_holder">
            <div class="left-bar">
                <user-groups></user-groups>

                <logout-comp></logout-comp>
            </div>
            <div class="center">
                <group-join></group-join>
            </div>
            <div class="right">
                <friends-comp></friends-comp>
            </div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import UserProfile from '@/components/UserProfile.vue'
import GroupJoin from '@/components/GroupJoin.vue'
import UserGroups from '@/components/UserGroups.vue'
import LogoutComp from '@/components/LogoutComp.vue'
import FriendsComp from '@/components/FriendsComp.vue'
export default {
    name: 'HomeView',
    components: {
        UserProfile,
        GroupJoin,
        UserGroups,
        LogoutComp,
        FriendsComp
    },
    mounted() {
        if (cookies.get('token') === null) {
            this.$router.push('/');
        }
    },
}
</script>
<style scoped>
.parent-container {
    display: grid;
    min-height: 10vh;
}

.parent-container .left-bar {
    display: grid;
    min-height: 77.8vh;
}
.body_holder{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
}
</style>
  
  
  
  