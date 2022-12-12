import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzas: [
      {name: 'Margaréta', price: 1690, description: 'Sima margaréta pizza', img: "/src/assets/pizzas/margherita.jpg"},
      {name: 'Marinara', price: 2190, description: 'Pizza paradicsomszósszal, fokhagymával és oregánóval', img: "/src/assets/pizzas/marinara.jpg"},
      {name: 'Quattro Stagioni', price: 2890, description: 'Hagyományos "Négy évszak" pizza', img: "/src/assets/pizzas/quattrostagioni.jpg"},
      {name: 'Quattro Formaggi', price: 2790, description: 'Hagyományos "Négy sajtos" pizza', img: "/src/assets/pizzas/quattroformaggi.jpg"},
  ],
  drinks: [
      {name: 'Coca Cola', price: 790, description: 'Alumínium dobozos üdítő', img: "/src/assets/drinks/cocacola.png"},
      {name: 'Fanta', price: 849, description: 'Alumínium dobozos üdítő', img: "/src/assets/drinks/fanta.png"},
      {name: 'Sprite', price: 690, description: 'Alumínium dobozos üdítő', img: "/src/assets/drinks/sprite.png"},
      {name: 'Pepsi', price: 799, description: 'Alumínium dobozos üdítő', img: "/src/assets/drinks/pepsi.png"},
  ],
  cart: [],
  error: null,
  finishedOrder: false
  },
  getters: {
    totalPrice(state) {
      return state.cart.reduce((total, current) => total + current.price, 0)
    }
  },
  mutations: {
    addPizzaToBasket(state, pizza) {
      state.cart.push({ ...pizza, product: 'pizza' })
    },
    addDrinkToBasket(state, drink) {
      state.cart.push({ ...drink, product: 'drink' })
    },
    removeItemFromBasket(state, index) {
      state.cart.splice(index, 1)
    },
    setError(state, error) {
      state.error = error
    },
    setOrderState(state, stateOfOrder) {
      state.finishedOrder = stateOfOrder
    }
  },
  actions: {
  },
  modules: {
  }
})
