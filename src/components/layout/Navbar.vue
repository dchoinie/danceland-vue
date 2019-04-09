<template>
    <div>
        <!-- Dropdown Structure -->
        <ul id="dropdownArchives" class="dropdown-content">
            <li><router-link class="dropdown-item" to="/year/1954">1954</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1955">1955</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1956">1956</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1957">1957</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1958">1958</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1959">1959</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1960">1960</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1961">1961</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1962">1962</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1963">1963</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1964">1964</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1965">1965</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1966">1966</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1967">1967</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1968">1968</router-link></li>     
        </ul>
        <ul id="dropdownArchives2" class="dropdown-content">
            <li><router-link class="dropdown-item" to="/year/1954">1954</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1955">1955</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1956">1956</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1957">1957</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1958">1958</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1959">1959</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1960">1960</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1961">1961</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1962">1962</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1963">1963</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1964">1964</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1965">1965</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1966">1966</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1967">1967</router-link></li>
            <li><router-link class="dropdown-item" to="/year/1968">1968</router-link></li>     
        </ul>
        <ul class="sidenav" id="mobileMenu">
            <li><a class="dropdown-trigger" href="#!" data-target="dropdownArchives2">Archives<i class="material-icons right">arrow_drop_down</i></a></li>
            <li><a href="#">Early Years</a></li>
            <li><a href="#">Darlowe Olsesen</a></li>
            <li><a href="#">Danceland Bandstand</a></li>
            <li><a href="#">Local Bands</a></li>
            <li><a href="#">The Library</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <nav class="grey darken-3">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">Danceland</router-link>
                <a href="#" class="sidenav-trigger" data-target="mobileMenu"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <!-- Dropdown Trigger -->
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdownArchives">Archives<i class="material-icons right">arrow_drop_down</i></a></li>
                    <li><a href="#">Early Years</a></li>
                    <li><a href="#">Darlowe Olsesen</a></li>
                    <li><a href="#">Danceland Bandstand</a></li>
                    <li><a href="#">Local Bands</a></li>
                    <li><a href="#">The Library</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#"><i class="material-icons">search</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
    $(document).ready(function(){
        $(".dropdown-trigger").dropdown();
        $('.sidenav').sidenav();
    })
    
</script>
    
<style scoped>
    .nav-wrapper {
        padding-right: 2rem;
        padding-left: 2rem;
    }
    .dropdown-content a {
        color: #212121;
    }
</style>