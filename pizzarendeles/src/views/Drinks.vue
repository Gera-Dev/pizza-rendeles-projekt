<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
  },
};
</script>


<template>
    <div class="container">
        <div class="row">
        <div class="col-12">
            <h1 class="text-center p-3">Italaink</h1>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-12 col-12 col-md-6 col-lg-3" v-for="drink in $store.state.drinks">
            <div class="card">
            <div class="card-body">
                <img class="card-img-top img-fluid" :src="drink.img" alt="Ital kép helye">
                <h5 class="card-title">{{ drink.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ drink.description }}</h6>
                <button class="btn btn-success" v-on:click="$store.commit('addDrinkToBasket', drink)">Kosárba ({{drink.price}} Ft)</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
.card-img-top {
    height: 20vh;
    width: auto;
    margin: auto;
}
</style>
