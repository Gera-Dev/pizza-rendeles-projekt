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
            <div class="col-12 text-center mt-5">
                <h2>Köszönjük a rendelést!</h2>
                <p>A rendelését rövidesen feldolgozzuk.</p>
            </div>
        </div>
        <div class="row">
            <h1 class="text-center">Rendelés tartalma:</h1>
        </div>
        <div class="row mb-5">
            <div class="col-sm-12 col-12 col-md-6 col-lg-3 mt-2" v-for="item in $store.state.cart">
                <div class="card">
                    <div class="card-body">
                        <img class="card-img-top img-fluid" :src="item.img" alt="Pizza kép helye">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ item.description }}</h6>
                        <p class="card-subtitle mb-2 text-muted">{{ item.price }} Ft</p>
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
