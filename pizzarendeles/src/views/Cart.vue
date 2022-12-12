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
            <div class="col-12 text-center align-content-center">
                <h1 class="p-3">Kosár tartalma</h1>
                <button class="btn btn-success mb-3" v-if="$store.state.cart.length > 0" v-on:click="$router.push({ name: 'Setup Order'})">Rendelés leadása</button>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-sm-12 col-12 col-md-6 col-lg-3 mt-2" v-for="item in $store.state.cart">
                <div class="card">
                    <div class="card-body">
                        <img class="card-img-top img-fluid" :src="item.img" alt="Pizza kép helye">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.description }}</h6>
                        <p class="card-subtitle mb-2 text-muted">{{ item.price }} Ft</p>
                        <button class="btn btn-danger" v-on:click="$store.commit('removeItemFromBasket', item)">Törlés</button>
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
