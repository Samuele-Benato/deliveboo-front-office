<script>
export default {
  props: {
    plate: Object,
  },
};
</script>

<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="plate-container my-3 mx-2">
    <div class="row">
        <div class="details-container col-6">
            <div class="plate-details">	
                <h1>{{ plate.name }}</h1>
                <p class="information">
                    {{plate.description}}
                </p>		
                <div class="control ">
                    <button class="btn">
                        <span class="price">{{plate.price}} $</span>
                        <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        <span class="buy">Aggiungi</span>
                    </button>
                </div>  
            </div>
        </div>
        <div class="image-container col-6">
            <div class="plate-image">
                <img :src="plate.image" alt="Plate image">
                <div class="info">
                    <h2> Ingredienti</h2>
                    <div class="fw-bold ps-3">{{plate.ingredients}}</div> 
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap');
.plate-container{
   width: 100%;
}
.details-container {
    box-shadow: 0 1px 20px 1px grey;
	background: rgba(#333, 0.90);
    border-radius:10px;
    text-align: center;
    overflow: hidden;
    margin: 2em auto;
    height: 350px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .plate-details {
      position: relative;
      text-align: left;
      overflow-y: auto; 
      height: 100%;
      float: left;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
    }
  }
.details-container .plate-details h1{
	font-family: 'Bebas Neue', cursive;
	position: relative;
	font-size: 30px;
	color: #d4cece;
	margin: 0.5rem ;
    text-align: center;
}

.details-container .plate-details > p {
    font-family: 'EB Garamond', serif;
	text-align: center;
	font-size: 1.2rem;
	color: #cdc6c6;
    padding: 0 0.5rem;
}
.control{
	display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
}
.btn {
	transform: translateY(0px);
	transition: 0.3s linear;
	background:  rgb(20, 91, 23);
	border-radius: 5px;
  position: relative;
  overflow: hidden;
	cursor: pointer;
	outline: none;
	border: none;
	color: #111;
	padding: 0;
	margin: 10px 0;	
}
.btn:hover{
    transform: translateY(-6px);
	background: rgb(50, 140, 54);}

.btn span {
	font-family: 'Farsan', cursive;
	transition: transform 0.3s;
	display: inline-block;
    padding: 10px 15px;
	font-size: 1em;
	margin:0;	
}
.btn .price, .shopping-cart{
	background: #999;
	border: 0;
	margin: 0;
}
.btn .price {
	transform: translateX(-10%); padding-right: 10px;
}
.btn .shopping-cart {
	transform: translateX(-100%);
    position: absolute;
	background: #999;
	z-index: 1;
    left: 0;
    top: 0;
}
.btn .buy {z-index: 3; font-weight: bolder;}
.btn:hover .price {transform: translateX(-110%);}
.btn:hover .shopping-cart {transform: translateX(0%);}
.plate-image {
	transition: all 0.3s ease-out;
	position: relative;
	overflow: hidden;
	height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
	
}

.image-container img {
    width: 250px;
    aspect-ratio: 1;
    border-radius: 5px;
}

.info {
    background: rgba(196, 192, 192, 0.9);
    font-family: 'Bree Serif', serif;
    border-radius: 10px;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.8;
    text-align: left;
    font-size: 105%;
    cursor: no-drop;
    color: #333;
   padding: 1.5rem;
    left: 0;
    top: 0;
}

.info h2 {text-align: center;}
.plate-image:hover .info{transform: translateX(0);}
.info ul li{transition: 0.3s ease;}
.info ul li:hover{transform: translateX(50px) scale(1.3);}
.plate-image:hover img{opacity: 0.3;}
.plate-image:hover img {transition: all 0.3s ease-out;}
.plate-image:hover img {transform: scale(1.1, 1.1);}

@media only screen and (min-width: 1340px) {
    .plate-container {
        width:48%;
    }
}

/* Schermi con larghezza compresa tra 993px e 1339px */
@media only screen and (max-width: 1399px) and (min-width: 993px) {
    .plate-container {
        width: 48%;
    }
}

@media only screen and (max-width: 1200px) and (min-width: 993px) {
    .image-container img {
    width: 200px;
}
}

/* Schermi con larghezza inferiore a 993px */
@media only screen and (max-width: 992px) {
    .plate-container {
        width: 100%;
    }
    
}

@media (max-width: 768px) {
      .image-container {
        display: none; /* Nasconde l'elemento sotto i 768px */
      }
      .details-container{
        width: 100% !important;
      }
    }
</style>