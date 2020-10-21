<template>
<div class="container">
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
</div>
</template>

<script>
import Item from '@/components/Item.vue';
export default {
    name: "Show",
    components: {
        'item': Item
    },
    data: function () {
        return {
            err: '',
            stories: this.$store.state.showStories
        }
    },
    created: function () {

        if (this.$store.state.showStories.length === 0) this.$store.dispatch('fetch_show_stories')
        console.log('show', JSON.stringify(this.$store.state.showStories))
    }
};
</script>

<style scoped>
.container {
    width: 60%;
}
</style>
