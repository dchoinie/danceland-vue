<template>
    <div>
        <div class="container center-align">
            <h2>1954</h2>
            <p>National acts that played at Danceland in 1954 include - Wayne King & His Orchestra,
            “Whoopee” John Wilfahrt & His Orchestra, WNAX Bohemian Band, Fezz Fritsche & His
            Goosetown Band, Six Fat Dutchmen, Frank Yankovic & His Yanks</p>
            <ul class="artist-group text-center">
                <li v-for="artist in artists" v-bind:key="artist.id" class="artist-group-item pt-3">
                    <p>{{ artist.year }}</p>
                    <p>{{ artist.date }}, {{ artist.weekday }}</p>
                    <p>{{ artist.artist }}</p>
                    <p>{{ artist.price }}</p>
                    <div class="imageGallery pb-3">
                        <img :src="artist.img1" alt="artistImg" class="artistImg">
                        <img :src="artist.img2" alt="artistImg2" class="artistImg">
                        <img :src="artist.img3" alt="artistImg3" class="artistImg">
                        <img :src="artist.img4" alt="artistImg4" class="artistImg">
                        <img :src="artist.img5" alt="artistImg5" class="artistImg">
                        <img :src="artist.img6" alt="artistImg6" class="artistImg">
                        <img :src="artist.img7" alt="artistImg7" class="artistImg">
                        <img :src="artist.img8" alt="artistImg8" class="artistImg">
                        <img :src="artist.img9" alt="artistImg9" class="artistImg">
                        <img :src="artist.img10" alt="artistImg10" class="artistImg">
                        <img :src="artist.img11" alt="artistImg11" class="artistImg">
                        <img :src="artist.img12" alt="artistImg12" class="artistImg">
                        <img :src="artist.img13" alt="artistImg13" class="artistImg">
                        <img :src="artist.img14" alt="artistImg14" class="artistImg">
                        <img :src="artist.img15" alt="artistImg15" class="artistImg">
                        <img :src="artist.img16" alt="artistImg16" class="artistImg">
                        <img :src="artist.img17" alt="artistImg17" class="artistImg">
                        <img :src="artist.img18" alt="artistImg18" class="artistImg">
                        <img :src="artist.img19" alt="artistImg19" class="artistImg">
                        <img :src="artist.img20" alt="artistImg20" class="artistImg">
                        <img :src="artist.img21" alt="artistImg21" class="artistImg">
                        <img :src="artist.img22" alt="artistImg22" class="artistImg">
                        <img :src="artist.img23" alt="artistImg23" class="artistImg">
                        <img :src="artist.img24" alt="artistImg24" class="artistImg">
                        <img :src="artist.img25" alt="artistImg25" class="artistImg">
                        <img :src="artist.img26" alt="artistImg26" class="artistImg">
                        <img :src="artist.img27" alt="artistImg27" class="artistImg">
                        <img :src="artist.img28" alt="artistImg28" class="artistImg">
                        <img :src="artist.img29" alt="artistImg29" class="artistImg">
                        <img :src="artist.img30" alt="artistImg30" class="artistImg">
                        <img :src="artist.img31" alt="artistImg31" class="artistImg">
                        <img :src="artist.img32" alt="artistImg32" class="artistImg">
                        <img :src="artist.img33" alt="artistImg33" class="artistImg">
                        <img :src="artist.img34" alt="artistImg34" class="artistImg">
                        <img :src="artist.img35" alt="artistImg35" class="artistImg">
                    </div>
                    <hr class="style-eight" />
                </li>
            </ul>
        </div>
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
        created() {
        var artistsRef = db.collection('artists');
        // var query = artistsRef.where('year', '==', 1954).get()
        var query = artistsRef.orderBy("ID").get()
        .then(snapshot => {
            if (snapshot.empty) {
            console.log('No matching documents.');
            return;
            }

            snapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'customID': doc.data().ID,
                    'date': doc.data().Date,
                    'weekday': doc.data().Weekday,
                    'artist': doc.data().Artist,
                    'price': doc.data().Price,
                    'year': doc.data().Year,
                    'img1': doc.data().Img1,
                    'img2': doc.data().Img2,
                    'img3': doc.data().Img3,
                    'img4': doc.data().Img4,
                    'img5': doc.data().Img5,
                    'img6': doc.data().Img6,
                    'img7': doc.data().Img7,
                    'img8': doc.data().Img8,
                    'img9': doc.data().Img9,
                    'img10': doc.data().Img10,
                    'img11': doc.data().Img11,
                    'img12': doc.data().Img12,
                    'img13': doc.data().Img13,
                    'img14': doc.data().Img14,
                    'img15': doc.data().Img15,
                    'img16': doc.data().Img16,
                    'img17': doc.data().Img17,
                    'img18': doc.data().Img18,
                    'img19': doc.data().Img19,
                    'img20': doc.data().Img20,
                    'img21': doc.data().Img21,
                    'img22': doc.data().Img22,
                    'img23': doc.data().Img23,
                    'img24': doc.data().Img24,
                    'img25': doc.data().Img25,
                    'img26': doc.data().Img26,
                    'img27': doc.data().Img27,
                    'img28': doc.data().Img28,
                    'img29': doc.data().Img29,
                    'img30': doc.data().Img30,
                    'img31': doc.data().Img31,
                    'img32': doc.data().Img32,
                    'img33': doc.data().Img33,
                    'img34': doc.data().Img34,
                    'img35': doc.data().Img35
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
    img[src=""] {
        display: none;
    }
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