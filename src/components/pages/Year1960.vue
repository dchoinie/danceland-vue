<template>
    <div>
        <h1>1955</h1>
        <div class="container">
            <ul class="artist-group text-center">
                <li v-for="artist in artists" v-bind:key="artist.id" class="artist-group-item">
                    <p>{{ artist.year }}</p>
                    <p>{{ artist.date }}, {{ artist.weekday }}</p>
                    <p>{{ artist.artist }}</p>
                    <p>{{ artist.price }}</p>
                    <hr class="style-eight" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import db from '../firebaseInit'
    export default {
        name: "year1960",
        data() {
            return {
                artists: []
            }
        },
        created() {
        var artistsRef = db.collection('artists');
        var query = artistsRef.where('year', '==', 1960).get()
        .then(snapshot => {
            if (snapshot.empty) {
            console.log('No matching documents.');
            return;
            }

            snapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'date': doc.data().date,
                    'weekday': doc.data().weekday,
                    'artist': doc.data().artist,
                    'price': doc.data().price,
                    'year': doc.data().year,
                    'imgLocation': doc.data().ImgLocation
                }
                console.log(data)
                this.artists.push(data)
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }

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