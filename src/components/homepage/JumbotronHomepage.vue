<script>

</script>

<template>
    <div class="jumbotron">
       <div class="title-jumbo">
        <h1 class="text-center fw-bold">
           Di tutto e di più ! <br>
           Cosa aspetti ? <br>
           Ordina da Deliveboo !
        </h1>
       </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron{
    background-image: url("img/jumbotron.jpg");
    background-size: cover;
    background-position: center;
    min-height: 50vh;
    height: 100%;
    margin-top: 80px;
     
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-jumbo{
    background-color: rgba($color: #fff, $alpha: 0.8);
    padding: 0.5rem;
    border-radius: 5px;
    width: 35%;
    color: #444;
}
.title-jumbo:hover{
    transform: scale(1.1);
    box-shadow: 3px 3px 3px 3px #fff;
    }
</style>