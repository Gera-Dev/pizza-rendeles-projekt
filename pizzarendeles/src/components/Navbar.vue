<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.state.cart.length);
    watch(cartItems, () => {
        var totalPrice = computed(() => store.getters.totalPrice);
        document.getElementById('totalPrice').innerHTML = '('+ totalPrice.value + ' Ft)';
      });
  },
};
</script>

<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#" v-on:click="this.$router.push({name: 'home'})">
        <img src="/src/assets/pizza.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        KockaPizzéria
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <RouterLink class="btn btn-outline-warning m-2" to="/pizza"><i class="fa-solid fa-pizza-slice"></i> Pizzáink</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="btn btn-outline-warning m-2" to="/drink"><i class="fa-solid fa-whiskey-glass"></i> Üditők</RouterLink>
            </li>
        </ul>
        <div class="d-flex">
            <RouterLink class="btn btn-outline-danger m-2" to="/cart"><i class="fa-solid fa-cart-shopping"></i> Kosár megtekintése <span id="totalPrice">(0 Ft)</span></RouterLink>
        </div>
        </div>
    </div>
    </nav>
</template>