<template>
    <footer class="footer text-center">
        <div class="container-fluid footer1 py-3">
            <div class="row">
                <div class="col">
                    <h5>Footer Content</h5>
                    <p>You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col">
                    <h5>Links</h5>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                        <li>Link 5</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer2">
            <div class="container-fluid py-3">
                © 2019 Steve Wilson
            </div>
          </div>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .footer1 {
        background-color: #4b545c;
        color: #fff;
    }
    .footer2 {
        background-color: #343a40;
        color: #fff;
    }
    
    ul {
        list-style-type: none;
    }
</style>