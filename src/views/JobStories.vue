<template>
<div class="container">
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
</div>
</template>

<script>
import Item from '@/components/Item.vue';
export default {
    name: "Job",
    components: {
        'item': Item
    },
    data: function () {
        return {
            err: '',
            stories: this.$store.state.jobStories
        }
    },
    created: function () {
        if (this.$store.state.jobStories.length === 0) this.$store.dispatch('fetch_job_stories')
    }
};
</script>

<style scoped>
.container {
    width: 60%;
}
</style>
