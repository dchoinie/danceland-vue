<template>
    <div>
        <div class="year-header">
            <div class="year-content">
                <h2 class="year-title">
                    1954
                </h2>
            </div>
        </div>
        <ul class="artist-group text-center">
            <li v-for="artist in artists" v-bind:key="artist.id" class="artist-group-item">
                <p>{{ artist.date }}, {{ artist.weekday }}</p>
                <p>{{ artist.artist }}</p>
                <p>{{ artist.price }}</p>
                <hr class="style-eight" />
            </li>
        </ul>
    </div>
</template>

<script>
import db from '../firebaseInit'
    export default {
        name: "year1954",
        data() {
            return {
                artists: []
            }
        },
        created () {
            db.collection('artists').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'date': doc.data().date,
                        'weekday': doc.data().weekday,
                        'artist': doc.data().artist,
                        'price': doc.data().price
                    }
                    this.artists.push(data)
                })
            })
        }
    }
</script>

<style scoped>
    hr.style-eight {
    overflow: visible; /* For IE */
    padding: 0;
    border: none;
    border-top: medium double #333;
    color: #333;
    text-align: center;
}
    hr.style-eight:after {
    content: "D";
    display: inline-block;
    position: relative;
    top: -0.8em;
    font-size: 1em;
    padding: 0 0.25em;
    background: white;
}
</style>