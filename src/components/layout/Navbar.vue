<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">Danceland</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Archives
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="/year/1954">1954</router-link>
                            <router-link class="dropdown-item" to="/year/1955">1955</router-link>
                            <router-link class="dropdown-item" to="/year/1956">1956</router-link>
                            <router-link class="dropdown-item" to="/year/1957">1957</router-link>
                            <router-link class="dropdown-item" to="/year/1958">1958</router-link>
                            <router-link class="dropdown-item" to="/year/1959">1959</router-link>
                            <router-link class="dropdown-item" to="/year/1960">1960</router-link>
                            <router-link class="dropdown-item" to="/year/1961">1961</router-link>
                            <router-link class="dropdown-item" to="/year/1962">1962</router-link>
                            <router-link class="dropdown-item" to="/year/1963">1963</router-link>
                            <router-link class="dropdown-item" to="/year/1964">1964</router-link>
                            <router-link class="dropdown-item" to="/year/1965">1965</router-link>
                            <router-link class="dropdown-item" to="/year/1966">1966</router-link>
                            <router-link class="dropdown-item" to="/year/1967">1967</router-link>
                            <router-link class="dropdown-item" to="/year/1968">1968</router-link>
                        </div>
                    </li>
                    <li class="nav-item">
                        
                    </li>
                    <li class="nav-item">
                        
                    </li>
                    <li class="nav-item">
                        
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>

<style scoped>

</style>