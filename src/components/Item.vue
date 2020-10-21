<template>
<div class="story">
    <span class="score">{{ story.data.score }}</span>
    <template v-if="story.data.url">
        <router-link :to="{ path: '/story/' + story.data.id }">{{ story.data.title }}
            <span>({{host(story.data.url)}})</span>
        </router-link><br />
    </template>
    <template v-else>
        <router-link :to="'/story/' + story.data.id">{{ story.data.title }}</router-link><br>
    </template>

    <span class="meta">
        <span v-if="story.data.type !== 'job'" class="by">
            by <router-link :to="'/user/' + story.data.by">{{ story.data.by }}</router-link>
        </span>
        <span class="time">
            {{timeAgo(story.data.time)}} ago
        </span>
        <span v-if="story.data.type !== 'job'" class="comments-link">
            | <router-link :to="'/item/' + story.data.id">{{ story.data.descendants }} comments</router-link>
        </span>
    </span>
    <span class="label" v-if="story.data.type !== 'story'">{{ story.data.type }}</span>

</div>
</template>

<script>
export default {
    name: "Item",
    props: ["story"],
    methods: {
        host: function (url) {
            const hosted = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
            const parts = hosted.split('.').slice(-3)
            if (parts[0] === 'www') parts.shift()
            return parts.join('.')
        },
        timeAgo: function (time) {
            const between = Date.now() / 1000 - Number(time)
            if (between < 3600) {
                return this.pluralize(~~(between / 60), ' minute')
            } else if (between < 86400) {
                return this.pluralize(~~(between / 3600), ' hour')
            } else {
                return this.pluralize(~~(between / 86400), ' day')
            }
        },
        pluralize: function (time, label) {
            if (time === 1) {
                return time + label
            }
            return time + label + 's'
        }

    }
};
</script>

<style scoped>
.story {
    background-color: #fff;
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;
}

.score {
    color: #f60;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
}

.story a {
    color: #34495e;
    font-weight: 600;
    text-decoration: none;
}

.story a span {
    font-size: 0.85em;
    margin-left: 10px;
    color: #828282;
}

.story .meta {
    font-size: 0.85em;
    color: #828282;
}
</style>
