<template>
    <div>
        <p>{{artist.Date}}</p>
        <p>{{artist.Weekday}}</p>
        <p>{{artist.Artist}}</p>
        <p>{{artist.Price}}</p>
    </div>
</template>

<script>
    export default {
        name: "Artist",
        props: ["artist"]
    }
</script>

<style scoped>

</style>