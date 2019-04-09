<template>
    <div>
        <div id="home">
            <div class="row center-align">
                <div class="col s12">
                    <h2 class="title red-text text-darken-4 animated slideInLeft">Danceland</h2>
                    <h4 class="subtitle grey-text text-darken-3 animated slideInRight"><i class="small material-icons">music_note</i> The History Of A Midwest Ballroom <i class="small material-icons">music_note</i></h4>
                </div>
            </div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col m6">
                        <p>Welcome to the website that is dedicated to preserving the history of Danceland Ballroom in Cedar Rapids, Iowa.  You can view the history from the grand opening in 1929 to it’s razing in 1968 (urban renewal). The array of top acts that graced the Danceland stage through the years is impressive to say the least.</p><br />
                        <p>The “Big Band” years saw Duke Ellington, Glenn Miller, Count Basie, Tommy Dorsey with Frank Sinatra, Louis Armstrong, Woody Herman, Gene Krupa, Les Brown with Doris Day, Lawrence Welk, Sammy Kaye, Eddy Howard and Stan Kenton all stop by.</p><br />
                    </div>
                    <div class="col m6">
                        <p>The rock era started in 1955 with the booking of Bill Haley & the Comets. Followed by Chuck Berry, Jerry Lee Lewis, Carl Perkins, Del Shannon, the Everly Brothers. Neil Sedaka, Bobby Darin, 4 Seasons, Gene Pitney, Dion & the Belmonts, Roy Orbison, Brenda Lee, Jan & Dean, The Ronettes, Beach Boys, The Animals, the Hollies, the Yardbirds and many more.</p><br />
                        <p>Not to forget the great country stars that includes Bob Wills & His Texas Playboys, Kitty Wells, Webb Pierce, Buck Owens, Hank Thompson, Porter Wagoner, Johnny Horton, Faron Young, Jim Reeves, Jimmy Dean, Roger Miller.</p><br />
                    </div>
                    <div class="row center-align">
                        <div class="col s12">
                            <p>It’s all here - the national acts, the local talent, the hits, the misses – the memories. Check it out!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="years">
            <div class="years-title center-align grey-text text-darken-3">
                <h2>Browse By Year</h2>
                <p class="mt-2">Search Through The Danceland Archives</p>
            </div>
            <div class="row container center-align mt-4">
                <div class="col col5">
                    <router-link to="/year/1954" class="red darken-4 waves-effect waves-light btn-large">1954</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1955" class="red darken-4 waves-effect waves-light btn-large">1955</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1956" class="red darken-4 waves-effect waves-light btn-large">1956</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1957" class="red darken-4 waves-effect waves-light btn-large">1957</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1958" class="red darken-4 waves-effect waves-light btn-large">1958</router-link>
                </div>
            </div>
            <div class="row container center-align mt-4">
                <div class="col col5">
                    <router-link to="/year/1959" class="red darken-4 waves-effect waves-light btn-large">1959</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1960" class="red darken-4 waves-effect waves-light btn-large">1960</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1961" class="red darken-4 waves-effect waves-light btn-large">1961</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1962" class="red darken-4 waves-effect waves-light btn-large">1962</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1963" class="red darken-4 waves-effect waves-light btn-large">1963</router-link>
                </div>
            </div>
            <div class="row container center-align mt-4">
                <div class="col col5">
                    <router-link to="/year/1964" class="red darken-4 waves-effect waves-light btn-large">1964</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1965" class="red darken-4 waves-effect waves-light btn-large">1965</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1966" class="red darken-4 waves-effect waves-light btn-large">1966</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1967" class="red darken-4 waves-effect waves-light btn-large">1967</router-link>
                </div>
                <div class="col col5">
                    <router-link to="/year/1968" class="red darken-4 waves-effect waves-light btn-large">1968</router-link>
                </div>
            </div>
        </div>
        <div id="about" class="pt-4">
            <div class="about-title center-align grey-text text-darken-3">
                <h2 class="pb-4">About Danceland</h2>
            </div>
            <img src="../assets/front.jpg" alt="front" class="responsive-img" id="frontImg">
        </div>
    </div>
        

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    /* Home Styles */
    #home {
        background-image: linear-gradient(to top right, #bdbdbd, #fafafa);
        padding: 2rem 0;
    }
    .row {
        margin-bottom: 0;
    }
    .title {
        font-size: 7rem;
        font-variant: small-caps;
        font-weight: 900;
    }
    h2, h4 {
        line-height: 100%;
    }
    #years {
        background-image: linear-gradient(to bottom right, #bdbdbd, #fafafa);
        /* height: 100vh; */
    }
    #years h2, #about h2 {
        margin: 0;
    }
    .col5 {
        width: 20%;
    }
    #about {
        background-image: linear-gradient(to top right, #bdbdbd, #fafafa);
    }
    #frontImg {
        display: block;
        width: 30%;
        margin: auto;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 15px black;
    }
    @media screen and (min-width: 1200px) {
        #home {
            height: 75vh;
        }
    }
    @media screen and (min-width: 992px) {
        #home {
            height: calc(100vh - 64px);
        }
    }
    @media screen and (max-width: 600px) {
        .title {
            font-size: 4rem;
        }
        .subtitle {
            font-size: 1.5rem;
        }
    }
</style>