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
    export default {
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