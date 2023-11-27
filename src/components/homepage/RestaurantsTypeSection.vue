<script>
import axios from 'axios';
</script>

<template>
    <div class="restaurants-type">
        <h2 class="title-type-section">Che si mangia oggi?</h2>
    </div>
</template>

<style lang="scss" scoped>
.restaurants-type{
    background-image: url("img/restaurants-type.jpg");
    background-size: 50%;
    background-position: start;
    min-height: 50vh;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: start;
}

.title-type-section{
    background-color: rgba($color: #fff, $alpha: 0.8);
    padding: 0.5rem;
    border-radius: 5px;
    width: 70%;
    text-align: center;
    color: #444;
    font-weight: 700;
}

</style>