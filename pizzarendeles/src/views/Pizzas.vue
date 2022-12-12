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
            <h1 class="text-center p-3">Pizzáink</h1>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-12 col-12 col-md-6 col-lg-3" v-for="pizza in $store.state.pizzas">
            <div class="card">
            <div class="card-body">
                <img class="card-img-top img-fluid" :src="pizza.img" alt="Pizza kép helye">
                <h5 class="card-title">{{ pizza.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ pizza.description }}</h6>
                <button class="btn btn-success" v-on:click="$store.commit('addPizzaToBasket', pizza)">Kosárba ({{pizza.price}} Ft)</button>
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
