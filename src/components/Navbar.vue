<template>
<div class="pure-menu pure-menu-horizontal">
    <div class="container">
        <router-link to="/" class="pure-menu-heading pure-menu-link">Top</router-link>
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/new">New</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/show">Show</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/ask">Ask</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/job">Job</router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style scoped>
.pure-menu {
    background-color: #e17842;
}

.pure-menu a {
    color: white;
}
</style>
