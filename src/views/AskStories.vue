<template>
<div class="container">
    <item v-for="story in stories" :key="story.data.id" :story="story"></item>
</div>
</template>

<script>
import Item from '@/components/Item.vue';
export default {
    name: "Ask",
    components: {
        'item': Item
    },
    data: function () {
        return {
            err: '',
            stories: this.$store.state.askStories
        }
    },
    created: function () {
        if (this.$store.state.askStories.length === 0) this.$store.dispatch('fetch_ask_stories')
    }
};
</script>

<style scoped>
.container {
    width: 60%;
}
</style>
