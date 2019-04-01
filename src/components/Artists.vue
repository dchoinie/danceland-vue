<template>
    <div>
        <div v-bind:key="artist.id" v-for="artist in artists" >
            <Artist v-bind:artist="artist" />
        </div>
    </div>
</template>

<script>
import Artist from './Artist.vue';

export default {
    name: "Artists",
    components: {
        Artist
    },
    props: ["artists"]
}
</script>

<style scoped>

</style>
